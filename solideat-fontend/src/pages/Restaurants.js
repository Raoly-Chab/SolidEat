import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Restaurants.css';

// Fonction composant Restaurants amélioré
const Restaurants = () => {
  // États pour gérer les données et les filtres
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [scrollY, setScrollY] = useState(0);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const navigate = useNavigate();

  const goToMenu = (restaurantId) => {
    navigate(`/menu/${restaurantId}`);
  };
  
  // Références pour les animations au scroll
  const fadingRefs = useRef([]);
  fadingRefs.current = [];

  // Ajouter des références pour les animations au scroll
  const addToFadingRefs = (el) => {
    if (el && !fadingRefs.current.includes(el)) {
      fadingRefs.current.push(el);
    }
  };

  // Chargement des données au montage du composant
  useEffect(() => {
    setLoading(true);
    // Simule un chargement asynchrone
    setTimeout(() => {
      const restaurantData = getRestaurantsData();
      setRestaurants(restaurantData);
      setLoading(false);
    }, 800);
    
    // Gestionnaire de scroll pour les animations
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Animation au scroll
      fadingRefs.current.forEach(el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.85;
        
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
  }, []);
  
  // Effet pour initialiser les animations après chargement
  useEffect(() => {
    if (!loading) {
      // Activer les animations pour les éléments visibles initialement
      setTimeout(() => {
        fadingRefs.current.forEach(el => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight * 0.85;
          
          if (isVisible) {
            el.classList.add('visible');
          }
        });
      }, 100);
    }
  }, [loading]);

  // Fonction pour générer les données des restaurants
  const getRestaurantsData = () => {
    const restaurantsData = [
      { code: '75014', name: 'BEAUNIER', address: '43, RUE BEAUNIER', city: 'PARIS', coordinates: '48.824459, 2.327765', type: 'E' },
      { code: '75005', name: 'MOUFFETARD', address: '20, RUE ORTOLAN', city: 'PARIS', coordinates: '48.843234, 2.349667', type: 'E' },
      { code: '75002', name: 'SAINT-SAUVEUR', address: '8, RUE SAINT-SAUVEUR', city: 'PARIS', coordinates: '48.865929, 2.349476', type: 'E' },
      { code: '75002', name: 'GRAMONT', address: '28, RUE GRAMONT', city: 'PARIS', coordinates: '48.870961, 2.33703', type: 'E' },
      { code: '75013', name: 'TOLBIAC', address: '166, RUE DE TOLBIAC', city: 'PARIS', coordinates: '48.826031, 2.352555', type: 'E' },
      { code: '75017', name: 'EPINETTES', address: '51, RUE DES EPINETTES', city: 'PARIS', coordinates: '48.896416, 2.323344', type: 'S' },
      { code: '75010', name: 'VERDUN', address: '14, AVENUE DE VERDUN', city: 'PARIS', coordinates: '48.876266, 2.361942', type: 'E' },
      { code: '75004', name: 'AVE MARIA', address: '4, RUE DE L\'AVE MARIA', city: 'PARIS', coordinates: '48.852746, 2.360534', type: 'E' },
      { code: '75008', name: 'MARCHE DE L\'EUROPE', address: '11, RUE MALLEVILLE', city: 'PARIS', coordinates: '48.877284, 2.313452', type: 'S' },
      { code: '75015', name: 'LA QUINTINIE', address: '18, RUE BARGUE', city: 'PARIS', coordinates: '48.839301, 2.30718', type: 'E' },
      { code: '75003', name: 'AU MAIRE', address: '2, RUE AU MAIRE', city: 'PARIS', coordinates: '48.864445, 2.357714', type: 'E' },
      { code: '75018', name: 'JOSEPH DE MAISTRE', address: '88, RUE JOSEPH DE MAISTRE', city: 'PARIS', coordinates: '48.89289, 2.330458', type: 'E' },
      { code: '75009', name: 'NAVARIN', address: '12, RUE DE NAVARIN', city: 'PARIS', coordinates: '48.879688, 2.338996', type: 'E' },
      { code: '75013', name: 'ARAGO', address: '49, BOULEVARD ARAGO', city: 'PARIS', coordinates: '48.834785, 2.345384', type: 'E' },
      { code: '75012', name: 'SAINT-ELOI', address: '10, RUE EUGENIE EBOUE', city: 'PARIS', coordinates: '48.845593, 2.38601', type: 'S' },
      { code: '75016', name: 'JOUVENET', address: '23, RUE JOUVENET', city: 'PARIS', coordinates: '48.842528, 2.265355', type: 'E' },
      { code: '75012', name: 'TOURELLES', address: '22, RUE DU CHAFFAULT', city: 'PARIS', coordinates: '48.845159, 2.415046', type: 'E' },
      { code: '75004', name: 'AU PETIT REMOULEUR', address: '1, RUE DE FOURCY', city: 'PARIS', coordinates: '48.854622, 2.358803', type: 'E' },
      { code: '75014', name: 'ARBUSTES', address: '9, RUE DES ARBUSTES', city: 'PARIS', coordinates: '48.828431, 2.309284', type: 'E' },
      { code: '75018', name: 'CAULAINCOURT', address: '102, RUE DE CAULAINCOURT', city: 'PARIS', coordinates: '48.889552, 2.339419', type: 'E' }
    ];

    // Enrichir les données avec des informations supplémentaires
    return restaurantsData.map((restaurant, index) => {
      const typeLabel = restaurant.type === 'E' ? 'Établissement' : 'Solidaire';
      const cuisineTypes = ['Cuisine Française', 'Traditionnelle', 'Bistro Parisien', 'Locale', 'Gastronomique'];
      
      // Générer une description pour chaque restaurant
      const descriptions = [
        "Ce charmant restaurant offre une expérience culinaire authentique dans un cadre chaleureux. Notre chef utilise des produits frais et locaux pour créer des plats délicieux et abordables.",
        "Un lieu convivial où les saveurs de la cuisine française traditionnelle sont mises à l'honneur. Idéal pour un déjeuner rapide ou un dîner entre amis.",
        "Notre restaurant propose une cuisine simple et savoureuse dans une ambiance détendue. Profitez d'un repas équilibré préparé avec soin par notre équipe.",
        "Un espace accueillant où chacun peut déguster des plats maison à prix raisonnables. Notre priorité est de vous offrir un moment de détente et de plaisir gustatif."
      ];
      
      // Générer des caractéristiques spécifiques pour chaque restaurant
      const generateFeatures = () => {
        const allFeatures = [
          "Accessible PMR", "Terrasse", "Climatisé", "Menu enfant", 
          "Végétarien", "Sans gluten", "Service rapide", "Wifi gratuit"
        ];
        
        // Sélectionner aléatoirement 3 à 5 caractéristiques
        const count = Math.floor(Math.random() * 3) + 3;
        const selectedFeatures = [];
        
        while (selectedFeatures.length < count) {
          const feature = allFeatures[Math.floor(Math.random() * allFeatures.length)];
          if (!selectedFeatures.includes(feature)) {
            selectedFeatures.push(feature);
          }
        }
        
        return selectedFeatures;
      };
      
      // Générer des plats spécifiques pour chaque restaurant
      const generateMenuItems = () => {
        const starters = ["Soupe à l'oignon", "Salade de chèvre chaud", "Terrine maison", "Assiette de crudités"];
        const mains = ["Poulet rôti aux herbes", "Bœuf bourguignon", "Poisson du jour", "Tarte aux légumes"];
        const desserts = ["Crème brûlée", "Tarte Tatin", "Mousse au chocolat", "Fruit de saison"];
        
        return {
          starters: [
            starters[Math.floor(Math.random() * starters.length)],
            starters[Math.floor(Math.random() * starters.length)]
          ],
          mains: [
            mains[Math.floor(Math.random() * mains.length)],
            mains[Math.floor(Math.random() * mains.length)]
          ],
          desserts: [
            desserts[Math.floor(Math.random() * desserts.length)],
            desserts[Math.floor(Math.random() * desserts.length)]
          ]
        };
      };
      
      return {
        ...restaurant,
        id: index + 1,
        image: `https://picsum.photos/800/500?random=${index}`,
        typeLabel,
        rating: (Math.random() * 1 + 4).toFixed(1),
        reviewCount: Math.floor(Math.random() * 200) + 50,
        cuisineType: cuisineTypes[Math.floor(Math.random() * cuisineTypes.length)],
        priceRange: restaurant.type === 'S' ? '€' : '€€',
        openHours: '11h30-14h30 • 18h30-22h00',
        promotion: Math.random() > 0.7 ? '-20% sur le menu' : null,
        specialOffer: Math.random() > 0.8 ? 'Menu du jour' : null,
        isFavorite: false,
        district: restaurant.code.substring(0, 5),
        tags: [typeLabel],
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        features: generateFeatures(),
        menu: generateMenuItems(),
        // Ajouter des fonctionnalités liées aux dons pour les restaurants solidaires
        donationNeeds: restaurant.type === 'S' ? [
          "Dons alimentaires",
          "Équipement de cuisine",
          "Bénévolat"
        ] : [],
        acceptsDonations: restaurant.type === 'S'
      };
    });
  };

  // Filtrer les restaurants selon les critères
  const filteredRestaurants = restaurants.filter(restaurant => {
    // Appliquer le filtre
    if (filter !== 'all' && restaurant.type !== filter) {
      return false;
    }
    
    // Appliquer la recherche
    if (searchTerm && !restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !restaurant.address.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !restaurant.district.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Fonction pour mettre à jour l'état favori d'un restaurant
  const toggleFavorite = (id) => {
    setRestaurants(
      restaurants.map(restaurant => 
        restaurant.id === id 
          ? { ...restaurant, isFavorite: !restaurant.isFavorite } 
          : restaurant
      )
    );
  };

  // Gestionnaires d'événements
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };
  
  // Fonction pour ouvrir le modal de don
  const openDonationModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowDonationModal(true);
  };
  
  // Fonction pour ouvrir le modal d'information
  const openInfoModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setShowInfoModal(true);
  };
  
  // Fonction pour fermer les modals
  const closeModals = () => {
    setShowDonationModal(false);
    setShowInfoModal(false);
  };

  // Afficher un état de chargement
  if (loading) {
    return (
      <div className="restaurants-loading">
        <div className="loading-spinner"></div>
        <p>Chargement des restaurants...</p>
      </div>
    );
  }

  // Rendu du composant
  return (
    <div className="restaurants-container">
      {/* Hero Banner */}
      <div className="restaurants-hero" style={{backgroundPosition: `center ${scrollY * 0.5}px`}}>
        <img 
          src="https://picsum.photos/1600/900?random=hero" 
          alt="Restaurants à Paris" 
          className="hero-image" 
        />
        <div className="hero-content">
          <h1>Restaurants CASVP à Paris</h1>
          <p>Découvrez notre sélection de restaurants à travers la capitale, offrant des repas de qualité à prix accessibles pour tous.</p>
          <button className="hero-button">Explorer nos restaurants</button>
        </div>
      </div>

      <div className="restaurants-main">
       

        {/* En-tête des restaurants */}
        <div className="restaurants-header" ref={addToFadingRefs} className="scroll-fade">
          <h2>Nos restaurants</h2>
          <p>Des établissements accueillants où savourer une cuisine de qualité, authentique et abordable</p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="search-filter-container">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              placeholder="Rechercher un restaurant, une adresse, un arrondissement..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="filter-options">
            <button 
              className={filter === 'all' ? 'active' : ''}
              onClick={() => handleFilterChange('all')}
            >
              Tous les restaurants
            </button>
            <button 
              className={filter === 'E' ? 'active' : ''}
              onClick={() => handleFilterChange('E')}
            >
              Établissements
            </button>
            <button 
              className={filter === 'S' ? 'active' : ''}
              onClick={() => handleFilterChange('S')}
            >
              Solidaires
            </button>
          </div>

          <div className="view-toggle">
            <button onClick={toggleViewMode}>
              {viewMode === 'grid' ? 'Vue liste' : 'Vue grille'}
            </button>
          </div>
        </div>

        {/* Liste des restaurants */}
        {filteredRestaurants.length === 0 ? (
          <div className="no-results">
            <p>Aucun restaurant ne correspond à votre recherche</p>
          </div>
        ) : (
          <div className={`restaurants-list ${viewMode}`}>
            {filteredRestaurants.map((restaurant, index) => (
              <div 
                key={restaurant.id} 
                className={`restaurant-card ${restaurant.promotion ? 'has-promotion' : ''}`}
                ref={addToFadingRefs}
              >
                <div className="restaurant-image">
                  <img src={restaurant.image} alt={restaurant.name} />
                  <button 
                    className={`favorite-btn ${restaurant.isFavorite ? 'active' : ''}`}
                    onClick={() => toggleFavorite(restaurant.id)}
                    aria-label={restaurant.isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
                  >
                    {restaurant.isFavorite ? '❤️' : '🤍'}
                  </button>
                  {restaurant.promotion && (
                    <span className="promotion-badge">{restaurant.promotion}</span>
                  )}
                  <div className={`type-badge ${restaurant.type === 'S' ? 'solidaire' : ''}`}>
                    {restaurant.typeLabel}
                  </div>
                </div>
                
                <div className="restaurant-details">
                  <div className="restaurant-header">
                    <h3>{restaurant.name}</h3>
                    <div className="restaurant-rating">
                      <span className="star-icon">⭐</span>
                      <span>{restaurant.rating}</span>
                      <span className="review-count">({restaurant.reviewCount})</span>
                    </div>
                  </div>
                  
                  <div className="restaurant-info">
                    <p className="cuisine-type">{restaurant.cuisineType} • {restaurant.priceRange}</p>
                    <p className="district">
                      <span className="info-icon">📍</span>
                      <span>{restaurant.district} - {restaurant.address}, {restaurant.city}</span>
                    </p>
                    <p className="opening-hours">
                      <span className="info-icon">🕒</span>
                      <span>{restaurant.openHours}</span>
                    </p>
                  </div>
                  
                  <div className="restaurant-description">
                    <p>{restaurant.description}</p>
                  </div>
                  
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
                 

                  <div className="restaurant-footer">
    <button className="book-button" onClick={() => openInfoModal(restaurant)}>Réserver</button>
    
    {restaurant.acceptsDonations ? (
      <button className="donate-button" onClick={() => openDonationModal(restaurant)}>Faire un don</button>
    ) : (
      <button className="menu-button" onClick={() => goToMenu(restaurant.id)}>Voir le menu</button>
    )}
  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
       
        {/* Pagination */}
        <div className="pagination">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>...</button>
          <button>Suivant</button>
        </div>
      </div>
      
    </div>
  );
};

export default Restaurants;