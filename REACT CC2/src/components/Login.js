import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';  // Styling for login and register

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      setUser(email);
      navigate('/home');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
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
        <p className="forgot-password">Forgot Password?</p>
        <button className="auth-btn" onClick={handleLogin}>Sign in</button>
        {error && <p className="error-msg">{error}</p>}
        <div className="auth-social">
          <p>or continue with</p>
          <div className="social-icons">
            <button className="social-btn google">G</button>
            <button className="social-btn github">G</button>
            <button className="social-btn facebook">F</button>
          </div>
        </div>
        <p className="register-link">Don’t have an account yet? <span onClick={() => navigate('/register')}>Register for free</span></p>
      </div>
    </div>
  );
}

export default Login;
