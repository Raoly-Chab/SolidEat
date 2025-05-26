import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  // Chargement des données au montage du composant
  useEffect(() => {
    setLoading(true);
    // Simule un chargement asynchrone
    setTimeout(() => {
      const restaurantData = getRestaurantsData();
      setRestaurants(restaurantData);
      setFilteredRestaurants(restaurantData);
      setLoading(false);
    }, 800);
  }, []);

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
      
      const descriptions = [
        "Ce charmant restaurant offre une expérience culinaire authentique dans un cadre chaleureux. Notre chef utilise des produits frais et locaux pour créer des plats délicieux et abordables.",
        "Un lieu convivial où les saveurs de la cuisine française traditionnelle sont mises à l'honneur. Idéal pour un déjeuner rapide ou un dîner entre amis.",
        "Notre restaurant propose une cuisine simple et savoureuse dans une ambiance détendue. Profitez d'un repas équilibré préparé avec soin par notre équipe.",
        "Un espace accueillant où chacun peut déguster des plats maison à prix raisonnables. Notre priorité est de vous offrir un moment de détente et de plaisir gustatif."
      ];
      
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
        acceptsDonations: restaurant.type === 'S'
      };
    });
  };

  // Convertir les coordonnées pour la carte SVG (adapte pour une carte 800x600)
  const convertCoordinates = (coordString) => {
    const [lat, lng] = coordString.split(', ').map(coord => parseFloat(coord));
    // Paris bounds approximate:
    // Min Lat: 48.815, Max Lat: 48.902
    // Min Lng: 2.224, Max Lng: 2.469

    const mapWidth = 800;
    const mapHeight = 600;

    const minLat = 48.815;
    const maxLat = 48.902;
    const minLng = 2.224;
    const maxLng = 2.469;

    // Normalize longitude (x-axis)
    const normalizedX = ((lng - minLng) / (maxLng - minLng)) * mapWidth;
    // Normalize latitude (y-axis) - inverted for SVG coordinate system (y increases downwards)
    const normalizedY = ((maxLat - lat) / (maxLat - minLat)) * mapHeight;

    return { x: Math.max(0, Math.min(mapWidth, normalizedX)), y: Math.max(0, Math.min(mapHeight, normalizedY)) };
  };

  // Filtrer les restaurants par type
  const filterRestaurantsByType = (type) => {
    setActiveFilter(type);
    if (type === 'all') {
      setFilteredRestaurants(restaurants);
    } else {
      setFilteredRestaurants(restaurants.filter(restaurant => restaurant.type === type));
    }
    setSelectedRestaurant(null); // Clear selected restaurant when filter changes
  };

  // Gérer le clic sur un marqueur
  const handleMarkerClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  // Define consistent color palette
  const primaryColor = '#667eea'; // A shade of blue/purple
  const secondaryColor = '#764ba2'; // A darker shade of blue/purple
  const accentGreen = '#28a745'; // For establishments
  const accentRed = '#dc3545'; // For solidarity restaurants
  const textColor = '#333';
  const lightBg = '#f8f9fa';
  const white = '#fff';

  // Afficher un état de chargement
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '400px',
        fontSize: '18px',
        color: textColor
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: `4px solid ${lightBg}`,
          borderTop: `4px solid ${primaryColor}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '20px'
        }}></div>
        <p>Chargement de la carte...</p>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div style={{
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        color: white,
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 10px 0', fontWeight: 'bold' }}>SOLIDEAT</h1>
        <h2 style={{ fontSize: '1.5rem', margin: '0 0 20px 0', fontWeight: 'normal' }}>Découvrez les restaurants solidaires à Paris</h2>
        <p style={{ fontSize: '1.1rem', margin: '0 0 30px 0', opacity: 0.9 }}>Plateforme solidaire pour les Restaurants du Cœur et l'aide alimentaire</p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/restaurants" style={{ textDecoration: 'none' }}>
            <button style={{
              background: white,
              color: primaryColor,
              border: 'none',
              padding: '12px 24px',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Voir tous les restaurants
            </button>
          </Link>
          <button style={{
            background: 'transparent',
            color: white,
            border: `2px solid ${white}`,
            padding: '12px 24px',
            borderRadius: '25px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {e.target.style.background = white; e.target.style.color = primaryColor;}}
          onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = white;}}
          onClick={() => document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' })}
          >
            Explorer la carte
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div id="map-section" style={{ padding: '60px 20px', background: lightBg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: textColor }}>Carte des restaurants</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '30px' }}>Découvrez les restaurants SOLIDEAT près de chez vous</p>
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
              <button 
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeFilter === 'all' ? primaryColor : '#e9ecef',
                  color: activeFilter === 'all' ? white : textColor
                }}
                onClick={() => filterRestaurantsByType('all')}
              >
                Tous les restaurants ({restaurants.length})
              </button>
              <button 
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeFilter === 'E' ? accentGreen : '#e9ecef',
                  color: activeFilter === 'E' ? white : textColor
                }}
                onClick={() => filterRestaurantsByType('E')}
              >
                Établissements ({restaurants.filter(r => r.type === 'E').length})
              </button>
              <button 
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeFilter === 'S' ? accentRed : '#e9ecef',
                  color: activeFilter === 'S' ? white : textColor
                }}
                onClick={() => filterRestaurantsByType('S')}
              >
                Solidaires ({restaurants.filter(r => r.type === 'S').length})
              </button>
            </div>
          </div>
          
          <div style={{ 
            position: 'relative', 
            background: white, 
            borderRadius: '15px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            {/* Carte SVG interactive */}
            <div style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden' }}>
              {/* Fond de carte réel de Paris via OpenStreetMap - Replaced with Mapbox for a working example */}
              <img 
                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/2.3522,48.8566,11,0/800x600?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                alt="Carte de Paris"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'brightness(0.9) contrast(1.1)'
                }}
                onError={(e) => {
                  // Fallback vers une carte stylisée si l'image ne charge pas
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              
              {/* Carte SVG de fallback */}
              <svg 
                width="100%" 
                height="600" 
                viewBox="0 0 800 600" 
                style={{ display: 'none', position: 'absolute', top: 0, left: 0 }}
              >
                {/* Fond de carte stylisé */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0e0e0" strokeWidth="1"/>
                  </pattern>
                  <radialGradient id="parisGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f0f8ff" />
                    <stop offset="100%" stopColor="#e6f3ff" />
                  </radialGradient>
                </defs>
                
                {/* Fond principal */}
                <rect width="800" height="600" fill="url(#parisGradient)"/>
                <rect width="800" height="600" fill="url(#grid)"/>
                
                {/* Simulation de la Seine */}
                <path d="M 100 250 Q 200 280 300 260 Q 400 240 500 270 Q 600 300 700 280" 
                      fill="none" stroke="#4a90e2" strokeWidth="8" opacity="0.6"/>
                <path d="M 100 250 Q 200 280 300 260 Q 400 240 500 270 Q 600 300 700 280" 
                      fill="none" stroke="#ffffff" strokeWidth="4" opacity="0.8"/>
                
                {/* Parcs et espaces verts */}
                <ellipse cx="150" cy="150" rx="60" ry="40" fill="#90EE90" opacity="0.4"/>
                <ellipse cx="650" cy="180" rx="80" ry="50" fill="#90EE90" opacity="0.4"/>
                <ellipse cx="550" cy="450" rx="70" ry="45" fill="#90EE90" opacity="0.4"/>
                
                {/* Routes principales */}
                <line x1="0" y1="300" x2="800" y2="300" stroke="#ddd" strokeWidth="3"/>
                <line x1="400" y1="0" x2="400" y2="600" stroke="#ddd" strokeWidth="3"/>
                <line x1="200" y1="0" x2="600" y2="600" stroke="#ddd" strokeWidth="2"/>
                <line x1="600" y1="0" x2="200" y2="600" stroke="#ddd" strokeWidth="2"/>
                
                {/* Zones d'arrondissements */}
                <circle cx="400" cy="300" r="200" fill="none" stroke={`${primaryColor}4D`} strokeWidth="2" strokeDasharray="5,5"/>
                <circle cx="400" cy="300" r="150" fill="none" stroke={`${primaryColor}33`} strokeWidth="1" strokeDasharray="3,3"/>
                <circle cx="400" cy="300" r="100" fill="none" stroke={`${primaryColor}1A`} strokeWidth="1" strokeDasharray="2,2"/>
                
                {/* Labels des arrondissements */}
                <text x="400" y="150" textAnchor="middle" fontSize="12" fill="#666" fontWeight="bold">Centre</text>
                <text x="250" y="200" textAnchor="middle" fontSize="10" fill="#888">16e</text>
                <text x="550" y="200" textAnchor="middle" fontSize="10" fill="#888">18e</text>
                <text x="300" y="400" textAnchor="middle" fontSize="10" fill="#888">14e</text>
                <text x="500" y="400" textAnchor="middle" fontSize="10" fill="#888">12e</text>
              </svg>
              
              {/* Marqueurs des restaurants */}
              <svg 
                width="100%" 
                height="600" 
                viewBox="0 0 800 600" 
                style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
              >
              {/* Marqueurs des restaurants */}
              {filteredRestaurants.map((restaurant) => {
                const coords = convertCoordinates(restaurant.coordinates);
                const isSelected = selectedRestaurant?.id === restaurant.id;
                
                return (
                  <g key={restaurant.id} style={{ pointerEvents: 'all' }}>
                    {/* Effet de selection */}
                    {isSelected && (
                      <circle 
                        cx={coords.x} 
                        cy={coords.y} 
                        r="25" 
                        fill={`${primaryColor}4D`} // Use primaryColor with opacity
                        stroke={`${primaryColor}99`} // Use primaryColor with opacity
                        strokeWidth="3"
                      />
                    )}
                    
                    {/* Marqueur principal */}
                    <circle
                      cx={coords.x}
                      cy={coords.y}
                      r="15"
                      fill={restaurant.type === 'S' ? accentRed : accentGreen}
                      stroke={white}
                      strokeWidth="4"
                      style={{ 
                        cursor: 'pointer',
                        filter: isSelected ? 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))' : 'drop-shadow(0 3px 6px rgba(0,0,0,0.3))',
                        transform: isSelected ? 'scale(1.3)' : 'scale(1)',
                        transformOrigin: `${coords.x}px ${coords.y}px`,
                        transition: 'all 0.2s ease'
                      }}
                      onClick={() => handleMarkerClick(restaurant)}
                      onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                      onMouseOut={(e) => e.target.style.transform = isSelected ? 'scale(1.3)' : 'scale(1)'}
                    />
                    
                    {/* Icône du marqueur */}
                    <text
                      x={coords.x}
                      y={coords.y + 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="10"
                      fill={white}
                      fontWeight="bold"
                      style={{ pointerEvents: 'none' }}
                    >
                      {restaurant.type === 'S' ? '♥' : '🍽'}
                    </text>
                  </g>
                );
              })}
            </svg>
            </div>
            
            {/* Panel d'informations du restaurant sélectionné */}
            {selectedRestaurant && (
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: white,
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                maxWidth: '300px',
                zIndex: 10,
                animation: 'slideIn 0.3s ease'
              }}>
                <button 
                  onClick={() => setSelectedRestaurant(null)}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#999'
                  }}
                >
                  ×
                </button>
                
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.3rem', color: textColor }}>
                  {selectedRestaurant.name}
                </h3>
                <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '0.9rem' }}>
                  {selectedRestaurant.address}, {selectedRestaurant.city}
                </p>
                
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px' }}>
                  <span style={{
                    background: selectedRestaurant.type === 'S' ? accentRed : accentGreen,
                    color: white,
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    {selectedRestaurant.typeLabel}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>
                    ⭐ {selectedRestaurant.rating} ({selectedRestaurant.reviewCount} avis)
                  </span>
                </div>
                
                <p style={{ margin: '0 0 15px 0', fontSize: '0.9rem', color: '#555', lineHeight: 1.4 }}>
                  {selectedRestaurant.description.substring(0, 120)}...
                </p>
                
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <Link to={`/menu/${selectedRestaurant.id}`} style={{ textDecoration: 'none' }}>
                    <button style={{
                      background: primaryColor,
                      color: white,
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}>
                      Voir le menu
                    </button>
                  </Link>
                  
                  {selectedRestaurant.acceptsDonations && (
                    <button style={{
                      background: accentGreen, // Use accentGreen for donation button
                      color: white,
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}>
                      Faire un don
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Légende */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            marginTop: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: accentGreen,
                border: `3px solid ${white}`,
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}></div>
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: textColor }}>Établissements</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: accentRed,
                border: `3px solid ${white}`,
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}></div>
              <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: textColor }}>Restaurants Solidaires</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Restaurants Section */}
      <div style={{ padding: '60px 20px', background: white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', color: textColor }}>
            Restaurants à découvrir
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            marginBottom: '40px'
          }}>
            {restaurants.slice(0, 3).map(restaurant => (
              <Link to={`/menu/${restaurant.id}`} key={restaurant.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  background: white,
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '1.3rem', color: textColor }}>
                      {restaurant.name}
                    </h3>
                    <p style={{ margin: '0 0 5px 0', color: '#666', fontSize: '0.9rem' }}>
                      {restaurant.district} - {restaurant.address}
                    </p>
                    <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '0.9rem' }}>
                      {restaurant.typeLabel} • {restaurant.cuisineType}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span>⭐</span>
                        <span style={{ fontWeight: 'bold' }}>{restaurant.rating}</span>
                      </div>
                      <button style={{
                        background: primaryColor,
                        color: white,
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}>
                        Découvrir
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/restaurants" style={{ textDecoration: 'none' }}>
              <button style={{
                background: primaryColor,
                color: white,
                border: 'none',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                Voir tous les restaurants
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Info Section */}
      <div style={{ padding: '60px 20px', background: lightBg }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px'
          }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🍽️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: textColor }}>Cuisine de qualité</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Des repas équilibrés et savoureux préparés avec des produits frais
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💖</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: textColor }}>Solidarité</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Soutenez les restaurants solidaires par vos dons et votre présence
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👨‍👩‍👧‍👦</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: textColor }}>Pour tous</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Des espaces accueillants et accessibles à tous les budgets
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div style={{
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
        color: white,
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Rejoignez SOLIDEAT</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9 }}>
          Créez un compte pour réserver des tables et faire des dons aux restaurants solidaires
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <button style={{
              background: white,
              color: primaryColor,
              border: 'none',
              padding: '12px 24px',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              S'inscrire
            </button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button style={{
              background: 'transparent',
              color: white,
              border: `2px solid ${white}`,
              padding: '12px 24px',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {e.target.style.background = white; e.target.style.color = primaryColor;}}
            onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = white;}}
            >
              Se connecter
            </button>
          </Link>
        </div>
      </div>
      
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;