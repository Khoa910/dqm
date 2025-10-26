import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
];

const Home = () => {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Hiệu ứng vào trang
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
    >
      {/* Ảnh nền */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="absolute inset-0 object-cover w-full h-full transition-all duration-700"
      />

      {/* Overlay tối nhẹ để nổi bật nội dung */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Nội dung chính (tuỳ chọn) */}
      <div className="relative z-10 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold drop-shadow-lg">
          Welcome to Our Real Estate
        </h1>
        <p className="text-lg">Find your dream home with us</p>
      </div>

      {/* Pagination nằm đè ở dưới cùng */}
      <div className="absolute z-20 flex space-x-4 -translate-x-1/2 bottom-8 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-5 h-5 rounded-full ${
              current === index
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            } transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
