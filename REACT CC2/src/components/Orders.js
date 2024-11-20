// Orders.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const customers = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const itemsList = ["Aspirin", "Ibuprofen", "Paracetamol", "Cough Syrup", "Bandages", "Eye Drops"];

  const generateRandomOrder = (id) => {
    const customer = customers[Math.floor(Math.random() * customers.length)];
    const items = Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => itemsList[Math.floor(Math.random() * itemsList.length)]);
    const status = ["Pending", "Processed", "Shipped", "Delivered"][Math.floor(Math.random() * 4)];
    const total = Math.floor(Math.random() * 100) + 10;
    const date = new Date().toLocaleDateString();
    
    return {
      id,
      customer,
      items,
      status,
      date,
      total
    };
  };

  const loadOrders = (startIndex, count) => {
    // Simulating fetching more orders
    return Array.from({ length: count }, (_, index) => generateRandomOrder(startIndex + index));
  };

  const loadMoreOrders = () => {
    setLoadingMore(true);
    const moreOrders = loadOrders(orders.length, 10); // Load next 10 orders
    setTimeout(() => {
      setOrders([...orders, ...moreOrders]);
      setLoadingMore(false);
    }, 1000); // Simulate loading delay
  };

  useEffect(() => {
    setLoading(true);
    const initialOrders = loadOrders(0, 10); // Initially load first 10 orders
    setOrders(initialOrders);
    setLoading(false);
  }, []);

  const handleView = (order) => {
    setSelectedOrder(order);
  };

  const handleProcess = (order) => {
    console.log('Processing order:', order);
    alert(`Processing Order ${order.id}`);
  };

  return (
    <div className="orders-container">
      <h1>Order Management</h1>
      <p>View, process, and track all incoming and outgoing orders.</p>

      <div className="orders-section">
        {error && <p className="error-message">{error}</p>}
        {loading ? (
          <p>Loading orders...</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Status</th>
                <th>Date</th>
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>
                    <ul>
                      {order.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{order.status}</td>
                  <td>{order.date}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <button className="view-btn" onClick={() => handleView(order)}>View</button>
                    <button className="process-btn" onClick={() => handleProcess(order)}>Process</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {selectedOrder && (
          <div className="order-details-backdrop">
            <div className="order-details-modal">
              <h2>Order Details</h2>
              <p><strong>Order ID:</strong> {selectedOrder.id}</p>
              <p><strong>Customer:</strong> {selectedOrder.customer}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {selectedOrder.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
              <p><strong>Date:</strong> {selectedOrder.date}</p>
              <p><strong>Total Price:</strong> ${selectedOrder.total.toFixed(2)}</p>
              <button onClick={() => setSelectedOrder(null)}>Close</button>
            </div>
          </div>
        )}

        <div className="load-more-section">
          {loadingMore ? (
            <p>Loading more orders...</p>
          ) : (
            <button className="load-more-btn" onClick={loadMoreOrders}>
              Load More Orders
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
