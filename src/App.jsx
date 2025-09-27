import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AuthPage from "./pages/AuthPage";
import VolunteerDashboard from "./features/volunteer/Dashboard";
import NGODashboard from './features/ngo/Dashboard';
import CorporateDashboard from './features/corporate/Dashboard';
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import NotFound from "./pages/NotFound"; 
import './App.css';

// Reusable Layout Component
function Layout({ children }) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
}

function App() {
    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* --- Public Routes --- */}
                    <Route path="/" element={<Welcome />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<AuthPage />} />

                    {/* --- Secured/Role-Based Dashboard Routes --- */}
                    
                    {/* Volunteer Dashboard */}
                    <Route element={<ProtectedRoute allowedRoles={['volunteer']} />}>
                        {/* NOTE: You should ensure your AuthContext redirects to /dashboard/volunteer 
                           for this to work correctly, or use unique paths here. */}
                        <Route path="/dashboard" element={<VolunteerDashboard />} />
                    </Route>

                    {/* NGO Dashboard */}
                    <Route element={<ProtectedRoute allowedRoles={['ngo']} />}>
                        <Route path="/dashboard" element={<NGODashboard />} />
                    </Route>

                    {/* Corporate Dashboard */}
                    <Route element={<ProtectedRoute allowedRoles={['corporate']} />}>
                        <Route path="/dashboard" element={<CorporateDashboard />} />
                    </Route>
                    
                    {/* <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default App;