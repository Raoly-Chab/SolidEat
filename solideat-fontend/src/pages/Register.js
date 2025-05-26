import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../logo.svg';
import authService from '../services/authService';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
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
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est obligatoire';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est obligatoire';
    }
    
    if (!formData.email) {
      newErrors.email = 'L\'email est obligatoire';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est obligatoire';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Vous devez accepter les conditions d\'utilisation';
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
        await authService.register(formData);
        // Redirection vers la page d'accueil ou le tableau de bord après inscription réussie
        navigate('/dashboard');
      } catch (error) {
        console.error('Erreur d\'inscription:', error);
        
        // Traitement des erreurs de validation du backend
        if (error.errors) {
          setErrors({ ...errors, ...error.errors });
        } else {
          setApiError(error.message || 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
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
            <p className="tagline">Créez votre compte solidaire</p>
            <p className="tagline-sub">Participez à nos actions pour lutter contre la précarité alimentaire et le gaspillage</p>
          </div>
        </div>
      </div>
      
      {/* Colonne de droite avec le formulaire */}
      <div className="right-column">
        <div className="form-container">
          <div className="form-header">
            <h2>Inscription</h2>
            <p>Créez votre compte pour rejoindre SOLIDEAT</p>
          </div>
          
          {apiError && (
            <div className="api-error-message">
              {apiError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Prénom</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'input-error' : ''}
                  placeholder="Votre prénom"
                  disabled={isSubmitting}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Nom</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'input-error' : ''}
                  placeholder="Votre nom"
                  disabled={isSubmitting}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>
            
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
                placeholder="Créez un mot de passe"
                disabled={isSubmitting}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'input-error' : ''}
                placeholder="Confirmez votre mot de passe"
                disabled={isSubmitting}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
            
            <div className="form-terms">
              <div className="accept-terms">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className={errors.acceptTerms ? 'checkbox-error' : ''}
                  disabled={isSubmitting}
                />
                <label htmlFor="acceptTerms">
                  J'accepte les <Link to="/terms" className="accent-link">conditions d'utilisation</Link> et la <Link to="/privacy" className="accent-link">politique de confidentialité</Link>
                </label>
              </div>
              {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
            </div>
            
            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Inscription en cours...' : 'S\'inscrire'}
            </button>
          </form>
          
          <div className="form-footer">
            <p>Vous avez déjà un compte? <Link to="/login" className="accent-link">Se connecter</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;