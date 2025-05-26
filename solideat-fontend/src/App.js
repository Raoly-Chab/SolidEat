import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Restaurants from './pages/Restaurants'; // ✅ Ajouté ou vérifié
import Menu from './pages/Menu';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restaurants" element={<Restaurants />} /> {/* ✅ Route ajoutée */}
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} /> */}
        <Route
          path="/"
          element={
            <div className="auth-container">
              <div className="auth-box">
                <div className="logo-container">
                  <img src={logo} className="logo" alt="logo" />
                  <h1>SOLIDEAT</h1>
                </div>
                <h2>Bienvenue sur SOLIDEAT</h2>
                <div className="auth-form">
                  <p style={{ textAlign: 'center', marginBottom: '20px' }}>
                    Plateforme solidaire pour les Restaurants du Cœur et l'aide alimentaire
                  </p>
                  <Link to="/login" className="btn-submit" style={{ textAlign: 'center', marginBottom: '15px' }}>
                    Se connecter
                  </Link>
                  <Link
                    to="/register"
                    className="btn-submit"
                    style={{
                      textAlign: 'center',
                      background: 'white',
                      color: '#ff8a3d',
                      border: '1px solid #ff8a3d',
                    }}
                  >
                    S'inscrire
                  </Link>
                  <Link
                    to="/restaurants"
                    className="btn-submit"
                    style={{
                      textAlign: 'center',
                      background: 'white',
                      color: '#ff8a3d',
                      border: '1px solid #ff8a3d',
                    }}
                  >
                    Voir les restaurants
                  </Link>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
