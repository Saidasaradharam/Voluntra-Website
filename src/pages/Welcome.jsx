import React from "react";
import { Mail, MessageCircle } from "lucide-react";

const WelcomePage = () => {
  // Add CSS reset for full viewport coverage
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100vw';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col text-gray-800 overflow-x-hidden" style={{backgroundColor: '#E5E5E5'}}>
      {/* Navbar */}
      <nav className="shadow-md sticky top-0 z-50 w-full" style={{backgroundColor: '#FFFFFF'}}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{color: '#0D1B2A'}}>Voluntra</h1>
          <ul className="hidden md:flex space-x-6 text-lg font-medium" style={{color: '#0D1B2A'}}>
            <li className="cursor-pointer transition-colors" style={{'&:hover': {color: '#D4AF37'}}}>Home</li>
            <li className="cursor-pointer transition-colors hover:opacity-80">About Us</li>
            <li className="cursor-pointer transition-colors hover:opacity-80">Events</li>
            <li className="cursor-pointer transition-colors hover:opacity-80">Contact Us</li>
          </ul>
          <button className="md:hidden text-2xl" style={{color: '#0D1B2A'}}>☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full text-white py-16 px-4 sm:px-6 lg:px-8 text-center" style={{backgroundColor: '#0D1B2A'}}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Welcome to Voluntra
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            Connecting volunteers with NGOs to create a better tomorrow. Join us to make an impact and
            bring positive change to society.
          </p>
          <button 
            className="font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:opacity-90"
            style={{backgroundColor: '#D4AF37', color: '#0D1B2A'}}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#FFFFFF'}}>
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8" style={{color: '#0D1B2A'}}>
            Upcoming Events
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((event) => (
              <div
                key={event}
                className="shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5'}}
              >
                <h4 className="text-xl font-semibold mb-2" style={{color: '#0D1B2A'}}>
                  Event Title {event}
                </h4>
                <p className="text-sm mb-2" style={{color: '#666'}}>Date: 12 Sep 2025</p>
                <p className="mb-4 text-sm leading-relaxed" style={{color: '#666'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
                  turpis ut eros tincidunt facilisis.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    className="px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium hover:opacity-90"
                    style={{backgroundColor: '#D4AF37', color: '#0D1B2A'}}
                  >
                    Register
                  </button>
                  <button 
                    className="px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium hover:opacity-80"
                    style={{backgroundColor: '#E5E5E5', color: '#0D1B2A'}}
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12" style={{backgroundColor: '#E5E5E5'}}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6" style={{color: '#0D1B2A'}}>About Us</h3>
          <p className="text-center leading-relaxed text-base sm:text-lg" style={{color: '#0D1B2A'}}>
            At <span className="font-bold" style={{color: '#D4AF37'}}>Voluntra</span>, our mission is to create a
            platform that bridges the gap between NGOs and passionate volunteers.
            We aim to bring people together for social causes, organize impactful
            events, and contribute towards a better society.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 text-center" style={{backgroundColor: '#FFFFFF'}}>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6" style={{color: '#0D1B2A'}}>Contact Us</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="mailto:voluntra@example.com"
              className="flex items-center justify-center px-5 py-3 rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:opacity-90"
              style={{backgroundColor: '#D4AF37', color: '#0D1B2A'}}
            >
              <Mail className="mr-2 w-4 h-4" /> Email Us
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-5 py-3 rounded-lg shadow transition-all duration-300 transform hover:scale-105 hover:opacity-90"
              style={{backgroundColor: '#25D366', color: '#FFFFFF'}}
            >
              <MessageCircle className="mr-2 w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center mt-auto" style={{backgroundColor: '#0D1B2A', color: '#FFFFFF'}}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm">© {new Date().getFullYear()} Voluntra. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;