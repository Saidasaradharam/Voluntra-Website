import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Voluntra</h1>
          <ul className="hidden md:flex space-x-6 text-lg font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Events</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
          </ul>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Voluntra
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Connecting volunteers with NGOs to create a better tomorrow. Join us to make an impact and
          bring positive change to society.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* Upcoming Events Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Upcoming Events
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((event) => (
            <div
              key={event}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Event Title {event}
              </h4>
              <p className="text-sm text-gray-500 mb-2">Date: 12 Sep 2025</p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
                turpis ut eros tincidunt.
              </p>
              <div className="flex space-x-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Register
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 px-6 py-12">
        <h3 className="text-3xl font-bold text-center mb-6">About Us</h3>
        <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
          At <span className="font-bold text-blue-600">Voluntra</span>, our mission is to create a
          platform that bridges the gap between NGOs and passionate volunteers.
          We aim to bring people together for social causes, organize impactful
          events, and contribute towards a better society.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="px-6 py-12 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:voluntra@example.com"
            className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaEnvelope className="mr-2" /> Email Us
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white px-5 py-3 rounded-lg shadow hover:bg-green-600 transition"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
        <p>© {new Date().getFullYear()} Voluntra. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
