import React from "react";
import "./VaccineForm.css";

function VaccineForm() {
  return (
    <div className="container">
      <div className="form-section">
        <h1>Get your vaccine registration today</h1>
        <form>
          <label htmlFor="fullName">Patient’s Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Full name"
            className="input-field"
          />

          <label htmlFor="mobileNumber">Mobile Number</label>
          <p className="helper-text">
            Notifications for appointment and reminders will be sent to this
            provided number
          </p>
          <div className="mobile-input">
            <div className="country-code">
              <span>🇳🇬</span>
            </div>
            <input
              type="text"
              id="mobileNumber"
              placeholder="Phone number"
              className="input-field"
            />
            <button type="button" className="verify-button">
              Verify
            </button>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <p className="footer-text">
          Already registered? <a href="#">Check your status</a>
        </p>
      </div>
      <div className="image-section">
        <div className="image-container">
          <img 
            src='/covidimg.png'
            alt="COVID-19 Vaccine"
            className="vaccine-image"
          />
          <div className="overlay">
            <button className="status-button">Verify Status</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VaccineForm;
