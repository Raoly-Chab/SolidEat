// services/authService.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';  // Adaptez l'URL selon votre configuration

// Création d'une instance axios avec configuration
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercépter les requêtes pour ajouter le token d'authentification si disponible
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Fonctions du service d'authentification
const authService = {
  // Inscription d'un utilisateur
  register: async (userData) => {
    try {
      const response = await apiClient.post('auth/register/', {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      });
      
      if (response.data.tokens) {
        localStorage.setItem('accessToken', response.data.tokens.access);
        localStorage.setItem('refreshToken', response.data.tokens.refresh);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
  
  // Connexion d'un utilisateur
  login: async (email, password, rememberMe) => {
    try {
      const response = await apiClient.post('auth/login/', {
        email,
        password,
        rememberMe,
      });
      
      if (response.data.tokens) {
        localStorage.setItem('accessToken', response.data.tokens.access);
        localStorage.setItem('refreshToken', response.data.tokens.refresh);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
  
  // Déconnexion
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  },
  
  // Récupérer l'utilisateur connecté
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
  // Vérifier si l'utilisateur est connecté
  isLoggedIn: () => {
    return !!localStorage.getItem('accessToken');
  },
  
  // Rafraîchir le token d'accès
  refreshToken: async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('Aucun token de rafraîchissement disponible');
      }
      
      const response = await apiClient.post('auth/token/refresh/', {
        refresh: refreshToken,
      });
      
      localStorage.setItem('accessToken', response.data.access);
      return response.data;
    } catch (error) {
      // En cas d'erreur, déconnecter l'utilisateur
      authService.logout();
      throw error;
    }
  },
  
  // Récupérer les détails de l'utilisateur
  getUserDetails: async () => {
    try {
      const response = await apiClient.get('users/me/');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
};

export default authService;