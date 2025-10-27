import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const RightPagination = ({ current, slides, onSlideClick }) => {
  const rightPaginationRef = useRef(null);

  useEffect(() => {
    if (rightPaginationRef.current) {
      gsap.fromTo(
        rightPaginationRef.current.children[current],
        { scale: 0.8, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [current]);

  return (
    <div 
      ref={rightPaginationRef}
      className="fixed z-50 flex flex-col space-y-6 -translate-y-1/2 top-1/2 right-8"
    >
      {slides.map((slide, index) => (
        <button
          key={index}
          onClick={() => onSlideClick(index)}
          className={`
            flex items-center justify-center
            w-12 h-12 rounded-full transition-all duration-500
            border-2 backdrop-blur-sm transform-gpu
            group relative
            ${
              current === index
                ? "bg-white/80 text-gray-800 scale-110 shadow-lg border-white"
                : "bg-white/10 text-white border-white/30 hover:bg-white/30 hover:scale-105"
            }
          `}
        >
          <span className={`text-base font-medium ${
            current === index ? "font-bold" : "font-normal"
          }`}>
            {index + 1}
          </span>
        </button>
      ))}
    </div>
  );
};

export default RightPagination;