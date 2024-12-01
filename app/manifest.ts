import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Car Damage Estimator",
    short_name: "CarEstimator",
    description:
      "Приложение для оценки повреждений автомобиля и расчета стоимости ремонта.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon-36x36.jpg",
        sizes: "36x36",
        type: "image/jpeg",
      },
      {
        src: "/icons/icon-48x48.jpg",
        sizes: "48x48",
        type: "image/jpeg",
      },
      {
        src: "/icons/icon-72x72.jpg",
        sizes: "72x72",
        type: "image/jpeg",
      },
      {
        src: "/icons/icon-96x96.jpg",
        sizes: "96x96",
        type: "image/jpeg",
      },
      {
        src: "/icons/icon-144x144.jpg",
        sizes: "144x144",
        type: "image/jpeg",
      },
      {
        src: "/icons/icon-192x192.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/icons/icon-512x512.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
