import React from "react";
import "./Feedback.css"; // External CSS file for styling

const Feedback = () => {
  const feedbackData = [
    {
      name: "Oyindamola Maja",
      location: "Badagry, Lagos",
      feedback:
        "Been stressing about a close centre to get the covid-19 vaccine, until I tried Vaccination.ng",
      highlighted: false,
    },
    {
      name: "Okeowo Lekan",
      location: "Ikeja, Lagos",
      feedback:
        "Got my vaccine very close to my house. Was very easy scheduling an appointment.",
      highlighted: true,
    },
    {
      name: "Kafaru Temitope",
      location: "Obanikoro, Lagos",
      feedback:
        "Been stressing about a close centre to get the covid-19 vaccine, until I tried Vaccination.ng",
      highlighted: false,
    },
  ];

  return (
    <section className="feedback-section">
      <h3 className="feedback-title">What our Patients Think</h3>
      <p className="feedback-subtitle">
        Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean
        eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue arcu
        donec neque.
      </p>
      <div className="feedback-container">
        {feedbackData.map((item, index) => (
          <div
            key={index}
            className={`feedback-card ${
              item.highlighted ? "highlighted-card" : ""
            }`}
          >
            <h4 className="feedback-name">{item.name}</h4>
            <p className="feedback-location">{item.location}</p>
            <p className="feedback-text">{item.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
