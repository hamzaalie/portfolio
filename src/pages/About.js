// src/components/AboutUs.js
import React from 'react';
import './About.css';
import twoColumnImage from '../images/twoColumnImage1.svg';


const AboutUs = () => {
  return (
    <div>
      {/* About Us Section */}
      <section className="about-us-section full-width-section">
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>
            Welcome to our platform, where we believe in empowering individuals to showcase their skills and experiences
            through professional portfolios. 
          </p>
        </div>

      </section>
      <section className="two-column-section full-width-section">
        <div className="two-column-content">
          <img src={twoColumnImage} alt="Two Column Section" />
          <div className="two-column-text">
            <h1>Use the best resume maker as your guide</h1>
            <p>
            Getting that dream job can seem like an impossible task. We’re here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.
            </p>
            
            {/* Add more text content if necessary */}
          </div>
        </div>
      </section>


      <section className="how-to-create-resume full-width-section">
        <h2>How to Create Your Resume</h2>
        <div className="steps">
          <div className="step">
            <div>
              <h3>Our Vision</h3>
              <p>To empower individuals and businesses by providing a platform that simplifies the creation and management of professional online portfolios, fostering growth and success in the digital world.</p>
            </div>
          </div>

          <div className="step">
            <div>
              <h3>Our Mission</h3>
              <p>To make the process of building and customizing online portfolios accessible, enjoyable, and effective for users of all backgrounds. We aim to provide innovative tools and features that enable individuals to confidently showcase their unique stories and accomplishments.</p>
            </div>
          </div>
        </div>
      </section>

     


      <section className="get-started-about full-width-section">
        <h1>Get Started Today</h1>
        <p>Join thousands of professionals who have already created stunning portfolios. Get started now and boost your career!</p>
        <button className="get-started-btn">Get Started</button>
      </section>
    </div>
  );
};

export default AboutUs;
