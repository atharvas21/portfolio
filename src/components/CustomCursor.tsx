'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail particle
      setTrail((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, id: trailId++ },
      ]);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up old trail particles
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(-10));
    }, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      {/* Main cursor */}
      <div
        className={`fixed w-4 h-4 rounded-full border-2 transition-all duration-150 ${
          isPointer
            ? 'border-orange-500 dark:border-teal-400 scale-150'
            : 'border-pink-500 dark:border-emerald-400'
        }`}
        style={{
          left: position.x - 8,
          top: position.y - 8,
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed w-1 h-1 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 dark:from-teal-400 dark:to-emerald-400"
          style={{
            left: point.x,
            top: point.y,
            opacity: (index / trail.length) * 0.5,
            transform: `scale(${index / trail.length})`,
            transition: 'all 0.3s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
