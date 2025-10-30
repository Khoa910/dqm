import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import sarica from "../assets/sarica.png"
import sarina from "../assets/sarina.png"
import thyskyhall from "../assets/thiskyhall.jpg"
import bason from "../assets/bason.png"
import chulai from "../assets/chulai.jpg"
import sala from "../assets/sala.png"
import introBg1 from "../assets/intro-name-bg.jpg";
import introBg2 from "../assets/intro-bg2.png";
import introBg3 from "../assets/intro-bg3.png";
import introBg4 from "../assets/intro-bg4.png";
import introBg5 from "../assets/intro-bg5.png";
import introBg6 from "../assets/intro-bg6.jpg";
import IntroAbout from "../components/effects/IntroAbout";
import HomeSlide2 from "./HomeSlide2";
import HomeSlide3 from "./HomeSlide3";
import HomeSlide4 from "./HomeSlide4";
import SlideBg2 from "../assets/home-slide2.png";

const slides = [
  { 
    src: sarica, 
    title: "Chung cư Sarica"
  },
  { 
    src: sarina, 
    title: "Chung cư Sarina"
  },
  { 
    src: thyskyhall, 
    title: "TTTM Thyskyhall"
  },
  { 
    src: bason, 
    title: "Cầu Ba Son"
  },
  { 
    src: chulai, 
    title: "Khu CN Chu Lai"
  },
  { 
    src: sala, 
    title: "Khu đô thị Sala"
  },
];

// Config intro riêng cho từng slide - CHỈ DÙNG CHO PAGINATION BÊN PHẢI
const introConfigs = [
  {
    backgroundImage: introBg1,
    finalBackground: sarica,
    form: '' // Form tương ứng cho slide 1
  },
  {
    backgroundImage: introBg2,
    finalBackground: SlideBg2,
    finalContent: <HomeSlide2 />
  },
  {
    backgroundImage: introBg3,
    finalBackground: SlideBg2,
    finalContent: <HomeSlide3 />
  },
  {
    backgroundImage: introBg4,
    finalBackground: SlideBg2,
    finalContent: <HomeSlide4 />
  },
  {
    backgroundImage: introBg5,
    finalBackground: SlideBg2,
    form: '' // Form tương ứng cho slide 5
  },
  {
    backgroundImage: introBg6,
    finalBackground: SlideBg2,
    form: '' // Form tương ứng cho slide 6
  }
];

