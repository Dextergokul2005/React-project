import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      const newUser = { email, password };
      localStorage.setItem('registeredUser', JSON.stringify(newUser));
      alert('Successfully Registered');
      navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <button className="auth-btn" onClick={handleRegister}>Register</button>
        {error && <p className="error-msg">{error}</p>}
        <p className="login-link">Already have an account? <span onClick={() => navigate('/')}>Login</span></p>
      </div>
    </div>
  );
}

export default Register;
