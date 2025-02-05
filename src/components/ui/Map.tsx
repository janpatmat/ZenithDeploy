// Map.tsx

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import pinImg from "@/public/assets/images/pin.png";

const customIcon = new L.Icon({
  iconUrl: pinImg.src,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

type MarkerData = {
  geocode: [number, number];
  popupText: string;
  place: string;
};

const markers: MarkerData[] = [
  {
    geocode: [48.86, 2.3522],
    popupText: "Hello from Paris!",
    place: "Paris",
  },
  {
    geocode: [40.0583, -74.4057],
    popupText: "Hello from New Jersey!",
    place: "New Jersey",
  },
  {
    geocode: [7.1907, 125.4553],
    popupText: "Hello from Davao!",
    place: "Davao",
  },
  {
    geocode: [28.6139, 77.209],
    popupText: "Hello from New Delhi!",
    place: "New Delhi",
  },
  {
    geocode: [25.276987, 55.296249],
    popupText: "Hello from Dubai!",
    place: "Dubai",
  },
  {
    geocode: [55.7558, 37.6176],
    popupText: "Hello from Moscow!",
    place: "Moscow",
  },
];

const Map: React.FC = () => {
  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={1.5}
        scrollWheelZoom={false}
        className="h-[80vh] rounded-3xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>
              <div className="flex gap-7">
                <div className="bg-orange-400 w-[2rem]"></div>
                <div>
                  <h1 className="text-2xl font-semibold">{marker.place}</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam modi dicta molestias, porro excepturi earum nesciunt iste ipsa animi sit sunt architecto. Consectetur incidunt commodi eum reiciendis tempora! Perferendis.</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
