import React, { useState, useEffect } from "react";
import {
  Download,
  Home,
  LogOut,
  Users,
  Calendar,
  DollarSign,
  BarChart2,
  Settings,
  Info,
  Clock,
  Award,
  User 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// --- AUTH IMPORTS ---
import { useAuth } from "../../context/AuthContext.jsx";
import Profile from '../volunteer/Profile.jsx' // Assuming Profile component is reusable
import DonationForm from '../../components/DonationForm.jsx';
// --------------------

// Placeholder components (Defined outside the main component for cleanliness)
const EventsContent = () => (
  <div className="bg-white rounded-lg shadow p-8">
    <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-4">Your Events</h3>
    <p className="text-gray-600 mb-6">View and manage your corporate events and volunteer campaigns.</p>
  </div>
);

const VolunteersContent = () => (
  <div className="bg-white rounded-lg shadow p-8">
    <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-4">Employee Volunteers</h3>
    <p className="text-gray-600 mb-6">Monitor employee participation and volunteer hours.</p>
  </div>
);

const ReportingContent = () => (
  <div className="bg-white rounded-lg shadow p-8">
    <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-4">Reporting & Analytics</h3>
    <p className="text-gray-600 mb-6">Generate and download reports on your social impact.</p>
  </div>
);


const CorporateDashboard = () => {
  // --- AUTH INTEGRATION ---
  const { user, logout } = useAuth();
  // ------------------------
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("events");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- SECONDARY SECURITY CHECK ---
  if (!user && !isLoading) {
    navigate("/login", { replace: true });
    return null;
  }
  
  useEffect(() => {
    // Simulate loading data
    try {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  const handleSignOut = () => {
    logout();
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "events":
        return <EventsContent />;
      case "volunteers":
        return <VolunteersContent />;
      case "reporting":
        return <ReportingContent />;
      case "profile": // ADDED PROFILE CASE
        return <Profile />;
      default:
        return null;
    }
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

  return (
    <div className="flex min-h-screen bg-[#E5E5E5]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0D1B2A] text-white flex flex-col p-4 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold" style={{ color: "#D4AF37" }}>
            Voluntra
          </h1>
        </div>
        
        {/* Dynamic User Greeting in Sidebar */}
        <div className="mt-4 mb-8">
            <p className="text-sm text-gray-400">Logged in as:</p>
            <h2 className="text-lg font-semibold text-white">
                {user ? user.username : 'Corporate Admin'}
            </h2> 
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
                onClick={() => setActiveTab("volunteers")}
                className={`w-full flex items-center p-3 rounded-lg font-medium transition-colors ${
                  activeTab === "volunteers"
                    ? "bg-[#112A3C] text-[#D4AF37] border-r-4 border-[#D4AF37]"
                    : "text-gray-300 hover:bg-[#112A3C] hover:text-[#D4AF37]"
                }`}
              >
                <Users size={18} className="mr-3" />
                <span>Volunteers</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("reporting")}
                className={`w-full flex items-center p-3 rounded-lg font-medium transition-colors ${
                  activeTab === "reporting"
                    ? "bg-[#112A3C] text-[#D4AF37] border-r-4 border-[#D4AF37]"
                    : "text-gray-300 hover:bg-[#112A3C] hover:text-[#D4AF37]"
                }`}
              >
                <BarChart2 size={18} className="mr-3" />
                <span>Reporting</span>
              </button>
            </li>
            {/* ADDED PROFILE TAB FOR EDITING USER DETAILS */}
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
          </ul>
        </nav>
        <div className="mt-auto border-t border-gray-700 pt-4">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center p-3 rounded-lg font-medium text-gray-300 hover:bg-[#112A3C] hover:text-white transition-colors"
          >
            <Home size={18} className="mr-3" />
            <span>Home</span>
          </button>
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
            Welcome back, {user ? user.first_name || user.username : 'Corporate Admin'}! 👋
          </h1>
          <p className="text-lg text-gray-600">Track your company's social impact</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { value: "3", label: "Active Campaigns", icon: Calendar, color: "text-[#D4AF37]" },
            { value: "452", label: "Employee Volunteers", icon: Users, color: "text-green-500" },
            { value: "1,200", label: "Hours Logged", icon: BarChart2, color: "text-purple-500" }
          ].map(({ value, label, icon: Icon, color }, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg p-6 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center bg-gray-100 ${color}`}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#0D1B2A]">{value}</h3>
                  <p className="text-gray-600 font-medium">{label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Donation Form Integration for Corporate Dashboard */}
        <div className="mb-10 max-w-lg">
            <DonationForm /> 
        </div>
        
        {renderTabContent()}
      </main>
    </div>
  );
};

export default CorporateDashboard;