"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-black text-white flex items-center"
      style={{
        backgroundImage: `url('/images/hero-img.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: `center ${offsetY * 0.1}px`, // 패럴랙스 효과
        backgroundRepeat: "no-repeat",
        transition: "background-position 0.2s ease-out",
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
          Wonseok Lee
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl">
          A short descriptive text or tagline goes here.
        </p>
      </div>
    </section>
  );
}
