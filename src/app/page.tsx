"use client";
import React, { useState } from "react";
import "./style.css";
import LoginModal from "./LoginModal";


const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [serviciu, setserviciu] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [frizer, setfrizer] = useState("");
  const [nume, setNume] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);


  const handleNextStep = () => {
    if (step === 1 && serviciu) {
      setStep(2);
    } else if (step === 2 && date && time) {
      setStep(3);
    } else if (step === 3 && nume && phone && email) {
      setStep(4);
      handleSaveAppointment();
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setStep(1);
    setserviciu("");
    setDate("");
    setTime("");
    setfrizer("");
    setNume("");
    setPhone("");
    setEmail("");
  };
  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };
  const handleSaveAppointment = async () => {
    try {
      const response = await fetch('http://localhost:5000/services/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ frizer, serviciu, date, time, nume, phone, email }),
      });
  
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save appointment');
    }
  };
  return (
    <div>
      
      <nav className="sticky-nav">
        <ul className="menu">
          <li>
            <a href="#home">Acasa</a>
          </li>
          <li>
            <a href="#about">Despre Noi</a>
          </li>
          <li>
            <a href="#serviciu">Programare</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="login-button">
          <a href="#" onClick={() => setShowLoginModal(true)}>Login</a>
          </li>
        </ul>
      </nav>
      {showLoginModal && <LoginModal onClose={handleCloseLoginModal} />}
      
      <section id="home" className="section">
        <h1>Bine ati venit la salonul nostru!</h1>
        <p>Umreaza sa pun</p>
      </section>

      
      <section id="about" className="section">
        <h2>Despre Noi</h2>
        <p>Urmeaza sa pun o descriere</p>
      </section>

      
      <section id="serviciu" className="section">
        <h2>Programare</h2>
        <div className="card-container">
          {[
            {
              frizer: "Gabriel",
              serviciu: ["80 Lei Tuns", "100 Lei Tuns + Barba", "120 Lei Tuns par lung"],
              
            },
            {
              frizer: "Antonio",
              serviciu: ["60 Lei Tuns", "70 Lei Tuns + Barba","100 Lei Tuns par lung"],
            },
            {
              frizer: "Lucas",
              serviciu: ["60 Lei Tuns", "70 Lei Tuns + Barba","100 Lei Tuns par lung"],
            },
            {
              frizer: "Andrei",
              serviciu: ["70 Lei Tuns", "90 Lei Tuns + Barba","100 Lei Tuns par lung"],
            },
          ].map((stylist, index) => (
            <div className="card" key={index}>
              <img
                src={`./images/Profile_Lucas${index + 1}.jpeg`}
                alt={stylist.frizer}
                className="card-image"
              />
              <h2>{stylist.frizer}</h2>
              {stylist.serviciu.map((price, i) => (
                <p key={i}>{price}</p>
              ))}
              <button
                className="schedule-button"
                onClick={() => {
                  setfrizer(stylist.frizer);
                  setShowModal(true);
                }}
              >
                Programeaza-te
              </button>
            </div>
          ))}
        </div>

        
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button" onClick={handleCloseModal}>
                X
              </button>
              {step === 1 && (
                <>
                  <h2>Programare la {serviciu}</h2>
                  <p>Selecteaza un serviciu:</p>
                  <select
                    value={serviciu}
                    onChange={(e) => setserviciu(e.target.value)}
                    className="serviciu-select"
                  >
                    <option value="">Selecteaza serviciul</option>
                    <option value="Tuns">Tuns</option>
                    <option value="Tuns + Barba">Tuns + Barba</option>
                    <option value="Tuns par lung">Tuns par lung</option>
                  </select>
                  <button className="schedule-button" onClick={handleNextStep}>
                    Inainte
                  </button>
                </>
              )}
              {step === 2 && (
                <>
                  <h2>Programare la {serviciu}</h2>
                  <p>Selecteaza data si ora:</p>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="serviciu-select"
                  >
                    <option value="">Selecteaza ora</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="16:00">16:00</option>
                  </select>
                  <div className="modal-buttons">
                    <button onClick={handleBackStep}>Inapoi</button>
                    <button onClick={handleNextStep}>Inainte</button>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <h2>Programare la {serviciu}</h2>
                  <p>Completeaza datele personale:</p>
                  <input
                    type="text"
                    placeholder="Nume"
                    value={nume}
                    onChange={(e) => setNume(e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="modal-buttons">
                    <button onClick={handleBackStep}>Inapoi</button>
                    <button onClick={handleNextStep}>Inainte</button>
                  </div>
                </>
              )}
              {step === 4 && (
                <>
                  <h2>Programarea a fost realizata!</h2>
                  <p>Multumim! Te vom contacta pentru confirmare.</p>
                  {/* <button onClick={handleSaveAppointment}>Salveaza Programarea</button> */}
                  <button onClick={handleCloseModal} className="modal-button-programare">Inchide</button>
                </>
              )}
            </div>
          </div>
        )}
      </section>

      
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Adresa: </p>
        <p>Telefon: </p>
        <p>Email: </p>
      </section>
    </div>
  );
};

export default App;
