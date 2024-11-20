import React, { useState } from 'react';
import './Suppliers.css'; // Custom styles for Supplier Management page

// Sample Data for Suppliers
const sampleSuppliers = [
  { id: 1, name: "PharmaCorp", contact: "123-456-7890", email: "contact@pharmacorp.com", products: "Painkillers, Antibiotics" },
  { id: 2, name: "MediSupply", contact: "987-654-3210", email: "support@medisupply.com", products: "Vitamins, First Aid Kits" },
  { id: 3, name: "HealthCo", contact: "555-123-4567", email: "info@healthco.com", products: "Vaccines, Syrups" }
];

function Suppliers() {
  const [suppliers, setSuppliers] = useState(sampleSuppliers);
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    contact: '',
    email: '',
    products: '',
  });

  const [search, setSearch] = useState('');

  // Handle new supplier input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier({ ...newSupplier, [name]: value });
  };

  // Add new supplier
  const addSupplier = () => {
    if (newSupplier.name && newSupplier.contact && newSupplier.email && newSupplier.products) {
      const updatedSuppliers = [...suppliers, { id: suppliers.length + 1, ...newSupplier }];
      setSuppliers(updatedSuppliers);
      setNewSupplier({ name: '', contact: '', email: '', products: '' }); // Reset form
    }
  };

  // Search functionality
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filtered suppliers based on search
  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(search.toLowerCase()) ||
    supplier.email.toLowerCase().includes(search.toLowerCase())
  );

  // Delete supplier
  const deleteSupplier = (id) => {
    const updatedSuppliers = suppliers.filter((supplier) => supplier.id !== id);
    setSuppliers(updatedSuppliers);
  };

  return (
    <div className="suppliers-container">
      <h1>Supplier Management</h1>
      <p>Manage and communicate with suppliers for smooth inventory restocking.</p>
      
      <div className="suppliers-section">
        {/* Search Bar */}
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search suppliers..." 
            value={search} 
            onChange={handleSearch} 
          />
        </div>

        <h2>Supplier List</h2>
        {filteredSuppliers.length > 0 ? (
          <table className="suppliers-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Products</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSuppliers.map((supplier) => (
                <tr key={supplier.id}>
                  <td>{supplier.name}</td>
                  <td>{supplier.contact}</td>
                  <td>{supplier.email}</td>
                  <td>{supplier.products}</td>
                  <td>
                    <button onClick={() => deleteSupplier(supplier.id)} className="delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No suppliers found.</p>
        )}

        <h2>Add New Supplier</h2>
        <div className="add-supplier-form">
          <label>
            Name:
            <input type="text" name="name" value={newSupplier.name} onChange={handleInputChange} placeholder="Enter supplier name" />
          </label>
          <label>
            Contact:
            <input type="text" name="contact" value={newSupplier.contact} onChange={handleInputChange} placeholder="Enter contact number" />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={newSupplier.email} onChange={handleInputChange} placeholder="Enter email" />
          </label>
          <label>
            Products:
            <input type="text" name="products" value={newSupplier.products} onChange={handleInputChange} placeholder="Enter products supplied" />
          </label>
          <button onClick={addSupplier} className="add-button">Add Supplier</button>
        </div>
      </div>
    </div>
  );
}

export default Suppliers;
