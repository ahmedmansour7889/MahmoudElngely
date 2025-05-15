import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const updateCursorPosition = (e: MouseEvent) => {
      // Store the position for use in the animation frame
      lastX = e.clientX;
      lastY = e.clientY;

      // If we don't have an animation frame requested, request one
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setPosition({ x: lastX, y: lastY });
          rafId = 0; // Reset so we can request another frame
        });
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);

      // Cancel any pending animation frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Separate effect for cursor style to avoid stale closures
  useEffect(() => {
    let lastUpdateTime = 0;
    const throttleInterval = 100; // Update at most every 100ms

    const updateCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(computedStyle.cursor === 'pointer');
      }
    };

    // Throttle the cursor style update to improve performance
    const throttledUpdateCursorStyle = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdateTime >= throttleInterval) {
        updateCursorStyle();
        lastUpdateTime = now;
      }
    };

    window.addEventListener('mousemove', throttledUpdateCursorStyle);

    return () => {
      window.removeEventListener('mousemove', throttledUpdateCursorStyle);
    };
  }, [position]);

  if (typeof window === 'undefined' || 'ontouchstart' in window) {
    return null; // Don't render on touch devices
  }

  return (
    <>
      <motion.div
        className={`custom-cursor ${isPointer ? 'active' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      <motion.div
        className="custom-cursor cursor-dot"
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 500,
          mass: 0.1,
        }}
      />
    </>
  );
};

export default CustomCursor;