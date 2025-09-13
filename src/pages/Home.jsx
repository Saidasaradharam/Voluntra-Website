// src/pages/Home.jsx
import React from "react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Clean-Up Drive",
      date: "2025-09-20",
      location: "Marina Beach, Chennai",
      volunteers: 45,
      description: "Join us for a beach cleaning initiative to protect our marine environment."
    },
    {
      id: 2,
      title: "Educational Support Program",
      date: "2025-09-25",
      location: "Government School, T. Nagar",
      volunteers: 20,
      description: "Help underprivileged children with their studies and career guidance."
    },
    {
      id: 3,
      title: "Food Distribution Drive",
      date: "2025-10-02",
      location: "Various Locations, Chennai",
      volunteers: 60,
      description: "Distribute meals to homeless and needy families across the city."
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col text-gray-800 overflow-x-hidden" style={{backgroundColor: '#E5E5E5'}}>
      <Navbar />
      {/* Navbar */}
      {/* <nav className="shadow-md sticky top-0 z-50 w-full" style={{backgroundColor: '#FFFFFF'}}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{color: '#0D1B2A'}}>Voluntra</h1>
          <ul className="hidden md:flex space-x-6 text-lg font-medium" style={{color: '#0D1B2A'}}>
            <li className="cursor-pointer transition-colors" style={{color: '#D4AF37'}}>Home</li>
            <li className="cursor-pointer transition-colors hover:opacity-80">About Us</li>
            <li className="cursor-pointer transition-colors hover:opacity-80">Events</li>
            <li className="cursor-pointer transition-colors hover:opacity-80">Contact Us</li>
          </ul>
          <button className="md:hidden text-2xl" style={{color: '#0D1B2A'}}>☰</button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="w-full text-white py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#0D1B2A'}}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Making a Difference,
            <span className="block" style={{color: '#D4AF37'}}>One Act at a Time</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Join thousands of volunteers across Chennai who are creating positive change in our communities. 
            Together, we can build a better tomorrow for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:opacity-90"
              style={{backgroundColor: '#D4AF37', color: '#0D1B2A'}}
            >
              Become a Volunteer
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-300 transform hover:scale-105"
              style={{borderColor: '#D4AF37', color: '#D4AF37'}}
            >
              View Upcoming Events
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#FFFFFF'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6" style={{color: '#0D1B2A'}}>Our Mission</h3>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed" style={{color: '#666'}}>
              At <span className="font-bold" style={{color: '#D4AF37'}}>Voluntra</span>, we believe in the power of 
              collective action. Our platform connects passionate volunteers with meaningful NGO initiatives, 
              creating lasting impact in communities across Tamil Nadu.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow" style={{backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5'}}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#D4AF37'}}>
                <Users className="w-10 h-10" style={{color: '#0D1B2A'}} />
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{color: '#0D1B2A'}}>Connect</h4>
              <p style={{color: '#666'}}>
                Bridge the gap between volunteers and NGOs, creating meaningful partnerships for social good.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow" style={{backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5'}}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#D4AF37'}}>
                <Calendar className="w-10 h-10" style={{color: '#0D1B2A'}} />
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{color: '#0D1B2A'}}>Organize</h4>
              <p style={{color: '#666'}}>
                Streamline event management and volunteer coordination for maximum community impact.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow" style={{backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5'}}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#D4AF37'}}>
                <ArrowRight className="w-10 h-10" style={{color: '#0D1B2A'}} />
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{color: '#0D1B2A'}}>Impact</h4>
              <p style={{color: '#666'}}>
                Create lasting positive change in education, environment, health, and community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#E5E5E5'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: '#0D1B2A'}}>Upcoming Events</h3>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#666'}}>
              Join us in our upcoming volunteer initiatives and make a difference in your community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                style={{backgroundColor: '#FFFFFF'}}
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3" style={{color: '#0D1B2A'}}>
                    {event.title}
                  </h4>
                  <div className="space-y-2 mb-4 text-sm" style={{color: '#666'}}>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" style={{color: '#D4AF37'}} />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" style={{color: '#D4AF37'}} />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" style={{color: '#D4AF37'}} />
                      {event.volunteers} volunteers registered
                    </div>
                  </div>
                  <p className="text-sm mb-6 leading-relaxed" style={{color: '#666'}}>
                    {event.description}
                  </p>
                  <div className="flex gap-3">
                    <button 
                      className="flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:opacity-90"
                      style={{backgroundColor: '#D4AF37', color: '#0D1B2A'}}
                    >
                      Register Now
                    </button>
                    <button 
                      className="px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:opacity-90"
                      style={{backgroundColor: '#E5E5E5', color: '#0D1B2A'}}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:opacity-90"
              style={{backgroundColor: '#0D1B2A', color: '#FFFFFF'}}
            >
              View All Events
            </button>
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

export default HomePage;