import React, { useState } from 'react';
import './App.css';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '/vite.svg';
// // import './Navbar.css';

// const Navbar: React.FC = () => {
//   return (
//     <nav>
//       <div className="logo">
//         <a href="/">
//           <img src={viteLogo} alt="Vite Logo" />
//         </a>
//         <a href="/">
//           <img src={reactLogo} alt="React Logo" />
//         </a>
//       </div>
//       <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="./pages/abouts">About</a></li>
//         <li><a href="/services">Services</a></li>
//         <li><a href="/contact">Contact</a></li>
//         <li><a href="">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

const Navbar: React.FC = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [advantagesOpen, setAdvantagesOpen] = useState(false);

  return (
    <div className="landing-page">
      <header>
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">
              <img src="./public/images/logodeliserdang.png" alt="Logo" />
            </a>
          </div>
          <ul className="links">
            <li><a href="#">Beranda</a></li>
            <li className="dropdown">
              <a href="#" onClick={() => setAboutOpen(!aboutOpen)}>Tentang Desa</a>
              {aboutOpen && (
                <ul className="dropdown-menu">
                  <li><a href="./pages/abouts">Visi & Misi</a></li>
                  <li><a href="#">Struktur Organisasi</a></li>
                </ul>
              )}
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => setAdvantagesOpen(!advantagesOpen)}>Keunggulan Desa</a>
              {advantagesOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#">Wisata</a></li>
                  <li><a href="#">Produk</a></li>
                  <li><a href="#">Kesenian</a></li>
                </ul>
              )}
            </li>
            <li><a href="#">Sejarah Desa</a></li>
            <li><a href="#">Desa Bandar Khalipah</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

