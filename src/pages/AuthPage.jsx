import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserPlus, FaSignInAlt, FaArrowRight, FaHandsHelping, FaBuilding } from "react-icons/fa";

// This is a placeholder for your database check.
// In a real application, this would be an API call to your backend.
const checkEmailInDatabase = async (email) => {
  console.log(`Checking database for email: ${email}`);
  // Simulate a delay and a random response
  return new Promise(resolve => {
    setTimeout(() => {
      // Return true for an existing user, false for a new user
      const isUserExist = email === "existing.user@example.com";
      resolve(isUserExist);
    }, 1000);
  });
};

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("volunteer");
  const [step, setStep] = useState(1); // 1: Email, 2: Login/Register
  const [isNewUser, setIsNewUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const exists = await checkEmailInDatabase(email);
      setIsNewUser(!exists);
      setStep(2);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (isNewUser) {
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        setIsLoading(false);
        return;
      }
      console.log("Registering:", { email, password, role });
      localStorage.setItem("user", JSON.stringify({ email, role }));
      localStorage.setItem("firstLogin", "true");
      navigate("/dashboard");
    } else {
      console.log("Logging in:", { email, password });
      // Here you'd send password to backend for verification
      localStorage.setItem("user", JSON.stringify({ email, role: "volunteer" })); // Assuming volunteer role for login example
      localStorage.setItem("firstLogin", "false");
      navigate("/dashboard");
    }
  };

  const renderContent = () => {
    if (step === 1) {
      return (
        <>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Login/Signup
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email to get started.
          </p>
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaEnvelope className="text-gray-400" />
              </span>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <span>Next</span>
                  <FaArrowRight />
                </>
              )}
            </button>
          </form>
        </>
      );
    }

    if (step === 2) {
      return (
        <>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            {isNewUser ? "Create Your Account" : "Welcome Back!"}
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {isNewUser ? "Complete your registration below." : "Please enter your password."}
          </p>
          <div className="text-center text-gray-500 mb-4 text-sm font-medium">
            Email: <span className="text-blue-600 font-bold">{email}</span>
            <button
              onClick={() => { setStep(1); setPassword(""); }}
              className="ml-2 text-blue-400 hover:underline"
            >
              (change)
            </button>
          </div>
          <form onSubmit={handleAuthSubmit} className="space-y-6">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </span>
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-500"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            {isNewUser && (
              <>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaLock className="text-gray-400" />
                  </span>
                  <input
                    type="password"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 placeholder-gray-500"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                        Sign up as:
                    </label>
                    <div className="relative">
                        {/* This span shows the icon based on the selected role */}
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        {role === "volunteer" && <FaHandsHelping className="text-gray-400" />}
                        {role === "ngo" && <FaBuilding className="text-gray-400" />}
                        {role === "corporate" && <FaBuilding className="text-gray-400" />}
                        </span>
                        {/* This is the select element */}
                        <select
                        id="role"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none transition-all duration-200"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        >
                        <option value="volunteer">Volunteer</option>
                        <option value="ngo">NGO</option>
                        <option value="corporate">Corporate</option>
                        </select>
                        {/* This div adds the dropdown arrow icon */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                        </div>
                    </div>
                    </div>
              </>
            )}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  {isNewUser ? <FaUserPlus /> : <FaSignInAlt />}
                  <span>{isNewUser ? "Sign Up" : "Sign In"}</span>
                </>
              )}
            </button>
          </form>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 w-full max-w-sm transform transition-all duration-300 ease-in-out">
        {renderContent()}
      </div>
    </div>
  );
};

export default AuthPage;