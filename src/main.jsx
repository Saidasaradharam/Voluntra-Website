// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterWrapper from './utils/RouterWrapper.jsx'; // Import the new wrapper
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> 
        <RouterWrapper /> 
    </Router>
  </React.StrictMode>
);