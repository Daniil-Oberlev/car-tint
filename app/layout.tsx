import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const ralewayFont = localFont({
  src: [
    {
      path: "./fonts/Raleway-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Оценка повреждений автомобилей — Сервис кузовного ремонта",
  description:
    "Загрузите фото автомобиля, чтобы узнать стоимость ремонта. Быстрая и точная оценка повреждений кузова.",
  keywords: [
    "оценка повреждений",
    "ремонт автомобилей",
    "кузовной ремонт",
    "стоимость ремонта",
    "Next.js сервис",
  ],
  applicationName: "Сервис кузовного ремонта",
  creator: "Ваша команда",
  publisher: "Ваша компания",
  openGraph: {
    title: "Оценка повреждений автомобилей",
    description:
      "Быстрая оценка стоимости ремонта кузова автомобиля. Загрузите фото, чтобы получить подробную информацию.",
    url: "https://example.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@example",
    title: "Оценка повреждений автомобилей",
    description: "Загрузите фото автомобиля и узнайте стоимость ремонта.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet/dist/leaflet.css"
        />
        <Script
          src="https://unpkg.com/leaflet/dist/leaflet.js"
          strategy="beforeInteractive"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${ralewayFont.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
