import { useEffect, useRef } from "react";
import gsap from "gsap";

const IntroAbout = ({ 
  onFinish, 
  backgroundImage, 
  currentBackground, 
  duration = 2,
  transitionType = "slide"
}) => {
  const introRef = useRef(null);
  const newBackgroundRef = useRef(null);
  const oldBackgroundRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // HIỆU ỨNG KẾT THÚC: slide toàn bộ intro lên trên và fade out
        gsap.to(introRef.current, {
          y: "-100%", // Di chuyển lên trên ra khỏi màn hình
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: onFinish,
        });
      },
    });

    // BƯỚC 1: BG cũ slide lên để LỘ RA BG intro (đã nằm sẵn bên dưới)
    tl
    // BG cũ slide LÊN - lộ ra BG intro bên dưới
    .to(oldBackgroundRef.current, {
      y: '-100%',
      duration: duration * 0.4, // 0.8s cho bước 1
      ease: "power2.inOut"
    })
    
    // BƯỚC 2: Dừng 2s ở BG intro
    .to({}, { duration: 2 });

    return () => {
      tl.kill();
    };
  }, [onFinish, duration, transitionType]);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-40" // z-40 để nằm dưới navbar (z-50)
    >
      {/* Background intro - ĐÃ NẰM SẴN Ở DƯỚI */}
      <div 
        ref={newBackgroundRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay để nội dung nổi bật */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Background hiện tại - sẽ slide LÊN để lộ BG intro bên dưới */}
      {currentBackground && (
        <div 
          ref={oldBackgroundRef}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
    </div>
  );
};

export default IntroAbout;