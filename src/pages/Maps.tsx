import React from 'react';
import MapComponent from '../components/MapComponents';
import '../Map.css';

const Maps: React.FC = () => {
  return (
    <div className="map-page">
      <h1>Denah Desa</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum veniam inventore necessitatibus ad mollitia similique temporibus ex, illum velit est corrupti voluptas eius nostrum fugiat! Distinctio, beatae? Perspiciatis, voluptate!</p>
    <div className="map">
    <MapComponent /> {/* Use the MapComponent here */}
  </div>
  </div>
  );
};

export default Maps;
