import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
  
      // Check if response and response.data are defined
      if (response && response.data) {
        console.log(response.data);
      } else {
        console.error('Invalid response:', response);
      }
    } catch (error) {
      // Handle errors, for example:
      if (error.response) {
        console.error('Login failed:', error.response.data);
      } else {
        console.error('Error during login request:', error.message);
      }
    }
  };
  
  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
