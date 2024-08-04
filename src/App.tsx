import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Headers';
import HomePage from './pages/Homes';
import AboutPage from './pages/Abouts';
import OrgaPage from './pages/Organization'
import DestiPage from './pages/Destination'
import ProductPage from './pages/Product'
import CraftPage from './pages/Craft'
import HistoryPage from './pages/History'
import MapPage from './pages/Maps'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gambaran-umum" element={<AboutPage />} />
        <Route path="/struktur-organisasi" element={<OrgaPage />} />
        <Route path="/wisata" element={<DestiPage />} />
        <Route path="/produk" element={<ProductPage />} />
        <Route path="/kesenian" element={<CraftPage />} />
        <Route path="/sejarah-desa" element={<HistoryPage />} />
        <Route path="/peta-desa" element={<MapPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </div>
  );
};

export default App;
