import { useEffect, useRef } from "react";
import gsap from "gsap";

const IntroAbout = ({ 
  onFinish, 
  onTimelineCreate,
  backgroundImage, 
  currentBackground = null,
  currentContent = null, // Nhận current content
  finalBackground = null,
  finalContent,
}) => {
  const introBackgroundRef = useRef(null);
  const oldBackgroundRef = useRef(null);
  const oldContentRef = useRef(null); // Ref cho current content
  const finalBackgroundRef = useRef(null);
  const finalContentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Truyền timeline về component cha
    if (onTimelineCreate) {
      onTimelineCreate(tl);
    }

    // BƯỚC 1: Slide current background và content lên
    tl.to([oldBackgroundRef.current, oldContentRef.current], {
      y: '-100%',
      duration: 0.8,
      ease: "power2.inOut",
      stagger: 0.1
    })

    // BƯỚC 2: HIỂN THỊ FINAL BACKGROUND & CONTENT
    .to([finalBackgroundRef.current, finalContentRef.current], {
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "revealFinal")

    // BƯỚC 3: Dừng 1.5s xem intro
    .to({}, { duration: 1.5 })
    
    // BƯỚC 4: Slide intro lên
    .to(introBackgroundRef.current, {
      y: '-100%',
      duration: 0.8,
      ease: "power2.inOut"
    });

    // Gọi onFinish khi tất cả animation hoàn thành
    tl.call(() => {
      onFinish();
    });

  }, [onFinish, onTimelineCreate]);

  return (
    <div className="fixed inset-0 z-40">
      {/* Layer 1: Current background & content - CAO NHẤT ĐỂ SLIDE */}
      {currentBackground && (
        <div className="absolute inset-0 z-40">
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
          {/* Current content */}
          {currentContent && (
            <div 
              ref={oldContentRef}
              className="absolute inset-0 z-10"
            >
              {currentContent}
            </div>
          )}
        </div>
      )}

      {/* Layer 2: Intro background - THẤP HƠN */}
      <div className="absolute inset-0 z-30">
        <div 
          ref={introBackgroundRef} 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Layer 3: Final background & content - THẤP NHẤT, HIỆN SỚM */}
      {finalBackground && (
        <div 
          ref={finalBackgroundRef}
          className="absolute inset-0 z-20 opacity-0"
        > 
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${finalBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* FINAL CONTENT */}
          {finalContent && (
            <div 
              ref={finalContentRef}
              className="relative z-10 opacity-0"
            >
              {finalContent}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IntroAbout;