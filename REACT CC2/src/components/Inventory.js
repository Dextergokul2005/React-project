import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import './Inventory.css'; // Custom styles for Inventory page

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(10); // Number of items to display at a time

  const inventoryData = [
    { "id": 1, "name": "Paracetamol Tablets", "stock": 150, "category": "Pain Relief", "price": 12.50, "supplier": "Apollo Pharmacy" },
    { "id": 2, "name": "Cough Syrup (Dextromethorphan)", "stock": 80, "category": "Cough & Cold", "price": 45.00, "supplier": "Vikram Chemists" },
    { "id": 3, "name": "Calcium Supplements", "stock": 120, "category": "Health Supplements", "price": 65.00, "supplier": "Lifeline Pharma" },
    { "id": 4, "name": "Ibuprofen (Pain & Fever)", "stock": 200, "category": "Pain Relief", "price": 22.75, "supplier": "MedPlus" },
    { "id": 5, "name": "Antiseptic Cream (Betadine)", "stock": 60, "category": "Wound Care", "price": 55.00, "supplier": "Netmeds" },
    { "id": 6, "name": "Eye Drops (Lubricant)", "stock": 100, "category": "Eye Care", "price": 28.00, "supplier": "Guardian Pharmacy" },
    { "id": 7, "name": "Vitamin D3", "stock": 180, "category": "Health Supplements", "price": 35.00, "supplier": "Healthplus Pharma" },
    { "id": 8, "name": "Antibiotic (Amoxicillin)", "stock": 50, "category": "Antibiotics", "price": 75.00, "supplier": "MediCare Pvt Ltd" },
    { "id": 9, "name": "Glucose Powder", "stock": 300, "category": "Energy & Nutrition", "price": 20.00, "supplier": "Pharma Supplies Co." },
    { "id": 10, "name": "Allergy Relief (Cetirizine)", "stock": 110, "category": "Allergy & Cold", "price": 50.00, "supplier": "CureWell Pharmacy" },
    { "id": 11, "name": "Asthma Inhaler", "stock": 75, "category": "Respiratory", "price": 95.00, "supplier": "Medline Pharmaceuticals" },
    { "id": 12, "name": "Cholesterol Medicine", "stock": 45, "category": "Heart Health", "price": 85.00, "supplier": "Heart Care Ltd" },
    { "id": 13, "name": "Ciprofloxacin Tablets", "stock": 100, "category": "Antibiotics", "price": 40.00, "supplier": "Pharma Care" },
    { "id": 14, "name": "Lactulose Syrup", "stock": 50, "category": "Laxatives", "price": 30.00, "supplier": "MediTox Ltd." },
    { "id": 15, "name": "Flu Vaccination", "stock": 20, "category": "Vaccines", "price": 200.00, "supplier": "HealthFirst Pharmacy" },
    { "id": 16, "name": "Aspirin", "stock": 150, "category": "Pain Relief", "price": 15.00, "supplier": "CurePro" },
    { "id": 17, "name": "Zinc Supplements", "stock": 120, "category": "Health Supplements", "price": 50.00, "supplier": "Vital Care" },
    { "id": 18, "name": "Hydrocortisone Cream", "stock": 60, "category": "Skin Care", "price": 20.00, "supplier": "Pharma Solutions" },
    { "id": 19, "name": "Diabetes Medication (Metformin)", "stock": 80, "category": "Diabetes", "price": 45.00, "supplier": "Diabetes Pharmacy" },
    { "id": 20, "name": "Sunscreen Lotion", "stock": 200, "category": "Skin Care", "price": 15.00, "supplier": "Health Glo" },
    { "id": 21, "name": "Multi-Vitamin Tablets", "stock": 220, "category": "Health Supplements", "price": 55.00, "supplier": "Wellness Pharmacy" },
    { "id": 22, "name": "Anti-Hypertensive Drugs", "stock": 90, "category": "Heart Health", "price": 130.00, "supplier": "Health Plus" },
    { "id": 23, "name": "Pain Relief Cream", "stock": 70, "category": "Pain Relief", "price": 18.00, "supplier": "QuickHeal Pharmacy" },
    { "id": 24, "name": "Vitamins C & E", "stock": 150, "category": "Health Supplements", "price": 22.00, "supplier": "CarePlus" },
    { "id": 25, "name": "Liver Health Tablets", "stock": 40, "category": "Health Supplements", "price": 75.00, "supplier": "Liver Care" },
    { "id": 26, "name": "Petroleum Jelly", "stock": 200, "category": "Skin Care", "price": 10.00, "supplier": "HealthCo" },
    { "id": 27, "name": "Cold Compress", "stock": 100, "category": "First Aid", "price": 25.00, "supplier": "Medi Aid" },
    { "id": 28, "name": "Cold & Flu Relief", "stock": 50, "category": "Cold & Flu", "price": 35.00, "supplier": "Pharma Relief" },
    { "id": 29, "name": "Pain Management (Tramadol)", "stock": 35, "category": "Pain Relief", "price": 120.00, "supplier": "Medi Care Pharma" },
    { "id": 30, "name": "Gastrointestinal Medication", "stock": 80, "category": "Gastro Health", "price": 45.00, "supplier": "HealthFirst" },
    { "id": 31, "name": "Vitamin B12 Shots", "stock": 60, "category": "Health Supplements", "price": 200.00, "supplier": "PlusCare Pharmacy" },
    { "id": 32, "name": "Sleep Aid", "stock": 40, "category": "Sleep Disorders", "price": 70.00, "supplier": "Good Sleep Pharmacy" },
    { "id": 33, "name": "Corticosteroid Cream", "stock": 30, "category": "Skin Care", "price": 50.00, "supplier": "Healthy Skin Pharma" },
    { "id": 34, "name": "Electrolyte Tablets", "stock": 150, "category": "Health Supplements", "price": 30.00, "supplier": "Rapid Care" },
    { "id": 35, "name": "Allergy Tablets (Loratadine)", "stock": 110, "category": "Allergy", "price": 60.00, "supplier": "AllerHealth" },
    { "id": 36, "name": "Asthma Inhaler", "stock": 80, "category": "Respiratory", "price": 45.00, "supplier": "MediCure" },
    { "id": 37, "name": "Acne Cream", "stock": 55, "category": "Skin Care", "price": 25.00, "supplier": "Skin Solution" },
    { "id": 38, "name": "Heart Disease Medication", "stock": 100, "category": "Heart Health", "price": 150.00, "supplier": "Healthy Heart" },
    { "id": 39, "name": "Blood Pressure Monitor", "stock": 25, "category": "Health Devices", "price": 100.00, "supplier": "TechMed" },
    { "id": 40, "name": "Hyaluronic Acid Serum", "stock": 75, "category": "Skin Care", "price": 80.00, "supplier": "Skin Glo" }
  ];

  useEffect(() => {
    // Simulating an API request to fetch inventory data
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate an Axios call to get the inventory
        // const response = await axios.get('YOUR_API_ENDPOINT_HERE');
        // setInventory(response.data);

        // Use local inventory data for this example
        setInventory(inventoryData);
        setLoading(false);
      } catch (error) {
        setError('Error fetching inventory data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMore = () => {
    setDisplayCount(displayCount + 10); // Load 10 more items
  };

  return (
    <div className="inventory-container">
      <h1>Inventory</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="inventory-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Price</th>
                <th>Supplier</th>
              </tr>
            </thead>
            <tbody>
              {inventory.slice(0, displayCount).map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.stock}</td>
                  <td>{item.category}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {displayCount < inventory.length && (
            <button onClick={loadMore}>View More</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Inventory;
