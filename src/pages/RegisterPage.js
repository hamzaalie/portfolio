import React from 'react';
import RegisterForm from '../components/RegisterForm';
import './LoginPage.css';


const RegisterPage = () => {
  return (
    <div>

    <header className="hero">
            <div className="hero-content">
              <h1>Register
    </h1>
    
            </div>
          </header>
    
          <section className="logform-section">
          <RegisterForm />
          </section>
    
        </div>
  );
};

export default RegisterPage;
