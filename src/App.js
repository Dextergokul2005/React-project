import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route

import Login from './login';
import Register from './Register';
import Inventory from './Inventory';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pharmacy Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Set Login as the homepage */}
        <Route path="/register" element={<Register />} />
        <Route path="/inventory" element={<Inventory />} /> {/* Route for the Inventory page */}
      </Routes>
    </Router>
  );
}

export default App;
