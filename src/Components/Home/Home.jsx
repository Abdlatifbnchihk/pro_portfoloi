import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";

export default function Home() {
  const [target, setTarget] = useState({ x: 50, y: 50 }); // target mouse position
  const [position, setPosition] = useState({ x: 50, y: 50 }); // smooth animated position
  const [isTouch, setIsTouch] = useState(false);
  

  const backgroundURL =
    "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=3000&q=60";

  // Detect if device is touch (mobile/tablet)
  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(hasTouch);
  }, []);

  // Smooth animation for desktop
  useEffect(() => {
    if (isTouch) return;
    let animationFrame;

    const smoothMove = () => {
      setPosition((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.08,
        y: prev.y + (target.y - prev.y) * 0.08,
      }));
      animationFrame = requestAnimationFrame(smoothMove);
    };

    animationFrame = requestAnimationFrame(smoothMove);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, isTouch]);

  const handleMouseMove = (e) => {
    if (isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTarget({ x, y });
  };

  const handleMouseLeave = () => setTarget({ x: 50, y: 50 });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col overflow-hidden min-h-[85vh] md:min-h-screen"
    >
      {/* === Background === */}
      {isTouch ? (
        // 📱 Mobile: Normal image only
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('${backgroundURL}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></div>
      ) : (
        // 💻 Desktop: interactive + smooth
        <>
          {/* Static base image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${backgroundURL}')`,
            }}
          ></div>

          {/* Moving mask layer */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundImage: `url('${backgroundURL}')`,
              backgroundSize: "110%",
              backgroundPosition: `${50 + (position.x - 50) * 0.8}% ${
                50 + (position.y - 50) * 0.8
              }%`,
              maskImage: `radial-gradient(circle at ${position.x}% ${position.y}%, black 15%, transparent 40%)`,
              WebkitMaskImage: `radial-gradient(circle at ${position.x}% ${position.y}%, black 15%, transparent 40%)`,
              transition: "background-position 0.1s ease-out",
            }}
          ></div>
        </>
      )}

      {/* === Foreground content === */}
      <div className="relative z-20 text-white flex-1 h-screen flex flex-col min-h-[85vh] md:min-h-screen overflow-hidden w-full">
        <Header />
        <div className="overflow-hidden w-full">
          <Hero />
        </div>
      </div>
    </div>
  );
}






