import React, { useState } from 'react';
import './Prescriptions.css'; // Custom CSS for the Prescriptions page

function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, patientName: 'John Doe', medication: 'Paracetamol', dose: '500mg', status: 'Fulfilled', date: '2024-10-01' },
    { id: 2, patientName: 'Jane Smith', medication: 'Ibuprofen', dose: '200mg', status: 'Pending', date: '2024-10-02' },
    { id: 3, patientName: 'Michael Brown', medication: 'Amoxicillin', dose: '250mg', status: 'Fulfilled', date: '2024-10-03' },
    { id: 4, patientName: 'Emily Davis', medication: 'Cough Syrup', dose: '10ml', status: 'Pending', date: '2024-10-04' },
    { id: 5, patientName: 'Sarah Johnson', medication: 'Aspirin', dose: '300mg', status: 'Fulfilled', date: '2024-10-05' },
    { id: 6, patientName: 'David Wilson', medication: 'Amoxicillin', dose: '500mg', status: 'Pending', date: '2024-10-06' },
    { id: 7, patientName: 'Emma Davis', medication: 'Paracetamol', dose: '650mg', status: 'Fulfilled', date: '2024-10-07' },
    { id: 8, patientName: 'Oliver King', medication: 'Azithromycin', dose: '500mg', status: 'Pending', date: '2024-10-08' },
    { id: 9, patientName: 'Sophia Lee', medication: 'Metformin', dose: '1000mg', status: 'Fulfilled', date: '2024-10-09' },
    { id: 10, patientName: 'Liam Thomas', medication: 'Lisinopril', dose: '20mg', status: 'Pending', date: '2024-10-10' },
    { id: 11, patientName: 'Lucas White', medication: 'Doxycycline', dose: '100mg', status: 'Fulfilled', date: '2024-10-11' },
    { id: 12, patientName: 'Ava Martinez', medication: 'Omeprazole', dose: '20mg', status: 'Pending', date: '2024-10-12' },
    { id: 13, patientName: 'Ethan Jackson', medication: 'Loratadine', dose: '10mg', status: 'Fulfilled', date: '2024-10-13' },
    { id: 14, patientName: 'Olivia Martinez', medication: 'Simvastatin', dose: '40mg', status: 'Pending', date: '2024-10-14' },
    { id: 15, patientName: 'Mason Robinson', medication: 'Prednisone', dose: '5mg', status: 'Fulfilled', date: '2024-10-15' },
    { id: 16, patientName: 'Isabella Harris', medication: 'Ciprofloxacin', dose: '500mg', status: 'Pending', date: '2024-10-16' },
    { id: 17, patientName: 'James Clark', medication: 'Levothyroxine', dose: '100mcg', status: 'Fulfilled', date: '2024-10-17' },
    { id: 18, patientName: 'Charlotte Rodriguez', medication: 'Metoprolol', dose: '50mg', status: 'Pending', date: '2024-10-18' },
    { id: 19, patientName: 'Benjamin Lee', medication: 'Hydrochlorothiazide', dose: '25mg', status: 'Fulfilled', date: '2024-10-19' },
    { id: 20, patientName: 'Amelia Gonzalez', medication: 'Gabapentin', dose: '300mg', status: 'Pending', date: '2024-10-20' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filter, setFilter] = useState('All'); // Track filter state (All, Fulfilled, Pending)

  const [newPrescription, setNewPrescription] = useState({
    patientName: '',
    medication: '',
    dose: '',
    status: '',
    date: '',
  });

  const [filteredPrescriptions, setFilteredPrescriptions] = useState(prescriptions);

  // Filter prescriptions based on filter value
  const applyFilter = (filterType) => {
    setFilter(filterType);
    if (filterType === 'Fulfilled') {
      setFilteredPrescriptions(prescriptions.filter((prescription) => prescription.status === 'Fulfilled'));
    } else if (filterType === 'Pending') {
      setFilteredPrescriptions(prescriptions.filter((prescription) => prescription.status === 'Pending'));
    } else {
      setFilteredPrescriptions(prescriptions); // Show all if 'All' is selected
    }
  };

  // Search prescriptions based on searchTerm
  const handleSearch = () => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filteredData = prescriptions.filter(
      (prescription) =>
        prescription.patientName.toLowerCase().includes(lowercasedSearchTerm) ||
        prescription.medication.toLowerCase().includes(lowercasedSearchTerm) ||
        prescription.dose.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredPrescriptions(filteredData);
  };

  const viewDetails = (prescription) => {
    setSelectedPrescription(prescription);
  };

  const closeModal = () => {
    setSelectedPrescription(null);
  };

  const addNewPrescription = () => {
    setPrescriptions([
      ...prescriptions,
      {
        ...newPrescription,
        id: prescriptions.length + 1,
      }
    ]);
    setShowAddModal(false);
    setNewPrescription({
      patientName: '',
      medication: '',
      dose: '',
      status: '',
      date: '',
    });
  };

  return (
    <div className="prescriptions-container">
      <h1>Prescription Management</h1>
      <p>Manage and fulfill patient prescriptions with ease.</p>

      <div className="prescriptions-options">
        <input
          type="text"
          placeholder="Search Prescriptions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={() => applyFilter('All')}>All Prescriptions</button>
        <button onClick={() => applyFilter('Fulfilled')}>Fulfilled Prescriptions</button>
        <button onClick={() => applyFilter('Pending')}>Pending Prescriptions</button>
        <button onClick={() => setShowAddModal(true)}>Add New Prescription</button>
      </div>

      <div className="prescriptions-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Medication</th>
              <th>Dose</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrescriptions.map((prescription) => (
              <tr key={prescription.id}>
                <td>{prescription.id}</td>
                <td>{prescription.patientName}</td>
                <td>{prescription.medication}</td>
                <td>{prescription.dose}</td>
                <td>{prescription.status}</td>
                <td>{prescription.date}</td>
                <td>
                  <button onClick={() => viewDetails(prescription)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Prescription Details Modal */}
      {selectedPrescription && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Prescription Details</h2>
            <p><strong>Patient Name:</strong> {selectedPrescription.patientName}</p>
            <p><strong>Medication:</strong> {selectedPrescription.medication}</p>
            <p><strong>Dose:</strong> {selectedPrescription.dose}</p>
            <p><strong>Status:</strong> {selectedPrescription.status}</p>
            <p><strong>Date:</strong> {selectedPrescription.date}</p>
            <button className="close-detail-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Add New Prescription Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowAddModal(false)}>&times;</span>
            <h2>Add New Prescription</h2>
            <form>
              <label>Patient Name:</label>
              <input
                type="text"
                value={newPrescription.patientName}
                onChange={(e) => setNewPrescription({ ...newPrescription, patientName: e.target.value })}
              />
              <label>Medication:</label>
              <input
                type="text"
                value={newPrescription.medication}
                onChange={(e) => setNewPrescription({ ...newPrescription, medication: e.target.value })}
              />
              <label>Dose:</label>
              <input
                type="text"
                value={newPrescription.dose}
                onChange={(e) => setNewPrescription({ ...newPrescription, dose: e.target.value })}
              />
              <label>Status:</label>
              <select
                value={newPrescription.status}
                onChange={(e) => setNewPrescription({ ...newPrescription, status: e.target.value })}
              >
                <option value="">Select Status</option>
                <option value="Fulfilled">Fulfilled</option>
                <option value="Pending">Pending</option>
              </select>
              <label>Date:</label>
              <input
                type="date"
                value={newPrescription.date}
                onChange={(e) => setNewPrescription({ ...newPrescription, date: e.target.value })}
              />
              <button type="button" onClick={addNewPrescription}>Add Prescription</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Prescriptions;
