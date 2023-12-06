// src/App.js
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Port from './pages/portfolio-details';

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
      <ToastContainer />
    </Router>
  );
};

export default App;
