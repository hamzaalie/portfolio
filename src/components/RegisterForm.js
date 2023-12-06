import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
      });
  
      if (response && response.data && response.data.message) {
        setRegistrationMessage(response.data.message);
      } else {
        console.error('Invalid response format:', response.data);
      }
    } catch (error) {
      if (error.isAxiosError) {
        // AxiosError specific properties
        console.error('AxiosError - Request failed with status', error.response?.status);
        console.error('AxiosError - Response data:', error.response?.data);
      } else {
        // Generic error handling
        console.error('Registration failed with an error:', error);
      }
    }
  };
    
    
  return (
    <div>
      <h2>Register</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
};

export default RegisterForm;
