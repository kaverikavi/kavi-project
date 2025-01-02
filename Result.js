import React from "react";
import "./Result.css";

function Result() {
  return (
    <div className="container">
      <h2>Check your COVID-19 result on our Database</h2>
      <div className="form">
        <input type="text" placeholder="Full Name" className="input" />
        <input type="text" placeholder="NIK Number" className="input" />
        <button className="button">Check</button>
      </div>
      <p className="footer-text">
        Need a certificate for your COVID-19 result?{" "}
        <a href="#" className="link">
          Please click here
        </a>
      </p>
    </div>
  );
}

export default Result;
