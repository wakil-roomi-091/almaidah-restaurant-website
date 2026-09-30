import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({ 
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: 'swap',
  adjustFontFallback: false,
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Al Maidah Restaurant • Warsak Road Peshawar",
  description: "Authentic Pakistani & Shinwari culinary heritage in Peshawar.",
};

import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      
      <body
        className={`${newsreader.variable} ${plusJakarta.variable} bg-surface font-body-md text-on-surface antialiased selection:bg-primary selection:text-on-primary`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}






