import React, { useState } from "react";
import "./Getvaccinated.css";
import { FaShieldAlt, FaVirusSlash, FaUserShield } from "react-icons/fa";

function Getvaccinated() {
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBoxClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1 className="heading">Why get vaccinated today?</h1>
      <div className="columns">
        <div
          className="column-box"
          onClick={() =>
            handleBoxClick("Vaccines help protect your immune system by building antibodies.")
          }
        >
          <FaShieldAlt size={50} className="icon" />
          <h3>Protects Your Immune System against viruses</h3>
        </div>
        <div
          className="column-box"
          onClick={() =>
            handleBoxClick("Vaccines minimize the spread of the virus in communities.")
          }
        >
          <FaVirusSlash size={50} className="icon" />
          <h3>Minimize the Spread of Virus</h3>
        </div>
        <div
          className="column-box"
          onClick={() =>
            handleBoxClick("Vaccines protect you from severe illnesses caused by the virus.")
          }
        >
          <FaUserShield size={50} className="icon" />
          <h3>Protect Yourself</h3>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Getvaccinated;
