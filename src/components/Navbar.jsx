import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/intro-logo.png";
import NavItem from "./effects/NavItem"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full h-16 md:h-20">
      {/*LOGO*/}
      <Link to="/" className="flex items-center text-2xl font-bold">
        <img src={logo} alt="logo" className="h-12 w-50" />
      </Link>
      {/*Mobile Menu*/}
      <div className="md:hidden">
        {/*Mobile Button*/}
        <div className="relative z-50 -ml-8 text-4xl cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
          {open ? <img src="close.png" alt="twitterx" width={32} height={32} /> : 
          <img src="icons8-menu-94.png" alt="menu" width={32} height={32} />}
        </div>
      </div>
      {/*Desktop Menu*/}
        <div className="items-center justify-around flex-1 hidden md:flex">
        <NavItem 
          label="VỀ ĐẠI QUANG MINH"
          subItems={[
            { label: "Giới thiệu", href: "/about" },
            { label: "Tầm nhìn - Sứ mệnh", href: "/vision" },
            { label: "Chiến lược cốt lõi", href: "/as" },
            { label: "Công ty thành viên", href: "/leadership" },
            { label: "Ban lãnh đạo", href: "/history" }
          ]}
        />
        <NavItem 
          label="LĨNH VỰC HOẠT ĐỘNG"
          subItems={[
            { label: "Hạ tầng giao thông", href: "/real-estate" },
            { label: "Khu đô thị", href: "/construction" },
            { label: "Bất động sản", href: "/materials" },
            { label: "Khu công nghiệp", href: "/interior" }
          ]}
        />
        <NavItem 
          label="TIN TỨC"
          subItems={[
            { label: "Tin tức", href: "/company-news" },
            { label: "Sự kiện", href: "/events" },
            { label: "Thông tin báo chí", href: "/market-news" },
            { label: "Thư viện", href: "/market-news" },
          ]}
        />
        <NavItem label="TUYỂN DỤNG"/>
        <NavItem label="LIÊN HỆ" />
        <Link to="/" className="transition-colors hover:text-blue-600">VI/EN</Link>
        <Link to="/" className="transition-colors hover:text-blue-600">TK</Link>
      </div>
    </div>
  )
}

export default Navbar;