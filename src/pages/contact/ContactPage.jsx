import { ChevronRight } from "lucide-react";
import ContactPic from "../../assets/contact.png"
import Address from "../../assets/address.png"
import Contact from "../../components/Contact"

const ContactPage = () => {
    return (
        <div className="relative">
            <div>
                <img src={ContactPic} alt="icon" className="w-full max-h-[400px]" />
                <div className="absolute z-10 flex items-center gap-2 text-sm top-28 left-36">
                    <span>Trang chủ</span>
                    <ChevronRight size={12} />
                    <span className="font-bold">Liên hệ</span>
                </div>
                <div className="absolute z-10 flex items-center gap-4 text-2xl top-36 left-36">
                    <span className="w-2 h-5 bg-[#BC8E40]"></span>
                    <span className="font-black ">LIÊN HỆ</span>
                </div>
            </div>
            <div className="flex justify-center m-8">
                <img src={Address} alt="icon" className="max-w-[450px] max-h-[280px] rounded-xl " />
                <div>
                    <h2 className="relative z-10 text-lg font-bold text-gray-800">
                        CÔNG TY CỔ PHẦN ĐẦU TƯ ĐỊA ỐC ĐẠI QUANG MINH
                    </h2>
                    <p className="relative z-10 flex gap-3 mb-2 text-gray-700">
                    <span>DAI QUANG MINH CORPORATION</span>
                    </p>
                    <p className="relative z-10 flex gap-3 mb-2 text-gray-700">
                    
                    <span>Số 2, Đường 13, Phường An Khánh, TP.Hồ Chí Minh, Việt Nam</span>
                    </p>
                    <p className="relative z-10 flex gap-3 mb-2 text-gray-700">
                    
                    <span>No.2, Street 13, An Khanh Ward, HCMC, Vietnam </span>
                    </p>
                    <p className="relative z-10 flex gap-3 mb-2 text-gray-700">
                    
                    <span>Tel: (028) 3742 5566 – Fax: (028) 3742 5578 - Website: www.thadico.vn</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;