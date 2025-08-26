import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wonseok Lee - Musicology PhD",
  description: "Researcher, educator, and performer in musicology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
