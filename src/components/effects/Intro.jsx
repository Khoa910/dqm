import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/intro-logo.png";
import backgroundImage from "../../assets/intro-bg.jpg";

const Intro = ({ onFinish }) => {
  const introRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(introRef.current, {
          y: "-100%", // Di chuyển lên trên ra khỏi màn hình
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: onFinish,
        });
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 5 },
      { opacity: 1, scale: 5, duration: 1, ease: "power2.out" }
    ).to(logoRef.current, {
      y: 20,
      duration: 0.5,
      ease: "power1.out",
      yoyo: true,
      repeat: 1,
      delay: 0.5,
    });
  }, [onFinish]);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Sử dụng ảnh nền
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <img
        ref={logoRef}
        src={logo} // Sử dụng biến đã import
        alt="Brand Logo"
        className="object-contain w-32 h-32"
      />
    </div>
  );
};

export default Intro;