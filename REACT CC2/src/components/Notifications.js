import React, { useState } from 'react';
import './Notifications.css'; // Custom styles for Notifications page

function Notifications() {
  // Dummy data for notifications
  const initialNotifications = [
    {
      id: 1,
      title: "New Order Received",
      message: "You have received a new order from customer #1234.",
      time: "10 minutes ago",
      category: "Order",
      read: false,
    },
    {
      id: 2,
      title: "Supplier Shipment Delayed",
      message: "Supplier XYZ has delayed their shipment by 2 days.",
      time: "1 hour ago",
      category: "Supplier",
      read: false,
    },
    {
      id: 3,
      title: "Stock Alert: Low Inventory",
      message: "The stock level for Medicine ABC is below the minimum threshold.",
      time: "2 hours ago",
      category: "Stock",
      read: true,
    },
    {
      id: 4,
      title: "Order Dispatched",
      message: "Order #5678 has been dispatched to the customer.",
      time: "4 hours ago",
      category: "Order",
      read: false,
    },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest First");

  // Filter notifications based on category
  const filteredNotifications = notifications.filter((notification) => {
    return selectedCategory === "All" || notification.category === selectedCategory;
  });

  // Search notifications
  const searchedNotifications = filteredNotifications.filter((notification) =>
    notification.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort notifications
  const sortedNotifications = searchedNotifications.sort((a, b) => {
    if (sortOrder === "Newest First") {
      return new Date(b.time) - new Date(a.time);
    } else {
      return new Date(a.time) - new Date(b.time);
    }
  });

  // Mark a notification as read or unread
  const toggleReadStatus = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, read: !notification.read }
          : notification
      )
    );
  };

  // Delete a notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search notifications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter and Sort Options */}
      <div className="filter-options">
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="All">All Notifications</option>
          <option value="Order">Orders</option>
          <option value="Supplier">Suppliers</option>
          <option value="Stock">Stock Alerts</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="Newest First">Newest First</option>
          <option value="Oldest First">Oldest First</option>
        </select>
      </div>

      {/* Notifications List */}
      <ul className="notifications-list">
        {sortedNotifications.map((notification) => (
          <li key={notification.id} className={`notification-item ${notification.read ? "read" : "unread"}`}>
            <div className="notification-header">
              <h3 className="notification-title">{notification.title}</h3>
              <small className="notification-time">{notification.time}</small>
            </div>
            <p className="notification-message">{notification.message}</p>
            <div className="notification-actions">
              <button onClick={() => toggleReadStatus(notification.id)} className="mark-read-btn">
                {notification.read ? "Mark as Unread" : "Mark as Read"}
              </button>
              <button onClick={() => deleteNotification(notification.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
