// src/Reservation.js
import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import de react-calendar
import 'react-calendar/dist/Calendar.css'; // Import du CSS de react-calendar
import './Reservation.css';

function Reservation() {
  const [date, setDate] = useState(new Date()); // Date sélectionnée
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    restaurant: '',
    heure: '',
  });

  // Exemple de disponibilité des dates
  const unavailableDates = [
    new Date(2023, 4, 15), // Exemple : 15 Mai 2023 est complet
    new Date(2023, 4, 17), // Exemple : 17 Mai 2023 est complet
  ];

  const availableDates = [
    new Date(2023, 4, 16), // Exemple : 16 Mai 2023 est disponible
    new Date(2023, 4, 18), // Exemple : 18 Mai 2023 est disponible
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Merci ${formData.nom}, votre réservation est confirmée pour le ${date.toLocaleDateString()} à ${formData.heure} au ${formData.restaurant}.`);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const isUnavailable = (date) => {
    // Vérifie si la date est dans la liste des dates complètes
    return unavailableDates.some(d => d.toDateString() === date.toDateString());
  };

  const isAvailable = (date) => {
    // Vérifie si la date est dans la liste des dates disponibles
    return availableDates.some(d => d.toDateString() === date.toDateString());
  };

  return (
    <div className="trip-reservation">
      <h2>🍽️ Réserver un repas solidaire</h2>
      <p className="subtitle">Choisissez un restaurant, une date et profitez d'un bon plat chaud.</p>

      <form className="trip-form" onSubmit={handleSubmit}>
        {/* Formulaire pour les informations personnelles */}
        <label>👤 Nom complet</label>
        <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />

        <label>📧 Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>🏠 Choisissez un restaurant</label>
        <select name="restaurant" value={formData.restaurant} onChange={handleChange} required>
          <option value="">-- Choisissez un restaurant --</option>
          <option value="Solidaire Paris 10">Solidaire Paris 10</option>
          <option value="Cœur du 13ème">Cœur du 13ème</option>
          <option value="Partage République">Partage République</option>
        </select>

        {/* Calendrier */}
        <label>📅 Choisissez une date</label>
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={({ date }) => {
            if (isUnavailable(date)) {
              return 'unavailable'; // Date complète en rouge
            }
            if (isAvailable(date)) {
              return 'available'; // Date disponible en vert
            }
            return null;
          }}
        />

        <label>🕒 Heure</label>
        <input type="time" name="heure" value={formData.heure} onChange={handleChange} required />

        <button type="submit">✅ Réserver</button>
      </form>
    </div>
  );
}

export default Reservation;
