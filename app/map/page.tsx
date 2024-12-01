"use client";

import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("./MapComponent"), { ssr: false });

export default function MapPage() {
  const position: LatLngTuple = [55.751244, 37.618423];
  const autoShops: { id: number; name: string; position: LatLngTuple }[] = [
    { id: 1, name: "Автомастерская 1", position: [55.7558, 37.6173] },
    { id: 2, name: "Автомастерская 2", position: [55.762, 37.6177] },
    { id: 3, name: "Автомастерская 3", position: [55.75, 37.62] },
    { id: 4, name: "Автомастерская 4", position: [55.747, 37.615] },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">
        Карта Автомастерских
      </h1>
      <div className="w-full h-[500px] max-w-4xl rounded-lg shadow-md">
        <MapWithNoSSR position={position} autoShops={autoShops} />
      </div>
    </div>
  );
}
