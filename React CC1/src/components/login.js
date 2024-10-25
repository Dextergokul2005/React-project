import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      console.log('Logging in:', { email, password });
      navigate('/inventory');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Admin Login</Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          variant="text"
          color="primary"
          fullWidth
          sx={{ mt: 1 }}
          onClick={() => navigate('/register')}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
