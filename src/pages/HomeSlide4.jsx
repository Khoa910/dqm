import '../css/gradient.css'
import arrow from "../assets/arrow.png"

const HomeSlide4 = () => {
    return(
        <div className="pt-32 z-[9999]">
            <div className="flex items-center">
              TIN NỔI BẬT
              <div> TIN TỨC
                <span>SỰ KIỆN</span>
                <button className="flex items-center gap-2 px-10 text-lg gradient-button text-[#BC8E40]">
                  Xem tiếp
                  <img src={arrow} alt="arrow" className="w-5 h-5 invert-[0.6] sepia-[1] saturate-[10] hue-rotate-[10deg] brightness-[1.1]" />
                </button>
              </div>
            </div>
            <div className="rounded-lg">
              <img/>
              <h1>THADICO ĐẨY MẠNH TUYỂN DỤNG NGUỒN NHÂN LỰC CHẤT LƯỢNG</h1>
              <p>Trong bối cảnh ngành xây dựng – hạ tầng đang chuyển mình mạnh mẽ trước 
                xu thế chuyển đổi xanh và phát triển bền vững, Thadico đặt mục tiêu tái 
                định hình nguồn nhân lực chất lượng cao...</p>
              <span>Thứ tư, Ngày 12/12/2017, 08:12</span>
            </div>
            <div>

            </div>
        </div>
    )
}

export default HomeSlide4;