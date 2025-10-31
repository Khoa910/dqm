import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import sarica from "../assets/sarica.png"
import sarina from "../assets/sarina.png"
import thyskyhall from "../assets/thiskyhall.jpg"
import bason from "../assets/bason.png"
import chulai from "../assets/chulai.jpg"
import sala from "../assets/sala.png"

const HomeSlide1 = () => {
  const titleRef = useRef(null);
  
  const slides = [
    { src: sarica, title: "Chung cư Sarica" },
    { src: sarina, title: "Chung cư Sarina" },
    { src: thyskyhall, title: "TTTM Thyskyhall" },
    { src: bason, title: "Cầu Ba Son" },
    { src: chulai, title: "Khu CN Chu Lai" },
    { src: sala, title: "Khu đô thị Sala" },
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Hiệu ứng khi chuyển slide
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [current]);

  // Tự động chuyển ảnh
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePaginationClick = (index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrent(index);
    
    // Reset transitioning sau animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Ảnh nền */}
      <div className="absolute inset-0">
        <img
          src={slides[current].src}
          alt={`Slide ${current + 1}`}
          className="absolute inset-0 object-cover w-full h-full transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 transition-all duration-1000 bg-black/20"></div>
      </div>

      {/* tiêu đề chính */}
      <div className="absolute z-20 text-center -translate-x-1/2 bottom-20 left-1/2">
        <h1 
          ref={titleRef}
          className="text-3xl font-bold tracking-wide text-white md:text-4xl lg:text-5xl"
          style={{
            fontFamily: "'Times New Roman', serif",
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)"
          }}
        >
          {slides[current].title.toUpperCase()}
        </h1>
      </div>

      {/* pagination bottom */}
      <div className="absolute z-20 flex space-x-4 -translate-x-1/2 bottom-6 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            disabled={isTransitioning}
            className={`
              flex items-center justify-center
              w-8 h-8 rounded-full transition-all duration-300
              border-2 backdrop-blur-sm
              ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
              ${
                current === index
                  ? "bg-white/40 text-white scale-150 shadow-xl border-white transform-gpu"
                  : "bg-white/5 text-white border-white/50 hover:bg-white/50 hover:scale-85"
              }
            `}
          >
            <span className={`text-sm font-medium ${
              current === index ? "font-semibold" : "font-normal"
            }`}>
              {index + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeSlide1;