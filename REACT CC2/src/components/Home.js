import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home({ user }) {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Pharmacy Management system</h1> {/* Welcome message */}
      </header>

      

      <div className="home-sections">
        {/* Inventory Management Section */}
        <section className="section-card" onClick={() => navigate('/inventory')}>
          <i className="icon fas fa-capsules"></i>
          <h2>Inventory Management</h2>
          <p>Monitor and manage stock levels for medicines and supplies.</p>
          <button className="section-btn">Manage Inventory</button>
        </section>

        {/* Order Management Section */}
        <section className="section-card" onClick={() => navigate('/orders')}>
          <i className="icon fas fa-box"></i>
          <h2>Order Management</h2>
          <p>View, process, and track all incoming and outgoing orders.</p>
          <button className="section-btn">View Orders</button>
        </section>

        {/* Sales Reports Section */}
        <section className="section-card" onClick={() => navigate('/sales-reports')}>
          <i className="icon fas fa-chart-line"></i>
          <h2>Sales Reports</h2>
          <p>Analyze pharmacy sales data and download performance reports.</p>
          <button className="section-btn">View Sales Reports</button>
        </section>

        {/* Prescription Management Section */}
        <section className="section-card" onClick={() => navigate('/prescriptions')}>
          <i className="icon fas fa-file-prescription"></i>
          <h2>Prescription Management</h2>
          <p>Manage and fulfill patient prescriptions with ease.</p>
          <button className="section-btn">Manage Prescriptions</button>
        </section>

        {/* Notifications Section */}
        <section className="section-card" onClick={() => navigate('/notifications')}>
          <i className="icon fas fa-bell"></i>
          <h2>Notifications</h2>
          <p>Stay updated with alerts about new orders and supplier updates.</p>
          <button className="section-btn">View Notifications</button>
        </section>

        {/* Settings Section */}
        <section className="section-card" onClick={() => navigate('/settings')}>
          <i className="icon fas fa-cogs"></i>
          <h2>Settings</h2>
          <p>Manage account settings, system preferences, and privacy options.</p>
          <button className="section-btn">Account Settings</button>
        </section>

        {/* New Section: Supplier Management */}
        <section className="section-card" onClick={() => navigate('/suppliers')}>
          <i className="icon fas fa-truck"></i>
          <h2>Supplier Management</h2>
          <p>Manage and communicate with suppliers for smooth inventory restocking.</p>
          <button className="section-btn">Manage Suppliers</button>
        </section>

        {/* New Section: Customer Feedback */}
        <section className="section-card" onClick={() => navigate('/feedback')}>
          <i className="icon fas fa-comments"></i>
          <h2>Customer Feedback</h2>
          <p>View and respond to customer reviews and suggestions.</p>
          <button className="section-btn">View Feedback</button>
        </section>
      </div>
    </div>
  );
}

export default Home;
