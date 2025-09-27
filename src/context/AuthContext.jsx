import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from '../utils/axiosInstance'; // Use the custom Axios instance

const AuthContext = createContext(null);

export const AuthProvider = ({ children, navigate }) => { 
    // --- Authentication Step Management ---
    const [authStep, setAuthStep] = useState(1);
    const [checkedUsername, setCheckedUsername] = useState(null);

    // --- User State Management ---
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [authError, setAuthError] = useState(null);

    // FIX: Initialize user from localStorage only once and set loading state
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const userData = localStorage.getItem('user_data');
        
        if (userData && accessToken) {
            try {
                const parsedUser = JSON.parse(userData);
                if (parsedUser && parsedUser.role) { 
                    setUser(parsedUser);
                } else {
                    // If data is corrupt, clear the session
                    logout();
                }
            } catch (e) {
                localStorage.removeItem('user_data');
            }
        }
        // Always set loading to false AFTER the check is done, so ProtectedRoute can proceed
        setLoading(false); 
    }, []);
    
    // Helper function to get user profile after token is issued
    // FIX: Takes accessToken as an argument to bypass race conditions
    const fetchUserProfile = async (accessToken) => { 
        try {
            const userResponse = await axios.get('/auth/users/me/', {
                // Explicitly set the Authorization header for this critical request
                headers: {
                    'Authorization': `Bearer ${accessToken}` 
                }
            });
            // NOTE: userData MUST include the 'role' field from Django's serializer
            return userResponse.data; 
        } catch (error) {
            console.error("Failed to fetch user profile:", error);
            // If profile fetch fails, token is likely expired or invalid
            return null; 
        }
    };

    const checkUser = async (username) => {
        setLoading(true);
        setAuthError(null);
        try {
            const response = await axios.post('/auth/check_user/', { username });
            
            const { exists } = response.data;
            setCheckedUsername(username);

            setLoading(false);

            if (exists) {
                setAuthStep(2); // User exists -> Login step
            } else {
                setAuthStep(3); // User does not exist -> Registration step
            }
        } catch (error) {
            setLoading(false);
            setAuthError('Error checking user. Please try again.');
            console.error("Check User Error:", error.response || error);
        }
    };

    const login = async (username, password) => {
        setLoading(true);
        setAuthError(null);
        try {
            // 1. Get JWT tokens (401 error prevention check: ensure credentials are correct)
            const tokenResponse = await axios.post('/auth/jwt/create/', { 
                username: username, 
                password: password 
            }, {
                // Temporary explicit header for 401 fix
                 headers: { 'Content-Type': 'application/json' }
            });
            
            const { access, refresh } = tokenResponse.data;

            // 2. Store tokens
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            
            // 3. Fetch user data (role) using the fresh token
            const userData = await fetchUserProfile(access); 
            
            if (userData && userData.role) {
                // SUCCESS: User data with role was found
                localStorage.setItem('user_data', JSON.stringify(userData));
                setUser(userData);
                setLoading(false);
                
                // 4. Redirect based on role
                const redirectPath = getDashboardPath(userData.role);
                navigate(redirectPath);
            } else {
                // CRITICAL FAILURE: Tokens are valid, but profile fetch failed (e.g., missing role)
                logout(); // Clear the partial session to avoid confusing state
                setLoading(false); 
                setAuthError('Login failed: Could not retrieve user profile.');
            }
        } catch (error) {
            // Handles 401 Unauthorized from /jwt/create/ (bad username/password)
            setLoading(false);
            setAuthError('Login failed. Check your username and password.');
            console.error("Login Error:", error.response || error);
        }
    };

    const register = async (userData) => {
        setLoading(true);
        setAuthError(null);
        try {
            // 1. Registration endpoint is /auth/users/
            await axios.post('/auth/users/', userData);
            
            // 2. Immediately log in the user (to get tokens and complete flow)
            await login(userData.username, userData.password); 

        } catch (error) {
            setLoading(false);
            // Attempt to extract specific error messages
            const errData = error.response?.data;
            let message = "Registration failed.";
            if (errData?.username) message = `Username: ${errData.username[0]}`;
            else if (errData?.email) message = `Email: ${errData.email[0]}`;
            
            setAuthError(message);
            console.error("Registration Error:", error.response || error);
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_data');
        setUser(null);
        navigate('/'); 
    };

    const getDashboardPath = (role) => {
        switch (role) {
            case 'volunteer':
                return '/dashboard/volunteer';
            case 'ngo':
                return '/dashboard/ngo';
            case 'corporate':
                return '/dashboard/corporate';
            default:
                return '/dashboard';
        }
    };

    const resetAuthStep = () => {
        setAuthStep(1);
        setCheckedUsername(null);
        setAuthError(null);
    };

    const contextData = {
        user,
        loading,
        authError,
        authStep,
        checkedUsername,
        checkUser,
        resetAuthStep,
        login,
        register,
        logout,
        axiosInstance: axios 
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);