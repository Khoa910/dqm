// HexagonSvg.jsx
import React from "react";
// import img from "../assets/factory.png"; // đổi đường dẫn

const HexagonSvg = ({ size = 360, strokeWidth = 12, src = img }) => {
  // points for a regular hexagon centered in viewBox 0..100
  const points = "50 2.5, 93 26.25, 93 73.75, 50 97.5, 7 73.75, 7 26.25";
  // Use viewBox 0 0 100 100 scaled to whatever size
  return (
    <div style={{ width: size, height: size }} className="hexagon-svg-wrapper">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%", display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* gradient for stroke */}
          <linearGradient id="gradStroke" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#BC8E40" />
            <stop offset="100%" stopColor="#FFFCD5" />
          </linearGradient>

          {/* subtle inner highlight gradient for border */}
          <linearGradient id="gradInner" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
          </linearGradient>

          {/* clip path so image is only inside the hexagon */}
          <clipPath id="hexClip">
            <polygon points={points} />
          </clipPath>

          {/* drop shadow filter */}
          <filter id="ds" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.25"/>
          </filter>
        </defs>

        {/* shadowed border (to create 3D lift) */}
        <g filter="url(#ds)">
          {/* border polygon (stroke only) */}
          <polygon
            points={points}
            fill="none"
            stroke="url(#gradStroke)"
            strokeWidth={strokeWidth / (100 / 100)} /* stroke relative in viewBox */
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* the image clipped to hexagon */}
        <g clipPath="url(#hexClip)">
          <image
            href={src}
            x="-5"
            y="-5"
            width="110"
            height="110"
            preserveAspectRatio="xMidYMid slice"
          />
          {/* subtle overlay to make text readable or to mimic the Canva tone */}
          <rect x="0" y="0" width="100" height="100" fill="rgba(255,255,255,0.06)" />
        </g>

        {/* inner highlight stroke (thin light streak) */}
        <polygon
          points={points}
          fill="none"
          stroke="url(#gradInner)"
          strokeWidth={strokeWidth * 0.35}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
          vectorEffect="non-scaling-stroke"
        />

        {/* small top highlight (simulate glossy edge) */}
        <path
          d="M22 12 L78 12"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

export default HexagonSvg;
