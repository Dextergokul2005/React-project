import React, { useState } from 'react';
import './Settings.css'; // Custom styles for Settings page

function Settings() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '123-456-7890',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [notificationPreferences, setNotificationPreferences] = useState({
    orderAlerts: true,
    stockAlerts: false,
    supplierAlerts: true,
  });

  const [privacySettings, setPrivacySettings] = useState({
    shareEmail: true,
    sharePhone: false,
  });

  // Handle input change for user data
  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle input change for password data
  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  // Handle toggle of notification preferences
  const handleNotificationToggle = (e) => {
    setNotificationPreferences({ ...notificationPreferences, [e.target.name]: e.target.checked });
  };

  // Handle toggle of privacy settings
  const handlePrivacyToggle = (e) => {
    setPrivacySettings({ ...privacySettings, [e.target.name]: e.target.checked });
  };

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
    // Add logic for saving the settings
  };

  return (
    <div className="settings-container">
      <h1>Account Settings</h1>
      <p>Manage your account settings, preferences, and privacy options below.</p>

      {/* User Information Section */}
      <div className="settings-section">
        <h2>Account Information</h2>
        <form>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleUserChange}
              placeholder="Enter your full name"
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleUserChange}
              placeholder="Enter your email address"
            />
          </label>

          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleUserChange}
              placeholder="Enter your phone number"
            />
          </label>
        </form>
      </div>

      {/* Change Password Section */}
      <div className="settings-section">
        <h2>Change Password</h2>
        <form>
          <label>
            Current Password:
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              placeholder="Enter your current password"
            />
          </label>

          <label>
            New Password:
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter a new password"
            />
          </label>

          <label>
            Confirm New Password:
            <input
              type="password"
              name="confirmNewPassword"
              value={passwordData.confirmNewPassword}
              onChange={handlePasswordChange}
              placeholder="Confirm your new password"
            />
          </label>
        </form>
      </div>

      {/* Notification Preferences Section */}
      <div className="settings-section">
        <h2>Notification Preferences</h2>
        <label>
          <input
            type="checkbox"
            name="orderAlerts"
            checked={notificationPreferences.orderAlerts}
            onChange={handleNotificationToggle}
          />
          Receive Order Alerts
        </label>

        <label>
          <input
            type="checkbox"
            name="stockAlerts"
            checked={notificationPreferences.stockAlerts}
            onChange={handleNotificationToggle}
          />
          Receive Stock Alerts
        </label>

        <label>
          <input
            type="checkbox"
            name="supplierAlerts"
            checked={notificationPreferences.supplierAlerts}
            onChange={handleNotificationToggle}
          />
          Receive Supplier Alerts
        </label>
      </div>

      {/* Privacy Settings Section */}
      <div className="settings-section">
        <h2>Privacy Settings</h2>
        <label>
          <input
            type="checkbox"
            name="shareEmail"
            checked={privacySettings.shareEmail}
            onChange={handlePrivacyToggle}
          />
          Share Email Address
        </label>

        <label>
          <input
            type="checkbox"
            name="sharePhone"
            checked={privacySettings.sharePhone}
            onChange={handlePrivacyToggle}
          />
          Share Phone Number
        </label>
      </div>

      {/* Save Changes Button */}
      <div className="save-button">
        <button onClick={handleSaveSettings}>Save Changes</button>
      </div>
    </div>
  );
}

export default Settings;
