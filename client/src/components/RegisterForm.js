import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        email,
        password,
      });
      toast.success("User registered");
      setUsername('')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error);
      if (error.response.data.error === 'Email already exists') {
        toast.error("User is already registered");
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
      {/* {registrationMessage && <p>{registrationMessage}</p>} */}
    </div>
  );
};

export default RegisterForm;
