import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../logo.svg';
import authService from '../services/authService';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Effacer les erreurs lorsque l'utilisateur modifie un champ
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'L\'email est obligatoire';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est obligatoire';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setApiError(null);
      
      try {
        await authService.login(
          formData.email,
          formData.password,
          formData.rememberMe
        );
        
        // Redirection vers la page d'accueil ou le tableau de bord après connexion réussie
        navigate('/dashboard');
      } catch (error) {
        console.error('Erreur de connexion:', error);
        
        // Traitement des erreurs
        if (error.errors) {
          setErrors({ ...errors, ...error.errors });
        } else {
          setApiError(error.message || 'Email ou mot de passe incorrect.');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div className="split-container">
      {/* Colonne de gauche avec logo et phrases d'accroche */}
      <div className="left-column">
        <div className="left-content">
          <img src={logo} alt="SOLIDEAT Logo" className="big-logo" />
          <h1>SOLIDEAT</h1>
          <div className="taglines">
            <p className="tagline">Ensemble contre la précarité alimentaire</p>
            <p className="tagline-sub">Rejoignez notre communauté solidaire pour un impact positif</p>
          </div>
        </div>
      </div>
      
      {/* Colonne de droite avec le formulaire */}
      <div className="right-column">
        <div className="form-container">
          <div className="form-header">
            <h2>Connexion</h2>
            <p>Accédez à votre compte SOLIDEAT</p>
          </div>
          
          {apiError && (
            <div className="api-error-message">
              {apiError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
                placeholder="Entrez votre email"
                disabled={isSubmitting}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'input-error' : ''}
                placeholder="Entrez votre mot de passe"
                disabled={isSubmitting}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
                <label htmlFor="rememberMe">Se souvenir de moi</label>
              </div>
              <Link to="/reset-password" className="forgot-password">Mot de passe oublié?</Link>
            </div>
            
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </form>
          
          <div className="form-footer">
            <p>Vous n'avez pas de compte? <Link to="/register" className="accent-link">S'inscrire</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;