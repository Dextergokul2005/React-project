import React, { useState } from 'react';
import './SalesReports.css'; // Custom CSS file for styling

function SalesReports() {
  const salesData = [
    { id: 1, date: '2024-01-01', totalSales: 1000, totalItems: 120, highestSale: 500, category: 'Medicines', region: 'North', revenue: 3000 },
    { id: 2, date: '2024-01-02', totalSales: 1200, totalItems: 130, highestSale: 600, category: 'Medicines', region: 'South', revenue: 3500 },
    { id: 3, date: '2024-01-03', totalSales: 950, totalItems: 100, highestSale: 400, category: 'Supplements', region: 'East', revenue: 2900 },
    { id: 4, date: '2024-01-04', totalSales: 1100, totalItems: 115, highestSale: 450, category: 'Medicines', region: 'West', revenue: 3200 },
    { id: 5, date: '2024-01-05', totalSales: 1500, totalItems: 160, highestSale: 700, category: 'Cosmetics', region: 'North', revenue: 4500 },
    { id: 6, date: '2024-01-06', totalSales: 1300, totalItems: 140, highestSale: 550, category: 'Cosmetics', region: 'South', revenue: 4000 },
    { id: 7, date: '2024-01-07', totalSales: 1200, totalItems: 130, highestSale: 650, category: 'Medical Devices', region: 'East', revenue: 3700 },
    { id: 8, date: '2024-01-01', totalSales: 1000, totalItems: 120, highestSale: 500, category: 'Medicines', region: 'North', revenue: 3000 },
    { id: 9, date: '2024-01-02', totalSales: 1200, totalItems: 130, highestSale: 600, category: 'Medicines', region: 'South', revenue: 3500 },
    { id: 10, date: '2024-01-03', totalSales: 950, totalItems: 100, highestSale: 400, category: 'Supplements', region: 'East', revenue: 2900 },
    { id: 11, date: '2024-01-04', totalSales: 1100, totalItems: 115, highestSale: 450, category: 'Medicines', region: 'West', revenue: 3200 },
    { id: 12, date: '2024-01-05', totalSales: 1500, totalItems: 160, highestSale: 700, category: 'Cosmetics', region: 'North', revenue: 4500 },
    { id: 13, date: '2024-01-08', totalSales: 1100, totalItems: 110, highestSale: 500, category: 'Supplements', region: 'West', revenue: 3200 },
  ];

  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedReport, setSelectedReport] = useState(null);

  const sortedData = [...salesData].sort((a, b) => {
    return sortOrder === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const viewDetails = (report) => {
    setSelectedReport(report);
  };

  const downloadReport = (report) => {
    const reportData = `
      Report ID: ${report.id}
      Date: ${report.date}
      Total Sales: $${report.totalSales.toFixed(2)}
      Total Items Sold: ${report.totalItems}
      Highest Sale: $${report.highestSale.toFixed(2)}
      Category: ${report.category}
      Region: ${report.region}
      Revenue: $${report.revenue.toFixed(2)}
    `;
    const blob = new Blob([reportData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Sales_Report_${report.id}.txt`;
    link.click();
  };

  const closeModal = () => {
    setSelectedReport(null); // Close the modal by resetting the selected report
  };

  return (
    <div className="sales-reports-container">
      <h1>Sales Reports</h1>
      <p>Analyze pharmacy sales data, view key metrics, and download performance reports.</p>

      <div className="sales-report-options">
        <button onClick={toggleSortOrder}>
          Sort by Date ({sortOrder === 'asc' ? 'Oldest First' : 'Newest First'})
        </button>
        <button>Download All Reports</button>
        <button>Filter by Date</button>
        <button>Generate Report</button>
      </div>

      <div className="reports-section">
        <table className="sales-table">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Date</th>
              <th>Total Sales</th>
              <th>Total Items Sold</th>
              <th>Highest Single Sale</th>
              <th>Category</th>
              <th>Region</th>
              <th>Revenue</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{new Date(report.date).toLocaleDateString()}</td>
                <td>${report.totalSales.toFixed(2)}</td>
                <td>{report.totalItems}</td>
                <td>${report.highestSale.toFixed(2)}</td>
                <td>{report.category}</td>
                <td>{report.region}</td>
                <td>${report.revenue.toFixed(2)}</td>
                <td>
                  <button onClick={() => viewDetails(report)}>View Details</button><br></br>
                  <button onClick={() => downloadReport(report)}>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for showing report details */}
      {selectedReport && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Report Details</h2>
            <p><strong>Report ID:</strong> {selectedReport.id}</p>
            <p><strong>Date:</strong> {new Date(selectedReport.date).toLocaleDateString()}</p>
            <p><strong>Total Sales:</strong> ${selectedReport.totalSales.toFixed(2)}</p>
            <p><strong>Total Items Sold:</strong> {selectedReport.totalItems}</p>
            <p><strong>Highest Sale:</strong> ${selectedReport.highestSale.toFixed(2)}</p>
            <p><strong>Category:</strong> {selectedReport.category}</p>
            <p><strong>Region:</strong> {selectedReport.region}</p>
            <p><strong>Revenue:</strong> ${selectedReport.revenue.toFixed(2)}</p>
            <button className="close-detail-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SalesReports;
