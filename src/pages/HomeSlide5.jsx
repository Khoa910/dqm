import thadidesign from "../assets/thadidesign.png";
import semc from "../assets/semc.png";
import thadiconsEC from "../assets/ec.png";
import thadiconsAI from "../assets/ai.png";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HomeSlide5 = () => {
  const companies = [
    { name: "THADIDESIGN", img: thadidesign },
    { name: "SEMC", img: semc },
    { name: "THADICONS E&C", img: thadiconsEC },
    { name: "THADICONS A&I", img: thadiconsAI }
  ];

  const [current, setCurrent] = useState(0);
  const totalSlides = Math.ceil(companies.length / 3);

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev + 1) % totalSlides);
  // };

  // const prevSlide = () => {
  //   setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  // };

  const getVisibleCompanies = () => {
    const start = current * 3;
    return companies.slice(start, start + 3);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-10 py-16 bg-center bg-cover">
      {/* === Tiêu đề === */}
      <h2 className="mb-12 text-3xl font-bold tracking-wide text-[#A67C2E] uppercase">
        CÁC CÔNG TY THÀNH VIÊN
      </h2>

      {/* <button
        onClick={prevSlide}
        className="absolute left-20 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-[#BC8E40] hover:text-white transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-md hover:bg-[#BC8E40] hover:text-white transition"
      >
        <ChevronRight size={24} />
      </button> */}

      {/* === Danh sách công ty hiển thị === */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {getVisibleCompanies().map((company, index) => (
          <div
            key={index}
            className="relative overflow-hidden shadow-lg rounded-xl group"
          >
            <img
              src={company.img}
              alt={company.name}
              className="object-cover w-full h-[300px] transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#BC8E40]/90 to-transparent"></div>
            <h3 className="absolute text-lg font-semibold tracking-wide text-white -translate-x-1/2 bottom-6 left-1/2">
              {company.name}
            </h3>
          </div>
        ))}
      </div>

      {/* === Dấu chấm indicator === */}
      <div className="flex gap-3 mt-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-[#BC8E40]" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeSlide5;