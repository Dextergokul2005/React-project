import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
import SalesReports from './components/SalesReports';
import Prescriptions from './components/Prescriptions';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import Suppliers from './components/Suppliers';
import Feedback from './components/Feedback';

function App() {
  const [user, setUser] = useState(null); // useState to hold the user data

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/" element={<Login setUser={setUser} />} />  {/* Default to login */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/sales-reports" element={<SalesReports />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/feedback" element={<Feedback />} />

      </Routes>
    </Router>
  );
}

export default App;
