import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import sarica from "../assets/sarica.png"
import introBg1 from "../assets/intro-name-bg.jpg";
import introBg2 from "../assets/intro-bg2.png";
import introBg3 from "../assets/intro-bg3.png";
import introBg4 from "../assets/intro-bg4.png";
import introBg5 from "../assets/intro-bg5.png";
import introBg6 from "../assets/intro-bg6.jpg";
import IntroAbout from "../components/effects/IntroAbout";
import HomeSlide1 from "./HomeSlide1";
import HomeSlide2 from "./HomeSlide2";
import HomeSlide3 from "./HomeSlide3";
import HomeSlide4 from "./HomeSlide4";
import HomeSlide5 from "./HomeSlide5";
import HomeSlide6 from "./HomeSlide6";
import SlideBg2 from "../assets/home-slide2.png";
import White from "../assets/white-bg.jpg"

const introConfigs = [
  {
    backgroundImage: introBg1,
    finalBackground: sarica,
    finalContent: <HomeSlide1 />
  },
  {
    backgroundImage: introBg2,
    finalBackground: SlideBg2,
    finalContent: <HomeSlide2 />
  },
  {
    backgroundImage: introBg3,
    finalBackground: White,
    finalContent: <HomeSlide3 />
  },
  {
    backgroundImage: introBg4,
    finalBackground: White,
    finalContent: <HomeSlide4 />
  },
  {
    backgroundImage: introBg5,
    finalBackground: White,
    finalContent: <HomeSlide5 />
  },
  {
    backgroundImage: introBg6,
    finalBackground: White,
    finalContent: <HomeSlide6 />
  }
];

const Home = () => {
  const containerRef = useRef(null);
  const rightPaginationRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [rightCurrent, setRightCurrent] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const [pendingSlide, setPendingSlide] = useState(null);
  const [introConfig, setIntroConfig] = useState(null);
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

  // Hiệu ứng cho pagination bên phải
  useEffect(() => {
    if (rightPaginationRef.current) {
      gsap.fromTo(
        rightPaginationRef.current.children[rightCurrent],
        { scale: 0.8, opacity: 0.7 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [rightCurrent]);

  const handleIntroFinish = () => {
    if (pendingSlide !== null) {
      setCurrent(pendingSlide);
      setRightCurrent(pendingSlide);
      
      if (introConfigs[pendingSlide].finalContent) {
        setIsHomeView(false);
      }
      
      setPendingSlide(null);
    }

    setShowIntro(false);
  };

  const handleRightPaginationClick = (index) => {
    if (index === rightCurrent) return;
    
    if (introTimelineRef.current) {
      introTimelineRef.current.kill();
      introTimelineRef.current = null;
    }

    const targetIntroConfig = introConfigs[index];
    
    // Tạo current content từ slide hiện tại
    let currentContent;
    let currentBackground;
    
    if (isHomeView && rightCurrent === 0) {
      // Đang ở HomeSlide1 (home view)
      currentContent = <HomeSlide1 />;
      currentBackground = sarica;
    } else if (!isHomeView) {
      // Đang ở final content của slide khác
      currentContent = introConfigs[rightCurrent].finalContent;
      currentBackground = introConfigs[rightCurrent].finalBackground;
    } else {
      // Fallback
      currentContent = <HomeSlide1 />;
      currentBackground = sarica;
    }
    
    setIntroConfig({
      ...targetIntroConfig,
      currentBackground: currentBackground,
      currentContent: currentContent, // Thêm current content để slide up
    });
    
    setPendingSlide(index);
    setShowIntro(true);
  };

  const handleTimelineCreate = (timeline) => {
    introTimelineRef.current = timeline;
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
    >
      {/* Intro overlay */}
      {showIntro && introConfig && (
        <IntroAbout
          onFinish={handleIntroFinish}
          onTimelineCreate={handleTimelineCreate}
          backgroundImage={introConfig.backgroundImage}
          currentBackground={introConfig.currentBackground}
          currentContent={introConfig.currentContent} // Truyền current content
          finalBackground={introConfig.finalBackground}
          finalContent={introConfig.finalContent} 
        />
      )}
      
      {/* Final content container - BAO GỒM CẢ SLIDE 1 */}
      {!showIntro && !isHomeView && introConfigs[rightCurrent]?.finalContent && (
        <div className="fixed inset-0 z-30">
          {/* Final background */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${introConfigs[rightCurrent].finalBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />        
          {/* Final content */}
          <div className="relative z-40">
            {introConfigs[rightCurrent].finalContent}
          </div>
        </div>
      )}

      {/* Home view content - SLIDE 1 */}
      {isHomeView && !showIntro && (
        <HomeSlide1 />
      )}

      {/* pagination bên phải - TOÀN CỤC, LUÔN HIỆN */}
      <div
        ref={rightPaginationRef}
        className="absolute z-50 flex flex-col space-y-6 -translate-y-1/2 top-1/2 right-8"
      >
        {introConfigs.map((config, index) => (
          <button
            key={index}
            onClick={() => handleRightPaginationClick(index)}
            className={`
              flex items-center justify-center
              w-10 h-10 rounded-full border border-white/0
              transition-all duration-500 text-2xl
              ${
                rightCurrent === index
                  ? "bg-gradient-to-r from-[#EB9122] to-[#FFD400] bg-clip-text text-transparent scale-110"
                  : "text-black scale-115"
              }
            `}
          >
            <span
              className={`text-base ${
                rightCurrent === index ? "font-bold" : "font-medium"
              }`}
            >
              {index + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;