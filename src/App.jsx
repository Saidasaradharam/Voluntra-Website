import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AuthPage from "./pages/AuthPage";
// import About from "./pages/About";
import VolunteerDashboard from "./features/volunteer/Dashboard";
import NGODashboard from './features/ngo/Dashboard';
import CorporateDashboard from './features/corporate/Dashboard';
import './App.css'

function Layout({ children }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Pages */}
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/login" element={<AuthPage />} /> {/* Route for login/signup */}

            {/* Feature-specific Dashboards */}
            <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
            {/* <Route path="/corporate/dashboard" element={<CorporateDashboard />} /> */}
            <Route path="/ngo/dashboard" element={<NGODashboard />} />
            <Route path="/corporate/dashboard" element={<CorporateDashboard />} />
            {/* Catch-all route */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App
