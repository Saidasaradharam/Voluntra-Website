import React, { useState, useEffect } from "react";
import { Download, Home, LogOut, Calendar, Clock, Award } from "lucide-react";

const VolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulate loading data
      setTimeout(() => {
        setIsLoading(false);
        const isFirstLogin = true; // Simulating first login for demo
        if (isFirstLogin) {
          setShowPopup(true);
        }
      }, 1000);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  const handleSignOut = () => {
    console.log("Signing out...");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNavigateProfile = () => {
    console.log("Navigating to profile...");
    setShowPopup(false);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => console.log("Return home")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin"></div>
            <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0"></div>
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-700">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Voluntra
                </h1>
              </div>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50">
                <Home size={18} />
                <span className="font-medium">Home</span>
              </button>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-red-50"
            >
              <LogOut size={18} />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-lg text-gray-600">Here's your volunteer journey so far</p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">142</h3>
                <p className="text-gray-600 font-medium">Hours Volunteered</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Calendar className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">23</h3>
                <p className="text-gray-600 font-medium">Events Attended</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">15</h3>
                <p className="text-gray-600 font-medium">Certificates Earned</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tabs */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-2 mb-8 border border-white/20">
          <div className="flex flex-wrap gap-2">
            {[
              { key: "ongoing", label: "Ongoing", icon: Clock },
              { key: "upcoming", label: "Upcoming Events", icon: Calendar },
              { key: "history", label: "History", icon: Award }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === key
                    ? "bg-white text-blue-600 shadow-lg scale-105"
                    : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Tab Content */}
        <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl overflow-hidden">
          {activeTab === "ongoing" && (
            <div className="p-8">
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-gray-400" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Ongoing Events</h3>
                <p className="text-gray-600 mb-6">You don't have any ongoing volunteer activities at the moment.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                  Browse Events
                </button>
              </div>
            </div>
          )}

          {activeTab === "upcoming" && (
            <div className="p-8">
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-gray-400" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Upcoming Events</h3>
                <p className="text-gray-600 mb-6">Stay tuned for exciting volunteer opportunities coming your way!</p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                  Get Notified
                </button>
              </div>
            </div>
          )}

          {activeTab === "history" && (
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Your Volunteer History</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Event</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Date</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Hours</th>
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">Certificate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { event: "Tree Plantation Drive", date: "12 Aug 2024", hours: "8", status: "Available" },
                      { event: "Beach Cleanup Campaign", date: "25 July 2024", hours: "6", status: "Available" },
                      { event: "Food Distribution", date: "10 July 2024", hours: "4", status: "Available" },
                      { event: "Educational Workshop", date: "28 June 2024", hours: "5", status: "Available" }
                    ].map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="py-4 px-6">
                          <div className="font-semibold text-gray-800">{item.event}</div>
                        </td>
                        <td className="py-4 px-6 text-gray-600">{item.date}</td>
                        <td className="py-4 px-6">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {item.hours}h
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg">
                            <Download size={16} />
                            <span>Download</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced First Login Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 scale-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Complete Your Profile</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Help us personalize your volunteer experience by completing your profile information.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={handleNavigateProfile}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Complete Profile
                  </button>
                  <button
                    onClick={handleClosePopup}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerDashboard;