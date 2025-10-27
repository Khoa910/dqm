import { useState, useEffect } from 'react';
import gsap from 'gsap';

export const usePageTransition = (elementRef) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const animateIn = () => {
    setIsAnimating(true);
    return gsap.fromTo(
      elementRef.current,
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        onComplete: () => setIsAnimating(false)
      }
    );
  };

  const animateOut = () => {
    setIsAnimating(true);
    return gsap.to(elementRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: "power3.in"
    });
  };

  useEffect(() => {
    animateIn();
    
    return () => {
      if (elementRef.current) {
        gsap.killTweensOf(elementRef.current);
      }
    };
  }, []);

  return { isAnimating, animateIn, animateOut };
};