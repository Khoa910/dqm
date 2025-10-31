import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";

const NavItem = ({ label, to, subItems = [] }) => {
  const containerRef = useRef(null);
  const textWrapperRef = useRef(null);
  const textTop = useRef(null);
  const textBottom = useRef(null);
  const tl = useRef(null);
  const timeoutRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true });
      tl.current
        .to(textTop.current, { 
          y: "-100%", 
          duration: 0.35, 
          ease: "power3.inOut" 
        })
        .to(textBottom.current, { 
          y: "-100%", 
          duration: 0.35, 
          ease: "power3.inOut" 
        }, "<");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
    tl.current.play();
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      tl.current.reverse();
    }, 150);
  };

  const handleDropdownEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      tl.current.reverse();
    }, 150);
  };

  return (
    <>
      <Link
        to={to || "#"}
        ref={containerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative inline-flex items-center cursor-pointer"
      >
        <div ref={textWrapperRef} className="relative h-6 overflow-hidden">
          <span
            ref={textTop}
            className="inline-block text-[15px] font-semibold text-[#8B6914]"
          >
            {label}
          </span>
          <span
            ref={textBottom}
            className="absolute left-0 top-full text-[15px] font-semibold text-[#BC8E40]"
          >
            {label}
          </span>
        </div>
      </Link>

      <DropdownMenu
        isVisible={isHovered && subItems.length > 0}
        targetRef={containerRef}
        onMouseEnter={handleDropdownEnter}
        onMouseLeave={handleDropdownLeave}
      >
        <div className="inline-block px-2 py-2 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-gray-100 text-center min-w-[160px]">
          <div className="absolute w-3 h-3 transform rotate-45 -translate-x-1/2 bg-white border-t border-l border-gray-100 -top-1 left-1/2"></div>

          {subItems.map((item, index) => (
            <Link
              key={index}
              to={item.href || "#"}
              className={`block whitespace-nowrap px-3 py-2 text-[14px] transition-all duration-200 border-b border-gray-50 last:border-b-0 text-gray-700 hover:text-[#BC8E40] hover:bg-[#FFF8ED]`}
              onClick={() => {
                setIsHovered(false);
                tl.current.reverse();
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </DropdownMenu>
    </>
  );
};

export default NavItem;