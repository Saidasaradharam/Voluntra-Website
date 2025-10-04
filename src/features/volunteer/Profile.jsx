// src/features/volunteer/Profile.jsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext.jsx'; 
import { User, Mail, Edit } from 'lucide-react';

const Profile = () => {
    const { user, axiosInstance } = useAuth();
    
    // Initialize form data with current user's profile information
    const [formData, setFormData] = useState({
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        email: user?.email || '',
        // Include username and ID for reference, but disable editing
    });
    
    const [status, setStatus] = useState(null); // 'success', 'error', null
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            // CRITICAL: Send PATCH request to update the user's profile
            // Endpoint: /api/profile/1/ (where 1 is the user ID)
            const response = await axiosInstance.patch(`/profile/${user.id}/`, formData);

            if (response.status === 200) {
                setStatus('success');
                // OPTIONAL: Manually update user context/localStorage if needed, 
                // though a subsequent refresh/login would eventually load the new data.
            }
        } catch (error) {
            console.error("Profile Update Failed:", error.response || error);
            setStatus('error');
            // Extract detailed validation errors from Django if needed
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow p-8">
            <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-4 flex items-center">
                <User size={24} className="mr-3" /> Profile Management
            </h3>

            {status === 'success' && (
                <p className="p-3 bg-green-100 text-green-700 rounded-lg mb-4 font-semibold">
                    ✅ Profile updated successfully!
                </p>
            )}
            {status === 'error' && (
                <p className="p-3 bg-red-100 text-red-700 rounded-lg mb-4">
                    ❌ Update failed. Please check your network or try again.
                </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username (Read-only reference) */}
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <label className="text-sm font-medium text-gray-600">Username / Role:</label>
                    <span className="font-semibold text-[#0D1B2A]">{user.username} ({user.role})</span>
                </div>
                
                {/* First Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#D4AF37]" />
                </div>

                {/* Last Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleChange}
                           className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-[#D4AF37]" />
                </div>
                
                {/* Email (Disabled - requires separate auth change) */}
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} disabled
                           className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-100" />
                </div>

                <button
                    type="submit"
                    className="mt-4 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors"
                    style={{backgroundColor: '#D4AF37', color: '#0D1B2A'}}
                    disabled={loading}
                >
                    <Edit size={16} />
                    <span>{loading ? 'Saving Changes...' : 'Save Profile Changes'}</span>
                </button>
            </form>
        </div>
    );
};

export default Profile;