import React, { useState, useEffect } from "react";
import { Download, Home, LogOut, Calendar, Clock, Award } from "lucide-react";

const VolunteerDashboard = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setTimeout(() => {
        setIsLoading(false);
        const isFirstLogin = true;
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

  const handleClosePopup = () => setShowPopup(false);
  const handleNavigateProfile = () => {
    console.log("Navigating to profile...");
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
            onClick={() => console.log("Return home")}
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

  return (
    <div className="min-h-screen bg-[#E5E5E5] flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#0D1B2A] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{ color: "#D4AF37" }}>
            Voluntra
          </h1>
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-white hover:text-[#D4AF37] transition-colors">
              <Home size={18} />
              <span>Home</span>
            </button>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0D1B2A] mb-2">
            Welcome back, Alex! 👋
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

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow p-2 mb-10 flex space-x-4">
          {[
            { key: "ongoing", label: "Ongoing", icon: Clock },
            { key: "upcoming", label: "Upcoming Events", icon: Calendar },
            { key: "history", label: "History", icon: Award }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === key
                  ? "bg-[#0D1B2A] text-[#D4AF37]"
                  : "text-[#0D1B2A] hover:text-[#D4AF37]"
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow p-8">
          {activeTab === "ongoing" && (
            <div className="text-center py-12">
              <Clock className="mx-auto mb-4 text-gray-400" size={32} />
              <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-2">No Ongoing Events</h3>
              <p className="text-gray-600 mb-6">You don’t have any ongoing volunteer activities.</p>
              <button className="bg-[#D4AF37] hover:bg-[#C19B20] text-[#0D1B2A] px-6 py-3 rounded-lg font-semibold transition">
                Browse Events
              </button>
            </div>
          )}

          {activeTab === "upcoming" && (
            <div className="text-center py-12">
              <Calendar className="mx-auto mb-4 text-gray-400" size={32} />
              <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-2">No Upcoming Events</h3>
              <p className="text-gray-600 mb-6">Stay tuned for exciting volunteer opportunities!</p>
              <button className="bg-[#D4AF37] hover:bg-[#C19B20] text-[#0D1B2A] px-6 py-3 rounded-lg font-semibold transition">
                Get Notified
              </button>
            </div>
          )}

          {activeTab === "history" && (
            <div>
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
          )}
        </div>
      </main>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-[#0D1B2A] rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
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

      {/* Footer */}
      <footer className="bg-[#0D1B2A] text-white py-6 text-center mt-auto">
        <p className="text-sm">© {new Date().getFullYear()} Voluntra. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default VolunteerDashboard;
