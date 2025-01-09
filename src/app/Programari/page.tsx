"use client";
import React, { useEffect, useState } from 'react';
import "/home/lucas/first_app/src/app/pstyle.css"; 

interface Appointment {
  ID: number;
  frizer: string;
  serviciu: string;
  date: string;
  time: string;
  nume: string;
  phone: string;
  email: string;
}

const Programari: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:5000/services/appointments');
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
    const interval = setInterval(fetchAppointments, 15000); // Actualizeaza datele  din trabelele de programari la fiecare 15 secunde
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    // Buton Logout Redirectionare catyre pagina principala
    window.location.href = '/';
  };

  //Grupare dupa frizer
  const groupedAppointments = appointments.reduce((acc, appointment) => {
    if (!acc[appointment.frizer]) {
      acc[appointment.frizer] = [];
    }
    acc[appointment.frizer].push(appointment);
    return acc;
  }, {} as Record<string, Appointment[]>);

  return (
    <div className="programari-container">
      <h1>Programari</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      {Object.keys(groupedAppointments).map((frizer) => {
        const frizerClass = frizer.toLowerCase().replace(/\s+/g, '');
        return (
          <div key={frizer} className="frizer-section">
            <h2>{frizer}</h2>
            <table className={`appointments-table ${frizerClass}`}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Serviciu</th>
                  <th>Data</th>
                  <th>Ora</th>
                  <th>Nume</th>
                  <th>Telefon</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {groupedAppointments[frizer].map((appointment) => {
                  const date = new Date(appointment.date);
                  const formattedDate = date.toLocaleDateString('en-CA');
                  return (
                    <tr key={appointment.ID}>
                      <td>{appointment.ID}</td>
                      <td>{appointment.serviciu}</td>
                      <td>{formattedDate}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.nume}</td>
                      <td>{appointment.phone}</td>
                      <td>{appointment.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Programari;