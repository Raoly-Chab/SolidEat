import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  // États pour gérer les données et les filtres
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('starters');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Références pour les animations au scroll
  const fadingRefs = useRef([]);
  fadingRefs.current = [];
  const { id } = useParams();
  const navigate = useNavigate();

  // Ajouter des références pour les animations au scroll
  const addToFadingRefs = (el) => {
    if (el && !fadingRefs.current.includes(el)) {
      fadingRefs.current.push(el);
    }
  };

  // Fonction pour simuler le chargement des données du restaurant et de son menu
  const fetchRestaurantData = (restaurantId) => {
    // Simuler un appel API
    return new Promise((resolve) => {
      setTimeout(() => {
        // Ces données seraient normalement récupérées depuis votre API
        const menuItems = {
          starters: [
            { id: 1, name: 'Soupe à l\'oignon', price: 5.50, description: 'Soupe traditionnelle à l\'oignon caramélisé et croûtons de pain', image: 'https://picsum.photos/800/500?random=1', allergens: ['Gluten', 'Lait'], vegetarian: true },
            { id: 2, name: 'Salade de chèvre chaud', price: 6.90, description: 'Salade verte, toasts de chèvre, miel, noix et tomates', image: 'https://picsum.photos/800/500?random=2', allergens: ['Lait', 'Fruits à coque'], vegetarian: true },
            { id: 3, name: 'Terrine maison', price: 7.50, description: 'Terrine de campagne accompagnée de cornichons et pain de campagne', image: 'https://picsum.photos/800/500?random=3', allergens: ['Gluten'], vegetarian: false },
            { id: 4, name: 'Assiette de crudités', price: 5.90, description: 'Assortiment de légumes frais de saison avec vinaigrette', image: 'https://picsum.photos/800/500?random=4', allergens: [], vegetarian: true }
          ],
          mains: [
            { id: 5, name: 'Poulet rôti aux herbes', price: 12.50, description: 'Poulet fermier rôti avec herbes de Provence, accompagné de pommes de terre', image: 'https://picsum.photos/800/500?random=5', allergens: [], vegetarian: false },
            { id: 6, name: 'Bœuf bourguignon', price: 14.90, description: 'Mijoté de bœuf au vin rouge avec carottes et champignons', image: 'https://picsum.photos/800/500?random=6', allergens: [], vegetarian: false },
            { id: 7, name: 'Poisson du jour', price: 13.50, description: 'Poisson frais selon arrivage, servi avec légumes de saison', image: 'https://picsum.photos/800/500?random=7', allergens: ['Poisson'], vegetarian: false },
            { id: 8, name: 'Tarte aux légumes', price: 11.90, description: 'Tarte maison aux légumes de saison et fromage de chèvre', image: 'https://picsum.photos/800/500?random=8', allergens: ['Gluten', 'Lait'], vegetarian: true }
          ],
          desserts: [
            { id: 9, name: 'Crème brûlée', price: 6.50, description: 'Crème vanillée avec sucre caramélisé', image: 'https://picsum.photos/800/500?random=9', allergens: ['Lait', 'Œufs'], vegetarian: true },
            { id: 10, name: 'Tarte Tatin', price: 6.90, description: 'Tarte aux pommes caramélisées servie tiède', image: 'https://picsum.photos/800/500?random=10', allergens: ['Gluten', 'Lait'], vegetarian: true },
            { id: 11, name: 'Mousse au chocolat', price: 5.90, description: 'Mousse au chocolat noir intense', image: 'https://picsum.photos/800/500?random=11', allergens: ['Lait', 'Œufs'], vegetarian: true },
            { id: 12, name: 'Fruit de saison', price: 4.50, description: 'Assortiment de fruits frais de saison', image: 'https://picsum.photos/800/500?random=12', allergens: [], vegetarian: true }
          ],
          drinks: [
            { id: 13, name: 'Eau minérale', price: 2.50, description: 'Bouteille 50cl, plate ou gazeuse', image: 'https://picsum.photos/800/500?random=13', allergens: [], vegetarian: true },
            { id: 14, name: 'Soda', price: 3.50, description: 'Cola, limonade ou orangeade', image: 'https://picsum.photos/800/500?random=14', allergens: [], vegetarian: true },
            { id: 15, name: 'Vin du moment', price: 4.90, description: 'Verre de vin rouge, blanc ou rosé selon sélection', image: 'https://picsum.photos/800/500?random=15', allergens: ['Sulfites'], vegetarian: true },
            { id: 16, name: 'Café', price: 2.00, description: 'Expresso, allongé ou noisette', image: 'https://picsum.photos/800/500?random=16', allergens: [], vegetarian: true }
          ]
        };

        const restaurantData = {
          id: restaurantId,
          name: 'BEAUNIER',
          address: '43, RUE BEAUNIER',
          city: 'PARIS',
          code: '75014',
          type: 'E',
          typeLabel: 'Établissement',
          image: 'https://picsum.photos/800/500?random=20',
          rating: '4.5',
          reviewCount: 120,
          cuisineType: 'Cuisine Française',
          priceRange: '€€',
          openHours: '11h30-14h30 • 18h30-22h00',
          description: 'Ce charmant restaurant offre une expérience culinaire authentique dans un cadre chaleureux. Notre chef utilise des produits frais et locaux pour créer des plats délicieux et abordables.',
          features: ['Accessible PMR', 'Terrasse', 'Menu enfant', 'Végétarien'],
          menuItems: menuItems,
          specialOffer: 'Menu du jour'
        };

        resolve(restaurantData);
      }, 800);
    });
  };

  // Chargement des données au montage du composant
  useEffect(() => {
    setLoading(true);
    fetchRestaurantData(id)
      .then(data => {
        setRestaurant(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des données:', error);
        setLoading(false);
      });
    
    // Gestionnaire de scroll pour les animations
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Animation au scroll
      fadingRefs.current.forEach(el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Nettoyer l'écouteur d'événement
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]);
  
  // Effet pour initialiser les animations après chargement
  useEffect(() => {
    if (!loading) {
      // Activer les animations pour les éléments visibles initialement
      setTimeout(() => {
        fadingRefs.current.forEach(el => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight * 0.8;
          
          if (isVisible) {
            el.classList.add('visible');
          }
        });
      }, 100);
    }
  }, [loading]);

  // Fonction pour ajouter un plat au panier
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    
    // Afficher le panier après ajout
    setShowCart(true);
  };

  // Fonction pour retirer un plat du panier
  const removeFromCart = (itemId) => {
    const existingItem = cartItems.find(item => item.id === itemId);
    
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== itemId));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === itemId 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ));
    }
  };

  // Calcul du total du panier
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Afficher un état de chargement
  if (loading) {
    return (
      <div className="menu-loading">
        <div className="loading-spinner"></div>
        <p>Chargement du menu...</p>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="menu-error">
        <p>Restaurant non trouvé</p>
        <button onClick={() => navigate('/restaurants')}>Retour aux restaurants</button>
      </div>
    );
  }

  // Rendu du composant
  return (
    <div className="menu-container">
      {/* Hero Banner */}
      <div className="menu-hero" style={{backgroundPosition: `center ${scrollY * 0.5}px`}}>
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="hero-image" 
        />
        <div className="hero-content">
          <button className="back-button" onClick={() => navigate('/restaurants')}>
            ← Retour aux restaurants
          </button>
          <h1>{restaurant.name}</h1>
          <div className="restaurant-meta">
            <p className="restaurant-address">
              <span className="info-icon">📍</span>
              <span>{restaurant.code} - {restaurant.address}, {restaurant.city}</span>
            </p>
            <div className="restaurant-rating">
              <span className="star-icon">⭐</span>
              <span>{restaurant.rating}</span>
              <span className="review-count">({restaurant.reviewCount})</span>
            </div>
            <p className="restaurant-cuisine">
              {restaurant.cuisineType} • {restaurant.priceRange}
            </p>
            <p className="restaurant-hours">
              <span className="info-icon">🕒</span>
              <span>{restaurant.openHours}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="menu-main">
        {/* Description du restaurant */}
        <div className="restaurant-description" ref={addToFadingRefs}>
          <h2>À propos de {restaurant.name}</h2>
          <p>{restaurant.description}</p>
          <div className="restaurant-features">
            {restaurant.features.map((feature, i) => (
              <span key={i} className="feature-tag">{feature}</span>
            ))}
          </div>
          {restaurant.specialOffer && (
            <div className="special-offer">
              <span className="offer-icon">✅</span>
              <span>{restaurant.specialOffer}</span>
            </div>
          )}
        </div>

        {/* Navigation des catégories */}
        <div className="menu-categories">
          <button 
            className={activeCategory === 'starters' ? 'active' : ''}
            onClick={() => setActiveCategory('starters')}
          >
            Entrées
          </button>
          <button 
            className={activeCategory === 'mains' ? 'active' : ''}
            onClick={() => setActiveCategory('mains')}
          >
            Plats
          </button>
          <button 
            className={activeCategory === 'desserts' ? 'active' : ''}
            onClick={() => setActiveCategory('desserts')}
          >
            Desserts
          </button>
          <button 
            className={activeCategory === 'drinks' ? 'active' : ''}
            onClick={() => setActiveCategory('drinks')}
          >
            Boissons
          </button>
        </div>

        {/* Liste des plats */}
        <div className="menu-items">
          <h2>
            {activeCategory === 'starters' && 'Entrées'}
            {activeCategory === 'mains' && 'Plats principaux'}
            {activeCategory === 'desserts' && 'Desserts'}
            {activeCategory === 'drinks' && 'Boissons'}
          </h2>
          
          <div className="menu-items-grid">
            {restaurant.menuItems[activeCategory].map((item) => (
              <div 
                key={item.id} 
                className="menu-item-card"
                ref={addToFadingRefs}
              >
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} />
                  {item.vegetarian && (
                    <span className="vegetarian-badge">Végétarien</span>
                  )}
                </div>
                
                <div className="menu-item-details">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-item-price">{item.price.toFixed(2)} €</span>
                  </div>
                  
                  <p className="menu-item-description">
                    {item.description}
                  </p>
                  
                  {item.allergens.length > 0 && (
                    <div className="menu-item-allergens">
                      <p>Allergènes: {item.allergens.join(', ')}</p>
                    </div>
                  )}
                  
                  <button 
                    className="add-to-cart-button"
                    onClick={() => addToCart(item)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Panier */}
      <div className={`cart-container ${showCart ? 'show' : ''}`}>
        <div className="cart-header">
          <h3>Votre commande</h3>
          <button className="close-cart-button" onClick={() => setShowCart(false)}>×</button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Votre panier est vide</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">{(item.price * item.quantity).toFixed(2)} €</p>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="cart-total">
                <span>Total</span>
                <span>{cartTotal.toFixed(2)} €</span>
              </div>
              <button className="checkout-button">Valider la commande</button>
            </div>
          </>
        )}
        
        {!showCart && cartItems.length > 0 && (
          <button className="view-cart-button" onClick={() => setShowCart(true)}>
            Voir le panier ({cartItems.reduce((total, item) => total + item.quantity, 0)})
          </button>
        )}
      </div>
    </div>
  );
};

export default Menu;