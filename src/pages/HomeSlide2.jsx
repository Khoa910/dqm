import '../css/gradient.css'
import arrow from "../assets/arrow.png"

const HomeSlide2 = () => {
    return(
        <div className="max-w-4xl p-8 pt-64 mx-auto text-center text-black">
            <h1 className="mb-6 text-3xl font-bold text-[#B38440]">VỀ ĐẠI QUANG MINH</h1>
            <p className="text-lg leading-relaxed">
                <span className="text-[#BC8E40]">ĐẠI QUANG MINH</span> là Tập đoàn thành viên của <span className="text-[#00529B]">THACO</span> hoạt động trong lĩnh vực đầu tư xây dựng, thực
                hiện chiến lược đầu tư, xây dựng và kinh doanh, quản lý vận hành các dự án hạ tầng giao thông, khu công
                nghiệp, khu đô thị và các dự án bất động sản, có tính tích hợp, bổ trợ, tạo ra sự khác biệt và ưu thế cạnh
                tranh cho <span className="text-[#00529B]">THACO</span> và các Tập đoàn thành viên.
            </p>
            <div className="flex justify-center pt-16">
              <button className="flex items-center gap-2 px-10 text-lg gradient-button text-[#BC8E40]">
                Xem tiếp
                <img src={arrow} alt="arrow" className="w-5 h-5 invert-[0.6] sepia-[1] saturate-[10] hue-rotate-[10deg] brightness-[1.1]" />
              </button>
            </div>
        </div>
    )
}

export default HomeSlide2;