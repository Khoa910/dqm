import introBg from "../assets/introduce-bg.jpg"

const HomeSlide2 = () => {
    return(
        <div className="fixed inset-0 flex items-center justify-center z-[9999]"
              style={{
                backgroundImage: `url(${introBg})`, // Sử dụng ảnh nền
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
            <h1>VỀ ĐẠI QUANG MINH</h1>
            <span>ĐẠI QUANG MINH là Tập đoàn thành viên của THACO hoạt động trong lĩnh vực đầu tư xây dựng, thực
                hiện chiến lược đầu tư, xây dựng và kinh doanh, quản lý vận hành các dự án hạ tầng giao thông, khu công
                nghiệp, khu đô thị và các dự án bất động sản, có tính tích hợp, bổ trợ, tạo ra sự khác biệt và ưu thế cạnh
                tranh cho THACO và các Tập đoàn thành viên.</span>
        </div>
    )
}

export default HomeSlide2;