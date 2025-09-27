import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext.jsx'; 
import App from '../App.jsx';

const RouterWrapper = () => {
    const navigate = useNavigate(); 

    return (
        <AuthProvider navigate={navigate}> 
            <App />
        </AuthProvider>
    );
}
export default RouterWrapper;