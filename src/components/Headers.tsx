import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Headers: React.FC = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [advantagesOpen, setAdvantagesOpen] = useState(false);

  return (
    <div className="landing-page">
    <header>
        <div className="container">
          <div className="header-content">
            {/* <a href="#" className="logo"> */}
            <Link to="/" className="logo">
              <img src="./images/LogoDeliSerdang.png" alt="Logo" />
          </Link>
          </div>
          <ul className="links">
            <li><Link to="/">Beranda</Link></li>
            <li className="dropdown">
              <a href="#" onClick={() => setAboutOpen(!aboutOpen)}>Tentang Desa</a>
              {aboutOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/gambaran-umum">Gambaran Umum</Link></li>
                  <li><Link to="/struktur-organisasi">Struktur Organisasi</Link></li>
                </ul>
              )}
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => setAdvantagesOpen(!advantagesOpen)}>Keunggulan Desa</a>
              {advantagesOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/wisata">Wisata</Link></li>
                  <li><Link to="/produk">Produk</Link></li>
                  <li><Link to="/kesenian">Kesenian</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/sejarah-desa">Sejarah Desa</Link></li>
            <li><Link to="/peta-desa">Desa Bandar Khalipah</Link></li>
          </ul>
        </div>
      </header>
      </div>
  );
};

export default Headers;
