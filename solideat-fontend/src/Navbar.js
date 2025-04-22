// src/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="nav-inner">
        
        <Link to="/" className="nav-title">SolidEat</Link>
        <Link to="/inscription" className="nav-link">Inscription et Réservation</Link>
        <Link to="/restaurants" className="nav-link">Liste des Restaurants</Link>
        <Link to="/map" className="nav-link">Carte Géographique</Link>
        <Link to="/reviews" className="nav-link">Avis et Chat</Link>
      </div>
    </nav>
  );
}

export default Navbar;