const Home = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const rightPaginationRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [rightCurrent, setRightCurrent] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const [pendingSlide, setPendingSlide] = useState(null);
  const [introConfig, setIntroConfig] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHomeView, setIsHomeView] = useState(true);
  const introTimelineRef = useRef(null);

  // Hiệu ứng khi load trang
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, ease: "power3.out", duration: 1 }
    );
  }, []);

  // Hiệu ứng khi chuyển slide chính (chỉ cho bottom pagination)
  useEffect(() => {
    if (isTransitioning || !isHomeView) return;

    gsap.fromTo(
      titleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [current, isTransitioning, isHomeView]);

  // Hiệu ứng cho pagination bên phải (toàn cục)
  useEffect(() => {
    if (rightPaginationRef.current) {
      gsap.fromTo(
        rightPaginationRef.current.children[rightCurrent],
        { scale: 0.8, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [rightCurrent]);

  // Tự động chuyển ảnh cho slide chính (chỉ khi ở home view)
  useEffect(() => {
    if (showIntro || isTransitioning || !isHomeView) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [showIntro, isTransitioning, isHomeView]);

  const handleIntroFinish = () => {
    setShowIntro(false);
    setIsTransitioning(false);
    
    if (pendingSlide !== null) {
      setCurrent(pendingSlide);
      setRightCurrent(pendingSlide);
      
      // Nếu có finalContent thì chuyển sang form view
      if (introConfigs[pendingSlide].finalContent) {
        setIsHomeView(false);
      }
      
      setPendingSlide(null);
    }
  };

  const handleRightPaginationClick = (index) => {
    // Chỉ kiểm tra có phải cùng slide không
    if (index === rightCurrent) return;
    
    // Clear timeline cũ nếu có (khi user chủ động chuyển slide)
    if (introTimelineRef.current) {
      introTimelineRef.current.kill();
      introTimelineRef.current = null;
    }
    
    setIsTransitioning(true);
    // QUAN TRỌNG: Reset về home view trước khi bắt đầu intro mới để ẩn nội dung slide cũ không bị đè lên intro mới
    setIsHomeView(true);
    
    const targetIntroConfig = introConfigs[index];
    
    setIntroConfig({
      ...targetIntroConfig,
      currentBackground: slides[rightCurrent].src,
    });
    
    setPendingSlide(index);
    setShowIntro(true);
  };

  // PAGINATION BOTTOM: chỉ chuyển slide, không chạy intro và form (chỉ ở home view)
  const handleMainPaginationClick = (index) => {
    if (showIntro || isTransitioning || !isHomeView) return;
    
    setCurrent(index);
    setRightCurrent(index);
  };

  // Hàm quay lại home view từ form
  const handleBackToHome = () => {
    setIsHomeView(true);
  };

  // Hàm để IntroAbout có thể lưu timeline
  const handleTimelineCreate = (timeline) => {
    introTimelineRef.current = timeline;
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
    >
      {/* Intro overlay - LUÔN HIỆN KHI CÓ INTRO */}
      {showIntro && introConfig && (
        <IntroAbout
          onFinish={handleIntroFinish}
          onTimelineCreate={handleTimelineCreate}
          backgroundImage={introConfig.backgroundImage}
          currentBackground={introConfig.currentBackground}
          finalBackground={introConfig.finalBackground}
          finalContent={introConfig.finalContent}
          duration={2}
        />
      )}

      {/* Nếu đang ở form view (không phải home view) VÀ KHÔNG CÓ INTRO ĐANG CHẠY */}
      {!isHomeView && !showIntro && introConfigs[rightCurrent]?.finalContent && (
        <div className="fixed inset-0 z-40">
          {introConfigs[rightCurrent].finalContent}
          {/* Nút back để quay lại home */}
          <button
            onClick={handleBackToHome}
            className="absolute z-50 p-3 transition-all duration-300 rounded-full top-4 left-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
        </div>
      )}

      {/* Ảnh nền với transition mượt mà (chỉ hiện khi ở home view VÀ KHÔNG CÓ INTRO) */}
      {isHomeView && !showIntro && (
        <div className="absolute inset-0">
          <img
            src={slides[current].src}
            alt={`Slide ${current + 1}`}
            className="absolute inset-0 object-cover w-full h-full transition-all duration-1000 ease-out"
          />
          {/* Overlay tối nhẹ để nội dung nổi bật */}
          <div className="absolute inset-0 transition-all duration-1000 bg-black/20"></div>
        </div>
      )}

      {/* tiêu đề chính (chỉ hiện khi ở home view VÀ KHÔNG CÓ INTRO) */}
      {isHomeView && !showIntro && (
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
      )}

      {/* pagination chính - CHỈ CHUYỂN SLIDE, KHÔNG INTRO & FORM - CHỈ HIỆN Ở HOME VÀ KHÔNG CÓ INTRO */}
      {isHomeView && !showIntro && (
        <div className="absolute z-20 flex space-x-4 -translate-x-1/2 bottom-6 left-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleMainPaginationClick(index)}
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
      )}

      {/* pagination bên phải - CÓ INTRO & FORM - TOÀN CỤC, LUÔN HIỆN, KHÔNG BAO GIỜ DISABLE */}
      <div 
        ref={rightPaginationRef}
        className="absolute z-50 flex flex-col space-y-6 -translate-y-1/2 top-1/2 right-8"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleRightPaginationClick(index)}
            className={`
              flex items-center justify-center
              w-12 h-12 rounded-full transition-all duration-500
              border-2 backdrop-blur-sm transform-gpu
              group relative
              ${
                rightCurrent === index
                  ? "bg-white/80 text-gray-800 scale-110 shadow-lg border-white"
                  : "bg-white/10 text-white border-white/30 hover:bg-white/30 hover:scale-105"
              }
            `}
          >
            {/* Số thứ tự */}
            <span className={`text-base font-medium ${
              rightCurrent === index ? "font-bold" : "font-normal"
            }`}>
              {index + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;