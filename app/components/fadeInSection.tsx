"use client"

import { useEffect, useRef, useState } from "react";

// A reusable component to handle smooth reveal animations on scroll
const FadeInSection = ({ children, delay = 0, direction = 'up' } : any) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Once it's visible, keep it visible
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Triggers when 10% of the element is visible
    );
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  // Determine starting translation based on direction
  let translateClass = 'translate-y-12'; // Default up
  if (direction === 'left') translateClass = '-translate-x-12';
  if (direction === 'right') translateClass = 'translate-x-12';

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translateClass}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;