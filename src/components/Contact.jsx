import building from "../assets/tuyendung.png"
import { Printer, MapPin, Phone } from "lucide-react";
import "../css/shapes.css"
import { HexagonGrid } from "./HexagonGrid"

const Contact = () => {
  return (
    <div className="relative flex-1 min-h-[66.666vh] overflow-hidden pt-36"
      style={{
        background: "linear-gradient(to bottom, #FFFCD5 0%, #BC8E40 100%)",
      }}
    >
      {/* Nội dung chính với gradient opacity từ trái sang phải */}
      <div className="relative z-10 flex items-center h-full">
        <div className="relative w-full max-w-5xl pl-8 md:pl-16 lg:pl-24 xl:pl-32">
          <div 
            className="relative p-8 overflow-hidden shadow-lg bg-white/80 rounded-2xl backdrop-blur-md"
            style={{
              maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)'
            }}
          >
            {/* Gradient overlay từ phải sang trái */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0) 100%)'
              }}
            />
            
            <h2 className="relative z-10 mb-4 text-xl font-bold text-gray-800">
              CÔNG TY CỔ PHẦN ĐẦU TƯ ĐỊA ỐC ĐẠI QUANG MINH
            </h2>
            <p className="relative z-10 flex gap-3 mb-2 text-gray-700">
              <MapPin size={18}/>
              <span><strong>Trụ sở:</strong> 10 Đ. Mai Chí Thọ, P.An Khánh, Tp.Hồ Chí Minh</span>
            </p>
            <p className="relative z-10 flex gap-3 mb-2 text-gray-700">
              <MapPin size={18}/>
              <span><strong>Văn phòng:</strong> Tòa nhà Sadora homes, số 02 đường 13, P.An Khánh, Tp.Hồ Chí Minh</span>
            </p>
            <p className="relative z-10 flex gap-3 mb-2 text-gray-700">
              <Phone size={18}/>
              <span><strong>Tel:</strong> (028) 3742 5566</span>
              <Printer size={18} className="ml-6"/>
              <span><strong>Fax:</strong> (028) 3742 5578</span>
            </p>
            <div className="relative z-10 flex items-center gap-4 mt-6">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#BC8E40] hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" viewBox="0 0 24 24" 
                    className="w-5 h-5">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.7-3.9c1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H18l-.5 3h-2.8v7A10 10 0 0 0 22 12z"/>
                </svg>
              </button>

              <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#BC8E40] hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" viewBox="0 0 24 24" 
                    className="w-5 h-5">
                  <path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-8 19h-3v-8h3v8zm-1.5-9.3a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zm10.5 9.3h-3v-4c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1v4.7h-3v-8h3v1c.4-.6 1.1-1.3 2.5-1.3 1.8 0 3.1 1.2 3.1 3.7v4.6z"/>
                </svg>
              </button>

              <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#BC8E40] hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" viewBox="0 0 24 24" 
                    className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7 8-5H4l8 5zm0 2-8-5v10h16V8l-8 5z"/>
                </svg>
              </button>

              <button className="text-[#BC8E40] px-6 py-2 rounded-lg gradient-hr relative">
                Tuyển Dụng →
              </button>
            </div>
          </div>
        </div>
      </div>
              
      <HexagonGrid className="flex justify-end" />
      <img
        src={building}
        alt="building"
        className="absolute bottom-0 right-[15%] w-[400px] h-auto max-h-[90%] z-10 object-contain"
      />

      {/* Footer text */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full bg-white ">
        <div className="flex flex-wrap items-center justify-between px-8 py-3 mx-auto text-sm text-gray-700 max-w-7xl">
          <span className="font-semibold">TẬP ĐOÀN THÀNH VIÊN THUỘC THACO GROUP</span>
          <div className="flex gap-6">
            <span>Chính sách bảo mật</span>
            <span>Điều khoản sử dụng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;