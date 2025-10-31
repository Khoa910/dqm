import Contact from "../components/Contact"

const HomeSlide6 = () => {
  return (
    <div className="flex flex-col min-h-screen pt-36">
      {/* Phần 1/3 trên: màu trắng */}
      <div className="flex items-center justify-center bg-white h-1/3"
        style={{
            background: "linear-gradient(to bottom, white 0%, white 70%, #FFFCD5 100%)",
          }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#BC8E40] mb-6 text-center">
          LIÊN HỆ - TUYỂN DỤNG
        </h1>
      </div>

      {/* Phần 2/3 dưới: gradient - GỌI COMPONENT MỚI */}
      <Contact />
    </div>
  );
};

export default HomeSlide6;