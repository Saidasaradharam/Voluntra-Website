import React, { useState, useEffect } from "react";
import { Download, Home, LogOut, Calendar, Clock, Award, User, Settings, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"; // Adjust path as necessary
import Profile from './Profile.jsx';

const VolunteerDashboard = () => {
  const { user, logout, axiosInstance } = useAuth(); // Get user state and logout function
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("events"); // 'events' is the new default tab
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!user && !isLoading) {
      navigate("/login", { replace: true });
      return null; // Stop rendering the dashboard content
  }

  useEffect(() => {
    try {
      setTimeout(() => {
        setIsLoading(false);
        const isFirstLogin = true; // Placeholder for actual localStorage check
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
    logout(); 
  };

  const handleClosePopup = () => setShowPopup(false);
  const handleNavigateProfile = () => {
    setActiveTab("profile");
    setShowPopup(false);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E5E5E5] p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0D1B2A] mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#D4AF37] hover:bg-[#C19B20] text-[#0D1B2A] px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E5E5E5]">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-[#0D1B2A]/30 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-semibold text-[#0D1B2A]">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "events":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-4">Ongoing Events</h3>
              <p className="text-gray-600">You don't have any ongoing volunteer activities.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-4">Upcoming Events</h3>
              <p className="text-gray-600">Stay tuned for exciting volunteer opportunities!</p>
            </div>
          </div>
        );
      case "history":
        return (
          <div className="bg-white rounded-lg shadow p-8">
            <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-6">Your Volunteer History</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-[#0D1B2A]">Event</th>
                  <th className="text-left py-4 px-6 text-[#0D1B2A]">Date</th>
                  <th className="text-left py-4 px-6 text-[#0D1B2A]">Hours</th>
                  <th className="text-left py-4 px-6 text-[#0D1B2A]">Certificate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { event: "Tree Plantation Drive", date: "12 Aug 2024", hours: "8" },
                  { event: "Beach Cleanup Campaign", date: "25 Jul 2024", hours: "6" },
                  { event: "Food Distribution", date: "10 Jul 2024", hours: "4" }
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition">
                    <td className="py-4 px-6 font-semibold text-[#0D1B2A]">{item.event}</td>
                    <td className="py-4 px-6 text-gray-600">{item.date}</td>
                    <td className="py-4 px-6">
                      <span className="bg-[#E5E5E5] text-[#0D1B2A] px-3 py-1 rounded-full text-sm font-medium">
                        {item.hours}h
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <button className="flex items-center space-x-2 bg-[#0D1B2A] hover:bg-[#112A3C] text-white px-4 py-2 rounded-lg font-medium transition">
                        <Download size={16} />
                        <span>Download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "profile":
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#E5E5E5]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0D1B2A] text-white flex flex-col p-4 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold" style={{ color: "#D4AF37" }}>
            Voluntra
          </h1>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab("events")}
                className={`w-full flex items-center p-3 rounded-lg font-medium transition-colors ${
                  activeTab === "events"
                    ? "bg-[#112A3C] text-[#D4AF37] border-r-4 border-[#D4AF37]"
                    : "text-gray-300 hover:bg-[#112A3C] hover:text-[#D4AF37]"
                }`}
              >
                <Calendar size={18} className="mr-3" />
                <span>Events</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("history")}
                className={`w-full flex items-center p-3 rounded-lg font-medium transition-colors ${
                  activeTab === "history"
                    ? "bg-[#112A3C] text-[#D4AF37] border-r-4 border-[#D4AF37]"
                    : "text-gray-300 hover:bg-[#112A3C] hover:text-[#D4AF37]"
                }`}
              >
                <Award size={18} className="mr-3" />
                <span>History</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center p-3 rounded-lg font-medium transition-colors ${
                  activeTab === "profile"
                    ? "bg-[#112A3C] text-[#D4AF37] border-r-4 border-[#D4AF37]"
                    : "text-gray-300 hover:bg-[#112A3C] hover:text-[#D4AF37]"
                }`}
              >
                <User size={18} className="mr-3" />
                <span>Profile</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/")}
                className="w-full flex items-center p-3 rounded-lg font-medium text-gray-300 hover:bg-[#112A3C] hover:text-white transition-colors"
              >
                <Home size={18} className="mr-3" />
                <span>Home</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="mt-auto border-t border-gray-700 pt-4">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center p-3 rounded-lg font-medium text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors"
          >
            <LogOut size={18} className="mr-3" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0D1B2A] mb-2">
                Welcome back, {user ? user.first_name || user.username : 'Volunteer'}! 👋
            </h1>
            <p className="text-lg text-gray-600">Here’s your volunteer journey so far</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { value: "142", label: "Hours Volunteered", icon: Clock },
            { value: "23", label: "Events Attended", icon: Calendar },
            { value: "15", label: "Certificates Earned", icon: Award }
          ].map(({ value, label, icon: Icon }, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg p-6 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[#0D1B2A]">
                  <Icon className="text-[#D4AF37]" size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#0D1B2A]">{value}</h3>
                  <p className="text-gray-600 font-medium">{label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {renderTabContent()}
      </main>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-[#0D1B2A] rounded-lg flex items-center justify-center mx-auto mb-6">
              <User className="text-[#D4AF37]" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3">Complete Your Profile</h2>
            <p className="text-gray-600 mb-8">Help us personalize your volunteer experience by completing your profile.</p>
            <div className="space-y-3">
              <button
                onClick={handleNavigateProfile}
                className="w-full bg-[#D4AF37] hover:bg-[#C19B20] text-[#0D1B2A] px-6 py-3 rounded-lg font-semibold transition"
              >
                Complete Profile
              </button>
              <button
                onClick={handleClosePopup}
                className="w-full bg-gray-100 hover:bg-gray-200 text-[#0D1B2A] px-6 py-3 rounded-lg font-semibold transition"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerDashboard;