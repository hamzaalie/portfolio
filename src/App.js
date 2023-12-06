// src/App.js
import React from 'react';
import { Button } from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RegisterPage from './pages/RegisterPage';
import Port from './pages/portfolio-details';
import LoginPage from './pages/LoginPage';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';



const App = () => {
  return (
    <Router>
            <HeaderComponent />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/portfolio-details" element={<Port />} />


        

      </Routes>
      <FooterComponent />

    </Router>
    
  );
};

export default App;
