import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <header className="navbar">
        <div className="logo">Vaccination.ng</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Schedule</a>
          <a href="#">Contact us</a>
          <button className="status-button">Check Status</button>
        </nav>
      </header>

      <div className="content">
        <div className="text-content">
          <p className="sub-heading">Get Vaccinated. Boost your Immune System</p>
          <h1 className="main-heading">
            COVID-19 Vaccination Got Easier With,{" "}
            <span className="highlight">Vaccination.ng</span>
          </h1>
          <p className="description">
            Vaccination.ng will help you find the nearest centre for vaccination, in all 36 states of Nigeria.
          </p>
          <div className="buttons">
            <button className="primary-button">Get Vaccine</button>
            <button className="secondary-button">Help Centre</button>
          </div>
        </div>
        <div className="image-content">
          <img
            src='/covidimg.png'
            alt="Vaccine"
            className="vaccine-image"
          />
        </div>
      </div>

      <div className="schedule">
        <h3>Schedule your Vaccination</h3>
        <div className="schedule-details">
          <div className="detail-item">
            <span className="icon">📍</span>
            <span>Location: Ikeja Lagos, Nigeria</span>
          </div>
          <div className="detail-item">
            <span className="icon">📅</span>
            <span>Date: 29 February, 2022</span>
          </div>
          <div className="detail-item">
            <span className="icon">💉</span>
            <span>Vaccine Type: Moderna</span>
          </div>
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default App;
