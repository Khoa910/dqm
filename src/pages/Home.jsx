import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import sarica from "../assets/sarica.jpeg"
import sarina from "../assets/sarina.jpg"
import thyskyhall from "../assets/thyskyhall.jpg"
import bason from "../assets/ba-son.jpg"
import chulai from "../assets/chu-lai.jpg"
import sala from "../assets/sala.jpg"
import introBg1 from "../assets/intro-name-bg.jpg";
import introBg2 from "../assets/intro-bg2.png";
import introBg3 from "../assets/intro-bg3.png";
import introBg4 from "../assets/intro-bg4.png";
import introBg5 from "../assets/intro-bg5.png";
import introBg6 from "../assets/intro-bg6.jpg";
import IntroAbout from "../components/effects/IntroAbout";
import { aboutDQM } from "./DemoHome"; // Import component form

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
    transitionType: 'slide',
    form: '' // Form tương ứng cho slide 1
  },
  {
    backgroundImage: introBg2,
    transitionType: 'slide',
    form: 'aboutDQM' // Form tương ứng cho slide 2
  },
  {
    backgroundImage: introBg3,
    transitionType: 'slide',
    form: '' // Form tương ứng cho slide 3
  },
  {
    backgroundImage: introBg4,
    transitionType: 'slide',
    form: '' // Form tương ứng cho slide 4
  },
  {
    backgroundImage: introBg5,
    transitionType: 'slide',
    form: '' // Form tương ứng cho slide 5
  },
  {
    backgroundImage: introBg6,
    transitionType: 'slide',
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
  const [showForm, setShowForm] = useState(false); // State để hiển thị form
  const [pendingSlide, setPendingSlide] = useState(null);
  const [introConfig, setIntroConfig] = useState(null);
  const [currentForm, setCurrentForm] = useState(null); // Form hiện tại

  // Hiệu ứng khi load trang
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, ease: "power3.out", duration: 1 }
    );
  }, []);

  // Hiệu ứng khi chuyển slide chính
  useEffect(() => {
    // Animation cho tiêu đề khi chuyển slide
    gsap.fromTo(
      titleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [current]);

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

  // Tự động chuyển ảnh cho slide chính
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleIntroFinish = () => {
    setShowIntro(false);
    if (pendingSlide !== null) {
      // Hiển thị form tương ứng sau khi intro kết thúc (CHỈ CHO PAGINATION PHẢI)
      setCurrentForm(introConfigs[pendingSlide].form);
      setShowForm(true);
      
      // Cập nhật slide hiện tại
      setCurrent(pendingSlide);
      setRightCurrent(pendingSlide);
      setPendingSlide(null);
    }
  };

  const handleRightPaginationClick = (index) => {
    if (index === current) return;
    
    // Lấy config intro tương ứng với slide được chọn (PAGINATION PHẢI)
    const targetIntroConfig = introConfigs[index];
    
    setIntroConfig({
      ...targetIntroConfig,
      currentBackground: slides[current].src, // Background hiện tại
    });
    
    setPendingSlide(index);
    setShowIntro(true);
  };

  const handleMainPaginationClick = (index) => {
    // PAGINATION BOTTOM: chỉ chuyển slide, không chạy intro và form
    setCurrent(index);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setCurrentForm(null);
  };

  // Nếu đang show form thì hiển thị form (CHỈ CHO PAGINATION PHẢI)
  if (showForm && currentForm) {
    return (
      <>
        {/* Background của slide hiện tại */}
        <div className="fixed inset-0">
          <img
            src={slides[current].src}
            alt={`Slide ${current + 1}`}
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hiển thị form tương ứng */}
        {currentForm === 'aboutDQM' && aboutDQM({ onClose: handleCloseForm })}
      </>
    );
  }

  // Nếu đang show intro thì ẩn nội dung chính (CHỈ CHO PAGINATION PHẢI)
  if (showIntro) {
    return (
      <>
        {/* Giữ nguyên background hiện tại nhưng ẩn đi */}
        <div className="fixed inset-0 opacity-0">
          <img
            src={slides[current].src}
            alt={`Slide ${current + 1}`}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        {/* Hiển thị Intro */}
        {introConfig && (
          <IntroAbout
            onFinish={handleIntroFinish}
            backgroundImage={introConfig.backgroundImage}
            currentBackground={introConfig.currentBackground}
            duration={2}
            transitionType={introConfig.transitionType}
          />
        )}
      </>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
    >
      {/* Ảnh nền */}
      <img
        src={slides[current].src}
        alt={`Slide ${current + 1}`}
        className="absolute inset-0 object-cover w-full h-full transition-all duration-700"
      />

      {/* Overlay tối nhẹ để nội dung nổi bật */}
      <div className="absolute inset-0 bg-black/20"></div>

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

      {/* pagination chính - CHỈ CHUYỂN SLIDE, KHÔNG INTRO & FORM */}
      <div className="absolute z-20 flex space-x-4 -translate-x-1/2 bottom-6 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleMainPaginationClick(index)}
            className={`
              flex items-center justify-center
              w-8 h-8 rounded-full transition-all duration-300
              border-2 backdrop-blur-sm
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

      {/* pagination bên phải - CÓ INTRO & FORM */}
      <div 
        ref={rightPaginationRef}
        className="absolute z-20 flex flex-col space-y-6 -translate-y-1/2 top-1/2 right-8"
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
            
            {/* Tooltip hiển thị sẽ mở form */}
            <div className="absolute px-3 py-2 mr-4 text-sm text-white transition-opacity duration-300 rounded-lg opacity-0 right-full bg-black/80 group-hover:opacity-100 whitespace-nowrap">
              Mở {slides[index].title}
              <div className="absolute w-2 h-2 transform rotate-45 -translate-y-1/2 top-1/2 -right-1 bg-black/80"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;