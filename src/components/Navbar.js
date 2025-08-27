"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname =usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled || pathname !== "/" ? "bg-white shadow-md py-6 text-gray-900" : "bg-transparent py-4 text-white"
      }`}
    >
      <div className="flex items-center justify-between px-8 max-w-full mx-0">
        <Link href="/" className="text-2xl font-bold">
          Wonseok Lee
        </Link>

        <div className={`hidden md:flex space-x-6 text-lg ${scrolled || pathname !== "/" ? "text-gray-900" : "text-white"}`}>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/research" className="hover:text-blue-500">Research & Publications</Link>
          <Link href="/teaching" className="hover:text-blue-500">Teaching</Link>
          <a
            href="/images/cv-wonseok.pdf"
            download
            className="flex items-center hover:text-blue-500"
          >
            CV <FiDownload className="ml-1" />
          </a>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`absolute top-full left-0 w-full shadow-md flex flex-col items-start px-6 py-4 space-y-4 md:hidden z-50
          ${scrolled || pathname !== "/" ? "bg-white text-gray-900" : "bg-transparent text-white"}`}>
          <Link href="/about" onClick={toggleMenu}>About</Link>
          <Link href="/research" onClick={toggleMenu}>Research & Publications</Link>
          <Link href="/teaching" onClick={toggleMenu}>Teaching</Link>
          <a
            href="/images/cv-wonseok.pdf"
            download
            className="flex items-center"
            onClick={toggleMenu}
          >
            CV <FiDownload className="ml-1" />
          </a>
          <Link href="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
