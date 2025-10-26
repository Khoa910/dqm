import { useEffect, useRef } from "react";
import gsap from "gsap";

const Intro = ({ onFinish }) => {
  const introRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(introRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: onFinish,
        });
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    ).to(logoRef.current, {
      y: -10,
      duration: 0.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
      delay: 0.5,
    });
  }, [onFinish]);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 flex items-center justify-center bg-yellow-400 z-[9999]"
    >
      <img
        ref={logoRef}
        src="intro-logo.png"
        alt="Brand Logo"
        className="object-contain w-32 h-32"
      />
    </div>
  );
};

export default Intro;
