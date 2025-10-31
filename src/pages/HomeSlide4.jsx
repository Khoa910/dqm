import arrow from "../assets/arrow.png";
import news1 from "../assets/new1.jpg";
import news2 from "../assets/new2.jpg";
import news3 from "../assets/new3.png";
import news4 from "../assets/new4.jpg";
import news5 from "../assets/new5.jpg";
import "../css/gradient.css";

const HomeSlide4 = () => {
  const smallNews = [
    {
      img: news2,
      title: 'BÀI PHÁT BIỂU TẠI “LỄ KỶ NIỆM 05 NĂM THÀNH LẬP CÔNG TY CỔ PHẦN ĐẠI QUANG MINH”',
    },
    {
      img: news3,
      title: 'LỄ KỶ NIỆM 5 NĂM THÀNH LẬP CÔNG TY CỔ PHẦN ĐẠI QUANG MINH',
    },
    {
      img: news4,
      title: 'THADICO HƯỚNG ĐẾN PHÁT TRIỂN BỀN VỮNG TRONG TƯƠNG LAI',
    },
    {
      img: news5,
      title: 'ĐẠI QUANG MINH TRIỂN KHAI DỰ ÁN MỚI NĂM 2025',
    },
  ];

  return (
    <div className="flex items-start justify-center min-h-screen px-4 pt-32">
      <div className="w-full max-w-4xl mx-auto"> {/* Container chính với max-width */}
        {/* Header chính */}
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-bold text-[#BC8E40]">TIN TỨC - SỰ KIỆN</h2>
        </div>

        {/* Tiêu đề 2 bên */}
        <div className="flex items-center justify-between mb-2 text-sm font-semibold tracking-wider text-gray-600 uppercase">
          <span className="text-gray-700">TIN NỔI BẬT</span>
          <div className="flex items-center gap-8">
            <span>TIN TỨC</span>
            <span>SỰ KIỆN</span>
            <button className="flex items-center gap-2 px-2 text-base gradient-button text-[#BC8E40]">
              Xem tiếp
              <img src={arrow} alt="arrow" className="w-5 h-5 invert-[0.6] sepia-[1] saturate-[10] hue-rotate-[10deg] brightness-[1.1]" />
            </button>
          </div>
        </div>

        {/* === Bố cục 2 bên === */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Bên trái: Tin nổi bật */}
          <div className="flex flex-col lg:w-2/3">
            <div className="overflow-hidden shadow-md gradient-news rounded-2xl">
              <img src={news1} alt="Main news" className="object-cover w-full transition-transform duration-500 ease-in-out h-60 hover:scale-110" />
              <div className="relative z-10 p-6 bg-white">
                <h3 className="mb-3 text-xl font-bold leading-snug">
                  THADICO ĐẨY MẠNH TUYỂN DỤNG NGUỒN NHÂN LỰC CHẤT LƯỢNG
                </h3>
                <p className="mb-2 text-base text-gray-600">
                  Trong bối cảnh ngành xây dựng – hạ tầng đang chuyển mình mạnh mẽ trước xu thế
                  chuyển đổi xanh và phát triển bền vững, Thadico đặt mục tiêu tái định hình nguồn
                  nhân lực chất lượng cao...
                </p>
                <div className="flex justify-end">
                  <span className="text-sm text-gray-500">
                    Thứ tư, Ngày 12/12/2017, 08:12
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bên phải: Tin tức nhỏ */}
          <div className="lg:w-[35%] max-h-[460px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#BC8E40]/60 scrollbar-track-transparent">
            <div className="flex flex-col gap-5">
              {smallNews.map((news, index) => (
                <div
                  key={index}
                  className="overflow-hidden transition-shadow shadow-sm gradient-news rounded-xl hover:shadow-lg"
                >
                  <img
                    src={news.img}
                    alt={news.title}
                    className="object-cover w-full h-32"
                  />
                  <div className="p-3">
                    <p className="font-semibold text-[15px] leading-snug">
                      {news.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide4;
