import React, { useState } from 'react';
import './Inventory.css'; // Custom styles for Customer Feedback page

// Extended sample data for Customer Feedback
const sampleFeedback = [
  { id: 1, name: "John Doe", feedback: "Great service and fast delivery. Will definitely order again!", rating: 5, date: "2024-10-18", response: "" },
  { id: 2, name: "Sarah Lee", feedback: "The medicine I ordered was out of stock, but the staff was helpful in finding an alternative.", rating: 4, date: "2024-10-17", response: "" },
  { id: 3, name: "Michael Brown", feedback: "I had a negative experience with the delivery time. It was delayed by 2 days.", rating: 2, date: "2024-10-16", response: "" },
  { id: 4, name: "Emily Davis", feedback: "Loved the variety of products available. Quick and easy ordering process.", rating: 5, date: "2024-10-15", response: "" },
  { id: 5, name: "Alice Johnson", feedback: "The packaging was damaged, but the product was fine. Please improve packaging.", rating: 3, date: "2024-10-14", response: "" },
  { id: 6, name: "David Wilson", feedback: "Good experience overall. The customer service was very responsive.", rating: 4, date: "2024-10-13", response: "" },
  { id: 7, name: "Anna Kim", feedback: "I love the variety of health supplements you offer. Will recommend to my friends!", rating: 5, date: "2024-10-12", response: "" },
  { id: 8, name: "James Taylor", feedback: "The website is user-friendly, and I could easily find what I needed.", rating: 4, date: "2024-10-11", response: "" },
  { id: 9, name: "Laura White", feedback: "The medication was great, but I received the wrong dosage. Please verify your orders before shipping.", rating: 3, date: "2024-10-10", response: "" },
  { id: 10, name: "Robert Martinez", feedback: "Fast shipping and excellent customer support!", rating: 5, date: "2024-10-09", response: "" },
  { id: 11, name: "Sophia Adams", feedback: "The customer support team was very helpful in resolving my issue.", rating: 4, date: "2024-10-08", response: "" },
  { id: 12, name: "Chris Mitchell", feedback: "Not satisfied with the quality of the product. The item was damaged on arrival.", rating: 2, date: "2024-10-07", response: "" },
  { id: 13, name: "Olivia Clark", feedback: "I ordered a prescription refill, and it was delivered within 24 hours. Excellent service.", rating: 5, date: "2024-10-06", response: "" },
  { id: 14, name: "Liam Scott", feedback: "I had to wait too long for the medication to arrive. Disappointed.", rating: 1, date: "2024-10-05", response: "" },
  { id: 15, name: "Isabella Taylor", feedback: "Good prices, but the website could be improved for better navigation.", rating: 3, date: "2024-10-04", response: "" },
  { id: 16, name: "Daniel Harris", feedback: "Great products but the delivery cost was too high.", rating: 4, date: "2024-10-03", response: "" },
  { id: 17, name: "Mia White", feedback: "I was really happy with the ease of use of the mobile app. It made my ordering so much easier.", rating: 5, date: "2024-10-02", response: "" },
  { id: 18, name: "Ethan Lewis", feedback: "Delivery took longer than expected, but the staff was kind enough to give me an update.", rating: 3, date: "2024-10-01", response: "" },
  { id: 19, name: "Charlotte Martin", feedback: "The overall experience was good, but I would appreciate more product variety in your supplements section.", rating: 4, date: "2024-09-30", response: "" },
  { id: 20, name: "Lucas Anderson", feedback: "Everything was perfect! Fast shipping, easy ordering, and great customer support.", rating: 5, date: "2024-09-29", response: "" }
];

function Feedback() {
  const [feedbackList, setFeedbackList] = useState(sampleFeedback);
  const [response, setResponse] = useState("");
  const [search, setSearch] = useState("");
  const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);

  // Handle response input change
  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Submit response to feedback
  const submitResponse = (id) => {
    const updatedFeedbackList = feedbackList.map((feedback) =>
      feedback.id === id ? { ...feedback, response: response } : feedback
    );
    setFeedbackList(updatedFeedbackList);
    setResponse(""); // Reset response input
    setSelectedFeedbackId(null); // Deselect feedback after response
  };

  // Filtered feedback based on search
  const filteredFeedback = feedbackList.filter(
    (feedback) =>
      feedback.name.toLowerCase().includes(search.toLowerCase()) ||
      feedback.feedback.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="feedback-container">
      <h1>Customer Feedback</h1>
      <p>View and respond to customer reviews and suggestions.</p>

      <div className="feedback-section">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search feedback by customer name or review..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        {/* Feedback List */}
        <h2>Customer Feedback</h2>
        {filteredFeedback.length > 0 ? (
          <table className="feedback-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Feedback</th>
                <th>Rating</th>
                <th>Date</th>
                <th>Response</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeedback.map((feedback) => (
                <tr key={feedback.id}>
                  <td>{feedback.name}</td>
                  <td>{feedback.feedback}</td>
                  <td>
                    {"★".repeat(feedback.rating)}{" "}
                    {"☆".repeat(5 - feedback.rating)}
                  </td>
                  <td>{feedback.date}</td>
                  <td>
                    {/* Response Input */}
                    {selectedFeedbackId === feedback.id ? (
                      <>
                        <input
                          type="text"
                          value={response}
                          onChange={handleResponseChange}
                          placeholder="Write a response..."
                        />
                        <button
                          onClick={() => submitResponse(feedback.id)}
                          className="submit-response"
                        >
                          Respond
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setSelectedFeedbackId(feedback.id)}
                        className="respond-button"
                      >
                        Respond
                      </button>
                    )}

                    {/* Displaying response if available */}
                    {feedback.response && (
                      <div className="response-display">
                        <strong>Response:</strong> {feedback.response}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No feedback available.</p>
        )}
      </div>
    </div>
  );
}

export default Feedback;
