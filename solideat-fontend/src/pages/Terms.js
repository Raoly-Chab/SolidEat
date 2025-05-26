// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Terms.css'; // Vous pouvez réutiliser le même CSS que pour la page Privacy
// import logo from '../logo.svg';

// function Terms() {
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
//             <h1>Conditions d'Utilisation</h1>
//             <p className="last-updated">Dernière mise à jour: 24 avril 2025</p>
//           </div>

//           <div className="privacy-section">
//             <h2>1. Acceptation des conditions</h2>
//             <p>
//               En accédant et en utilisant la plateforme SOLIDEAT, vous acceptez d'être lié par les présentes 
//               conditions d'utilisation, toutes les lois et règlements applicables, et vous acceptez que vous êtes 
//               responsable du respect des lois locales applicables. Si vous n'acceptez pas ces conditions, vous ne 
//               devez pas utiliser ou accéder à cette plateforme.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>2. Présentation du service</h2>
//             <p>
//               SOLIDEAT est une plateforme solidaire qui vise à lutter contre la précarité alimentaire et le 
//               gaspillage. Notre service met en relation des donateurs (particuliers, restaurateurs, commerçants) 
//               avec des bénéficiaires (associations, personnes en situation de précarité) pour faciliter le don 
//               alimentaire.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>3. Création de compte et responsabilité</h2>
//             <p>
//               Pour utiliser pleinement notre service, vous devez créer un compte SOLIDEAT. Vous êtes responsable 
//               de maintenir la confidentialité de votre compte et mot de passe, ainsi que de restreindre l'accès à 
//               votre ordinateur. Vous acceptez d'assumer la responsabilité de toutes les activités qui se produisent 
//               sous votre compte ou mot de passe.
//             </p>
//             <p>
//               Vous vous engagez à fournir des informations exactes, à jour et complètes lors de la création de votre 
//               compte et à les maintenir à jour. SOLIDEAT se réserve le droit de suspendre ou de résilier votre compte 
//               si vous fournissez des informations inexactes, obsolètes ou incomplètes.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>4. Utilisation du service</h2>
//             <h3>4.1 Usage autorisé</h3>
//             <p>
//               Vous vous engagez à utiliser notre plateforme uniquement à des fins légales et conformément aux 
//               présentes conditions. Vous acceptez de ne pas utiliser la plateforme :
//             </p>
//             <ul>
//               <li>D'une manière qui pourrait désactiver, surcharger ou endommager le site</li>
//               <li>Pour toute activité frauduleuse ou illégale</li>
//               <li>Pour harceler, abuser ou nuire à d'autres utilisateurs</li>
//               <li>Pour collecter ou suivre les informations personnelles d'autres utilisateurs</li>
//             </ul>

//             <h3>4.2 Contributions des utilisateurs</h3>
//             <p>
//               En publiant du contenu sur notre plateforme, vous garantissez que :
//             </p>
//             <ul>
//               <li>Vous êtes propriétaire du contenu ou avez le droit de l'utiliser et de nous accorder les droits</li>
//               <li>Le contenu est exact et non trompeur</li>
//               <li>Le contenu ne viole pas les droits de tiers</li>
//               <li>Le contenu ne contient pas de virus ou autres logiciels malveillants</li>
//             </ul>
//           </div>

//           <div className="privacy-section">
//             <h2>5. Dons alimentaires</h2>
//             <p>
//               Les donateurs s'engagent à proposer uniquement des aliments propres à la consommation, respectant 
//               les normes d'hygiène et de sécurité alimentaire. Les aliments périmés ou en mauvais état ne doivent 
//               pas être proposés sur la plateforme.
//             </p>
//             <p>
//               SOLIDEAT sert uniquement d'intermédiaire entre donateurs et bénéficiaires et ne peut être tenu 
//               responsable de la qualité des aliments échangés. Nous encourageons tous les utilisateurs à vérifier 
//               la qualité des produits avant consommation.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>6. Limitation de responsabilité</h2>
//             <p>
//               SOLIDEAT et ses administrateurs, dirigeants, employés et bénévoles ne seront pas tenus responsables 
//               envers vous ou tout tiers pour tout dommage direct, indirect, consécutif, exemplaire, accessoire ou 
//               punitif, y compris la perte de profit, résultant de votre utilisation de la plateforme ou de tout 
//               contenu ou autre matériel disponible sur ou via la plateforme.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>7. Propriété intellectuelle</h2>
//             <p>
//               Le contenu de la plateforme SOLIDEAT, y compris, mais sans s'y limiter, les textes, graphiques, logos, 
//               icônes, images, clips audio, téléchargements numériques et compilations de données, est la propriété 
//               de SOLIDEAT ou de ses fournisseurs de contenu et est protégé par les lois françaises et internationales 
//               sur le droit d'auteur.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>8. Modification des conditions</h2>
//             <p>
//               SOLIDEAT se réserve le droit de modifier ces conditions d'utilisation à tout moment. Les modifications 
//               entrent en vigueur dès leur publication sur la plateforme. Votre utilisation continue de la plateforme 
//               après la publication des modifications constitue votre acceptation de ces modifications.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>9. Droit applicable et juridiction</h2>
//             <p>
//               Ces conditions d'utilisation sont régies par et interprétées conformément aux lois françaises. Tout 
//               litige relatif à ces conditions sera soumis à la compétence exclusive des tribunaux français.
//             </p>
//           </div>

//           <div className="privacy-section">
//             <h2>10. Contact</h2>
//             <p>
//               Pour toute question concernant ces conditions d'utilisation, veuillez nous contacter à :
//             </p>
//             <div className="contact-info">
//               <p>SOLIDEAT</p>
//               <p>15 Rue de la Solidarité</p>
//               <p>75000 Paris, France</p>
//               <p>Email: <a href="mailto:contact@solideat.org" className="email-link">contact@solideat.org</a></p>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Pied de page */}
//       <footer className="privacy-footer">
//         <div className="footer-content">
//           <div className="footer-links">
//             <Link to="/terms" className="footer-link active">Conditions d'utilisation</Link>
//             <Link to="/privacy" className="footer-link">Politique de confidentialité</Link>
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

// export default Terms;