// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Privacy.css';
// import logo from '../logo.svg';

// function Privacy() {
//   return (
//     <div className="privacy-container">
//       {/* En-tête avec logo et navigation */}
//       <header className="privacy-header">
//         <div className="header-content">
//           <div className="logo-container">
//             <img src={logo} alt="SOLIDEAT Logo" className="header-logo" />
//             <h1 className="header-title">SOLIDEAT</h1>
//           </div>
//           <nav className="header-nav">
//             <Link to="/" className="nav-link">Accueil</Link>
//             <Link to="/login" className="nav-link">Connexion</Link>
//             <Link to="/register" className="nav-link">Inscription</Link>
//           </nav>
//         </div>
//       </header>

//       {/* Contenu principal */}
//       <main className="privacy-content">
//         <div className="privacy-container-inner">
//           <div className="privacy-header-section">
//             <h1>Politique de Confidentialité</h1>
//             <p className="last-updated">Dernière mise à jour: 24 avril 2025</p>
//           </div>

//           <div className="privacy-section">
//             <h2>1. Introduction</h2>
//             <p>
//               Chez SOLIDEAT, nous accordons une grande importance à la protection de vos données personnelles.
//               Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et
//               protégeons vos informations lorsque vous utilisez notre plateforme.
//             </p>
//             <p>
//               En utilisant les services de SOLIDEAT, vous acceptez les pratiques décrites dans cette politique.
//               Nous vous invitons à la lire attentivement pour comprendre nos pratiques concernant vos données personnelles.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>2. Informations que nous collectons</h2>
//             <h3>2.1 Informations que vous nous fournissez</h3>
//             <p>
//               Lorsque vous créez un compte SOLIDEAT, nous collectons des informations telles que votre nom,
//               prénom, adresse e-mail et mot de passe. Selon votre utilisation de notre plateforme, nous
//               pouvons également collecter d'autres informations comme votre adresse postale, numéro de téléphone
//               ou informations de paiement.
//             </p>

//             <h3>2.2 Informations collectées automatiquement</h3>
//             <p>
//               Lorsque vous utilisez notre plateforme, nous collectons automatiquement certaines informations
//               sur votre appareil et votre utilisation de nos services, notamment :
//             </p>
//             <ul>
//               <li>Informations sur l'appareil (type d'appareil, système d'exploitation, etc.)</li>
//               <li>Adresse IP et données de localisation approximative</li>
//               <li>Informations de navigation et d'utilisation de la plateforme</li>
//               <li>Cookies et technologies similaires</li>
//             </ul>
//           </div>

//           <div className="privacy-section">
//             <h2>3. Comment nous utilisons vos informations</h2>
//             <p>Nous utilisons vos informations pour les finalités suivantes :</p>
//             <ul>
//               <li>Fournir, maintenir et améliorer nos services</li>
//               <li>Traiter vos transactions et gérer votre compte</li>
//               <li>Communiquer avec vous concernant nos services</li>
//               <li>Vous envoyer des informations sur nos actions solidaires et événements</li>
//               <li>Assurer la sécurité de notre plateforme</li>
//               <li>Se conformer à nos obligations légales</li>
//             </ul>
//           </div>

//           <div className="privacy-section">
//             <h2>4. Partage des informations</h2>
//             <p>
//               Nous pouvons partager vos informations avec :
//             </p>
//             <ul>
//               <li>Nos partenaires associatifs et organisations bénéficiaires (uniquement avec votre consentement)</li>
//               <li>Nos prestataires de services qui nous aident à opérer notre plateforme</li>
//               <li>Les autorités publiques lorsque la loi l'exige</li>
//             </ul>
//             <p>
//               Nous ne vendons jamais vos données personnelles à des tiers pour des finalités commerciales.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>5. Protection des données</h2>
//             <p>
//               Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout
//               accès non autorisé, altération, divulgation ou destruction. Ces mesures incluent le chiffrement
//               des données, l'accès restreint aux informations personnelles et des audits de sécurité réguliers.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>6. Conservation des données</h2>
//             <p>
//               Nous conservons vos données personnelles aussi longtemps que nécessaire pour vous fournir nos
//               services ou pour respecter nos obligations légales. Lorsque vous supprimez votre compte, nous
//               supprimons ou anonymisons vos données dans un délai raisonnable, sauf si la loi nous oblige à
//               les conserver plus longtemps.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>7. Vos droits</h2>
//             <p>
//               Conformément à la législation applicable, vous disposez des droits suivants concernant vos données personnelles :
//             </p>
//             <ul>
//               <li>Droit d'accès et de rectification</li>
//               <li>Droit à l'effacement (« droit à l'oubli »)</li>
//               <li>Droit à la limitation du traitement</li>
//               <li>Droit d'opposition au traitement</li>
//               <li>Droit à la portabilité des données</li>
//               <li>Droit de retirer votre consentement à tout moment</li>
//             </ul>
//             <p>
//               Pour exercer ces droits, veuillez nous contacter à <a href="mailto:privacy@solideat.org" className="email-link">privacy@solideat.org</a>.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>8. Modifications de cette politique</h2>
//             <p>
//               Nous pouvons modifier cette politique de confidentialité de temps à autre. Nous vous informerons
//               de tout changement important en publiant la nouvelle politique sur notre plateforme et, si
//               nécessaire, en vous envoyant une notification par e-mail.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>9. Nous contacter</h2>
//             <p>
//               Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en
//               matière de données personnelles, veuillez nous contacter à :
//             </p>
//             <div className="contact-info">
//               <p>SOLIDEAT</p>
//               <p>15 Rue de la Solidarité</p>
//               <p>75000 Paris, France</p>
//               <p>Email: <a href="mailto:privacy@solideat.org" className="email-link">privacy@solideat.org</a></p>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Pied de page */}
//       <footer className="privacy-footer">
//         <div className="footer-content">
//           <div className="footer-links">
//             <Link to="/terms" className="footer-link">Conditions d'utilisation</Link>
//             <Link to="/privacy" className="footer-link active">Politique de confidentialité</Link>
//             <Link to="/contact" className="footer-link">Contact</Link>
//           </div>
//           <div className="footer-copyright">
//             <p>&copy; 2025 SOLIDEAT. Tous droits réservés.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Privacy;