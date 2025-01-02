import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="app">
      {/* Get a Quote Section */}
      <section className="get-quote">
        <h2>Get a quote</h2>
        <p>Please do enter your email address below</p>
        <div className="email-input">
          <input type="email" placeholder="lenux.ng@gmail.com" />
          <button>
            <span>✈️</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h1>Vaccination.ng</h1>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#schedule">Schedule</a>
            <a href="#contact">Contact us</a>
          </nav>
          <div className="social-icons">
            <a href="#youtube">📺</a>
            <a href="#instagram">📷</a>
            <a href="#twitter">🐦</a>
            <a href="#facebook">📘</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
