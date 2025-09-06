// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
("./components/Navbar");
import { Vidaloka } from "next/font/google";

const vidaloka = Vidaloka({
  subsets: ["latin"],
  variable: "--font-vidaloka",
  weight: "400",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "My App",
  description: "Basic Tailwind/Next.js App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${vidaloka.variable}`}>
      <Navbar />
      <body className="bg-scheme-400">{children}</body>
      <Footer />
    </html>
  );
}
