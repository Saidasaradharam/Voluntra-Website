import { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import VolunteerDashboard from "./features/volunteer/Dashboard";
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
            <Route 
              path="/" 
              element={<Welcome />} />
            <Route
              path="/dashboard"
              element={<VolunteerDashboard />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App
