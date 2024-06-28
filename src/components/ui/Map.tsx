'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import pinImg from '@/public/assets/images/pin.png';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const customIcon = new L.Icon({
  iconUrl: pinImg.src,
  iconSize: [38, 38],
  iconAnchor: [19, 38], 
  popupAnchor: [0, -38], 
});

const markers = [
  {
    geocode: [48.86, 2.3522],
    popupText: 'Hello from Paris!'
  },
  {
    geocode: [40.0583, -74.4057],
    popupText: 'Hello from New Jersey!'
  },
  {
    geocode: [7.1907, 125.4553],
    popupText: 'Hello from Davao!'
  },
  {
    geocode: [28.6139, 77.2090],
    popupText: 'Hello from New Delhi!'
  },
  {
    geocode: [25.276987, 55.296249],
    popupText: 'Hello from Dubai!'
  },
  {
    geocode: [55.7558, 37.6176],
    popupText: 'Hello from Moscow!'
  }
];

const Map = () => {
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={1.5} scrollWheelZoom={false} className="h-[80vh] rounded-3xl">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
              {marker.popupText}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;