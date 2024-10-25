import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route

import Login from './components/login';
import Register from './components/Register';
import Inventory from './components/Inventory';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set Login as the homepage */}
        <Route path="/register" element={<Register />} />
        <Route path="/inventory" element={<Inventory />} /> {/* Route for the Inventory page */}
      </Routes>
    </Router>
  );
}

export default App;
