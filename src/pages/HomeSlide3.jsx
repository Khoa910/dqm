import { useState } from "react";
import realEstate from "../assets/building.png";
import urban from "../assets/city2.png";
import transport from "../assets/bridge.png";
import industry from "../assets/factory.png";
import { Building2, Landmark, TrafficCone, Factory, Hexagon } from "lucide-react";
import HexagonSvg from "../components/HexagonSvg"

const HomeSlide3 = () => {
  const [active, setActive] = useState(0);

  const data = [
    {
      title: "BẤT ĐỘNG SẢN",
      icon: <Building2 className="w-10 h-10" />,
      image: realEstate,
      content: `THADICO đầu tư xây dựng các dự án bất động sản với đa dạng dòng
      sản phẩm như biệt thự, nhà phố và căn hộ cao cấp, được quy hoạch 
      hài hòa trong khu đô thị và chú trọng đến công năng sử dụng. Các dự án 
      này không chỉ đầy đủ tiện ích nội khu mà còn gia tăng giá trị cuộc sống 
      cho gia đình. Ngoài ra, THADICO còn phát triển các bất động sản phức hợp 
      như trung tâm thương mại, siêu thị, kết hợp với các tiện ích như trung tâm 
      hội nghị, tháp văn phòng, khách sạn, căn hộ và showroom ô tô.`,
    },
    {
      title: "KHU ĐÔ THỊ",
      icon: <Landmark className="w-10 h-10" />,
      image: urban,
      content: `Công ty đầu tư phát triển các dự án khu đô thị mới và khu đô thị 
      chỉnh trang theo xu hướng sinh thái cao cấp. Những khu đô thị này 
      được quy hoạch tổng thể đồng bộ, trang bị đầy đủ các tiện ích nội khu 
      như trường học quốc tế, trung tâm thể dục thể thao, công viên… và kết hợp 
      hài hòa với cảnh quan thiên nhiên, mang đến cho cư dân những trải nghiệm 
      sống cao cấp, gần gũi với thiên nhiên, đồng thời góp phần thúc đẩy phát triển 
      kinh tế - xã hội địa phương.`,
    },
    {
      title: "HẠ TẦNG GIAO THÔNG",
      icon: <TrafficCone className="w-10 h-10" />,
      image: transport,
      content: `THADICO đầu tư và xây dựng các công trình giao thông - hạ tầng kỹ 
      thuật với tính đồng bộ, kiến trúc nổi bật và tính mỹ thuật cao. Những công 
      trình này không chỉ đáp ứng yêu cầu kỹ thuật mà còn trở thành biểu tượng 
      kiến trúc tiêu biểu tại nhiều địa phương trên cả nước, tạo dựng những giá trị 
      bền vững theo thời gian.`,
    },
    {
      title: "KHU CÔNG NGHIỆP",
      icon: <Factory className="w-10 h-10" />,
      image: industry,
      content: `THADICO tập trung phát triển các dự án khu công nghiệp chuyên 
      ngành quy mô lớn, được quy hoạch bài bản. Các dự án này không chỉ tạo ra 
      nguồn việc làm cho người lao động mà còn đóng góp giá trị cho nền kinh tế 
      địa phương.`,
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen pt-32 text-center text-gray-800 bg-center bg-cover"
    >
      {/* ==== ICON MENU ==== */}
      <div className="flex gap-10 mb-10">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`flex flex-col items-center gap-2 transition-all duration-300 ${
              active === index ? "text-[#BC8E40]" : "text-gray-600 hover:text-[#BC8E40]"
            }`}
          >
            <div
              className={`p-4 rounded-full border-2 ${
                active === index ? "border-[#BC8E40]" : "border-gray-300"
              }`}
            >
              {item.icon}
            </div>
          </button>
        ))}
      </div>

      {/* ==== CONTENT ==== */}
      <div className="max-w-4xl px-6">
        <h1 className="text-2xl font-bold mb-4 text-[#BC8E40]">{data[active].title}</h1>
        <p className="text-base leading-relaxed text-gray-700">{data[active].content}</p>
      </div>

      {/* ==== IMAGE ==== */}
      <div className="flex justify-center w-full mt-10">
        <HexagonSvg src={data[active].image}></HexagonSvg>
      </div>
    </div>
  );
};

export default HomeSlide3;
