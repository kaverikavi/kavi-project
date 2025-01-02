import React, { useState } from "react";
import "./Symptoms.css";

const symptomsData = [
  { id: 1, name: "High Fever", icon: "🌡️", description: "Temperature above 100°F." },
  { id: 2, name: "Loss sense of smell", icon: "👃", description: "Unable to detect odors." },
  { id: 3, name: "Dry Cough", icon: "🤧", description: "Persistent and non-productive cough." },
  { id: 4, name: "Loss of sense of Taste", icon: "👅", description: "Inability to taste food or beverages." },
  { id: 5, name: "Difficulty Breathing", icon: "😮‍💨", description: "Shortness of breath or difficulty inhaling." },
  { id: 6, name: "Sore Throat", icon: "🗣️", description: "Pain or irritation in the throat." },
];

function Symptoms() {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const handleSymptomClick = (symptom) => {
    setSelectedSymptom(symptom);
  };

  return (
    <div className="app-container">
      <header>
        <h1>COVID-19 Symptoms</h1>
        <p>Click on a symptom to learn more about it.</p>
      </header>
      <div className="symptoms-list">
        {symptomsData.map((symptom) => (
          <div
            key={symptom.id}
            className="symptom-card"
            onClick={() => handleSymptomClick(symptom)}
          >
            <span className="symptom-icon">{symptom.icon}</span>
            <h3>{symptom.name}</h3>
          </div>
        ))}
      </div>
      {selectedSymptom && (
        <div className="symptom-details">
          <h2>{selectedSymptom.icon} {selectedSymptom.name}</h2>
          <p>{selectedSymptom.description}</p>
          <button onClick={() => setSelectedSymptom(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Symptoms;
