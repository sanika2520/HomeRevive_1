// src/components/LandingPage.js

// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import homeReviveLogo from '../assets/home-revive-logo.png.webp';

 // Assuming you save the logo image here

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="navbar">
        <div className="logo-container">
          <img src={homeReviveLogo} alt="Home Revive Logo" className="logo" />
          <div className="description">
            <h1>Home Revive</h1>
            <p>Your trusted partner for home services and local professional expertise.</p>
          </div>
        </div>
        <nav>
          <Link to="/login-signup" className="nav-link">Login/Signup</Link>
        </nav>
      </header>

      <section className="landing-info">
        <h2>Welcome to Home Revive</h2>
        <p>Connecting you with skilled local professionals for all your home service needs. From plumbing to carpentry, we bring you trusted experts from your community.</p>
      </section>

      <section className="scrollable-content">
        <h3>Why Choose Home Revive?</h3>
        <p>Quick, reliable, and professional services tailored to your needs.</p>
        <p>We support local employment by connecting you with local professionals.</p>
        <p>Our services ensure quality and customer satisfaction.</p>
      </section>
    </div>
  );
}

export default LandingPage;

