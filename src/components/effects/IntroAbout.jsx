import { useEffect, useRef } from "react";
import gsap from "gsap";

const IntroAbout = ({ 
  onFinish, 
  onTimelineCreate,
  backgroundImage, 
  currentBackground, 
  finalBackground = null,
  finalContent,
}) => {
  const introBackgroundRef = useRef(null);
  const oldBackgroundRef = useRef(null);
  const finalContentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Truyền timeline về component cha
    if (onTimelineCreate) {
      onTimelineCreate(tl);
    }

    // BƯỚC 1: Slide background cũ lên
    tl.to(oldBackgroundRef.current, {
      y: '-100%',
      duration: 0.8,
      ease: "power2.inOut"
    });

    // BƯỚC 2: Dừng 2s xem intro, rồi slide intro lên
    tl.to({}, { duration: 2 })
      .to(introBackgroundRef.current, {
        y: '-100%',
        duration: 0.8,
        ease: "power2.inOut"
      });

    // BƯỚC 3: Fade in nội dung cuối (nếu có)
    if (finalContent) {
      tl.to(finalContentRef.current, { 
        opacity: 1, 
        y: 0,
        duration: 0.5
      });
    }

    // Gọi onFinish khi tất cả animation hoàn thành
    tl.call(onFinish, null, "+=0.1"); // Thêm delay nhỏ để đảm bảo animation hoàn thành

  }, [onFinish, finalContent, onTimelineCreate]);

  return (
    <div className="fixed inset-0 z-40">
      {/* Layer 3: Final background & content */}
      {finalBackground ? (
        <div className="absolute inset-0"> 
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${finalBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          {finalContent && (
            <div ref={finalContentRef} className="relative z-20 opacity-0">
              {finalContent}
            </div>
          )}
        </div>
      ) : finalContent ? (
        // Nếu không có finalBackground nhưng có finalContent, vẫn render content
        <div className="absolute inset-0 bg-gray-100"> {/* Fallback background */}
          {finalContent && (
            <div ref={finalContentRef} className="relative z-20 opacity-0">
              {finalContent}
            </div>
          )}
        </div>
      ) : null}

      {/* Layer 2: Intro background */}
      <div className="absolute inset-0">
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

      {/* Layer 1: Current background */}
      {currentBackground && (
        <div className="absolute inset-0">
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
        </div>
      )}
    </div>
  );
};

export default IntroAbout;