"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = L.divIcon({
  className: "custom-icon",
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
      <path d="M12 2C8.69 2 6 4.69 6 8C6 10.22 7.5 12.62 10 14.72L12 18.27L14 14.72C16.5 12.62 18 10.22 18 8C18 4.69 15.31 2 12 2ZM12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10Z"
      fill="none" stroke="#000000" stroke-width="2"/>
    </svg>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function MapPage() {
  const position: [number, number] = [55.751244, 37.618423];

  const autoShops = [
    {
      id: 1,
      name: "Автомастерская 1",
      position: [55.7558, 37.6173] as [number, number],
    },
    {
      id: 2,
      name: "Автомастерская 2",
      position: [55.762, 37.6177] as [number, number],
    },
    {
      id: 3,
      name: "Автомастерская 3",
      position: [55.75, 37.62] as [number, number],
    },
    {
      id: 4,
      name: "Автомастерская 4",
      position: [55.747, 37.615] as [number, number],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">
        Карта Автомастерских
      </h1>
      <div className="w-full h-[500px] max-w-4xl rounded-lg shadow-md">
        <MapContainer
          center={position}
          zoom={10}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {autoShops.map((shop) => (
            <Marker key={shop.id} position={shop.position} icon={customIcon}>
              <Popup>{shop.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
