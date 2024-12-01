"use client";

import { useEffect, useRef } from "react";

const YANDEX_MAP_API_KEY = "fccda6d5-66b5-4fe9-b453-d4b8418496ee";

export default function MapPage() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<ymaps.Map | null>(null); // Типизация для карты Yandex

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const loadYandexMap = () => {
      const ymaps = (window as any).ymaps;
      if (!ymaps || mapInstanceRef.current) return; // Проверяем, чтобы не создать карту дважды

      ymaps.ready(() => {
        mapInstanceRef.current = new ymaps.Map(mapContainerRef.current, {
          center: [55.751244, 37.618423],
          zoom: 10,
          controls: ["zoomControl", "searchControl"],
        });

        const searchControl =
          mapInstanceRef.current.controls.get("searchControl");
        if (searchControl) {
          searchControl.search("Автомастерские");
        }
      });
    };

    const scriptId = "yandex-maps-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_MAP_API_KEY}&lang=ru_RU`;
      script.type = "text/javascript";
      script.onload = loadYandexMap;
      document.body.appendChild(script);
    } else {
      loadYandexMap(); // Если скрипт уже загружен
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy(); // Удаляем экземпляр карты при размонтировании
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">
        Карта Автомастерских
      </h1>
      <div
        ref={mapContainerRef}
        className="w-full h-[500px] max-w-4xl rounded-lg shadow-md"
      />
    </div>
  );
}
