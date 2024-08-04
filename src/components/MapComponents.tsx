import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple } from 'leaflet';

const MapComponent: React.FC = () => {
  const center: LatLngTuple = [3.607730, 98.749984];

  // Gantikan koordinat berikut dengan koordinat sebenarnya dari Overpass Turbo
  const polygonCoordinates: LatLngTuple[] = [
    // [3.6111, 98.7456],
    // [3.6122, 98.7467],
    // [3.6133, 98.7478],
    // [3.6144, 98.7489],
    // [3.6155, 98.7500],
    // [3.6166, 98.7511],
    [3.599137, 98.738714],
    [3.604152, 98.738880],
    [3.605357, 98.738675],
    [3.605368, 98.738463],
    [3.6128779,98.7389463],
    [3.616703, 98.737136],
    [3.6170585,98.7368385],
    [3.616406, 98.740495],
    [3.616402, 98.744428],
    [3.616656, 98.744354],
    [3.616824, 98.743725],
    [3.617054, 98.743513],
    [3.617409, 98.743124],
    [3.618062, 98.743088],
    [3.618715, 98.743338],
    [3.619129, 98.743330],
    [3.619372, 98.744397],
    [3.619045, 98.744400],
    [3.617991, 98.744346],
    [3.617672, 98.744228],
    [3.617407, 98.744531],
    [3.617530, 98.744292],
    [3.617118, 98.749139],
    [3.617045, 98.751467],
    [3.617367, 98.751536],
    [3.617314, 98.753731],
    [3.617383, 98.753789],
    [3.617195, 98.762577],
    [3.616481, 98.762268],
    [3.616199, 98.762655],
    [3.614351, 98.761651],
    [3.607238, 98.757269],
    [3.604152, 98.757088],
    [3.600084, 98.755093],
    [3.600220, 98.753497],
    [3.599301, 98.752469],
    [3.599281, 98.751315],
    [3.598597, 98.751244],
    [3.598670, 98.749885],
    [3.598610, 98.749319],
    [3.599446, 98.749325],
    [3.599440, 98.748291],
    [3.599213, 98.748098],
    [3.599618, 98.745807],
    [3.599854, 98.745163],
    [3.600924, 98.744906],
    [3.602348, 98.744788],
    [3.603516, 98.745024],
    [3.604436, 98.745410],
    [3.605047, 98.745131],
    [3.605207, 98.742878],
    [3.604598, 98.742915],
    [3.603928, 98.742818],
    [3.603267, 98.742526],
    [3.602440, 98.742296],
    [3.601631, 98.741974],
    [3.601264, 98.741882],
    [3.600965, 98.741777],
    [3.600229, 98.741627],
    [3.599610, 98.741105],
    [3.598577, 98.741068],
    [3.598611, 98.738792],


    
    // [3.6188, 98.7533],
    // [3.6199, 98.7544],
    // [3.6200, 98.7555],
    // Tambahkan semua titik koordinat yang diperlukan untuk membentuk batas desa
  ];


  const customIcon = L.divIcon({
    html: `<div style="text-align: center;">
             <img src="./public/images/logodeliserdang.png" alt="marker" style="width: 25px; height: 21px;" />
             <div>Kepala Desa</div>
           </div>`,
    iconSize: [25, 21],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={customIcon}>
        <Popup>
          Kantor Kepala Desa Bandar Khalipah<br />
          Coordinates: {center[0]}, {center[1]}
        </Popup>
      </Marker>
      <Polygon
        positions={polygonCoordinates}
        pathOptions={{
          color: 'green',
          fillColor: 'green',
          fillOpacity: 0.4,
        }}
      />
    </MapContainer>
  );
};

export default MapComponent;  