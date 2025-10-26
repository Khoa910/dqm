// import { useState } from "react";
// // import Image from "./Image";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

// //   const { getToken } = useAuth();

// //   useEffect(() => {
// //     getToken().then((token) => { console.log(token) });
// //   }, [getToken]);

//   return (
//     <div className="flex items-center justify-between w-full h-16 md:h-20">
//       {/*LOGO*/}
//       <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
//         {/* <Image src="logo.png" alt="logo" w={32} h={32} /> */}
//         <img src="intro-logo.png" alt="logo" width={40} height={40} />
//         {/* <span>Blog</span> */}
//       </Link>
//       {/*Mobile Menu*/}
//       <div className="md:hidden">
//         {/*Mobile Button*/}
//         <div className="relative z-50 -ml-8 text-4xl cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
//           {/* {open ? <Image src="close.png" alt="twitterx" w={32} h={32} /> : 
//           <Image src="icons8-menu-94.png" alt="menu" w={32} h={32} />} */}
//           {open ? <img src="close.png" alt="twitterx" width={32} height={32} /> : 
//           <img src="icons8-menu-94.png" alt="menu" width={32} height={32} />}
//         </div>
//         {/*Mobile Link List*/}
//         {/* <div className={`bg-[#e6e6ff] p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out z-50 ${open ? "-right-0" : "-left-[100%]"}`}>
//           <Link to="/" onClick={() => setOpen(false)} className="px-4 py-2 transition bg-transparent rounded-3xl hover:bg-blue-800 hover:text-white">Home</Link>
//           <Link to="/" onClick={() => setOpen(false)} className="px-4 py-2 transition bg-transparent rounded-3xl hover:bg-blue-800 hover:text-white">Blogs</Link>
//           <Link to="/" onClick={() => setOpen(false)} className="px-4 py-2 transition bg-transparent rounded-3xl hover:bg-blue-800 hover:text-white">Write</Link>
//           <Link to="/" onClick={() => setOpen(false)} className="px-4 py-2 transition bg-transparent rounded-3xl hover:bg-blue-800 hover:text-white">Saved Posts</Link> */}
//         {/* </div> */}
//       </div>
//       {/*Desktop Menu*/}
//       <div className="items-center hidden md:flex flex-1 justify-around">
//         <Link to="/" className="hover:text-blue-600 transition-colors">VỀ ĐẠI QUANG MINH</Link>
//         <Link to="/" className="hover:text-blue-600 transition-colors">LĨNH VỰC HOẠT ĐỘNG</Link>
//         <Link to="/" className="hover:text-blue-600 transition-colors">TIN TỨC</Link>
//         <Link to="/" className="hover:text-blue-600 transition-colors">TUYỂN DỤNG</Link>
//         <Link to="/" className="hover:text-blue-600 transition-colors">LIÊN HỆ</Link>
//         <Link to="/" className="hover:text-blue-600 transition-colors">VI/EN</Link>
//         <Link to="/" className="hover:text-blue-600 transition-colors">TK</Link>
//       </div>

//     </div>
//   )
// }

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full h-16 md:h-20">
      {/*LOGO*/}
      <Link to="/" className="flex items-center text-2xl font-bold">
        <img src="intro-logo.png" alt="logo" className="w-10 h-10" />
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
      <div className="items-center hidden md:flex flex-1 justify-around">
        <Link to="/" className="hover:text-blue-600 transition-colors">VỀ ĐẠI QUANG MINH</Link>
        <Link to="/" className="hover:text-blue-600 transition-colors">LĨNH VỰC HOẠT ĐỘNG</Link>
        <Link to="/" className="hover:text-blue-600 transition-colors">TIN TỨC</Link>
        <Link to="/" className="hover:text-blue-600 transition-colors">TUYỂN DỤNG</Link>
        <Link to="/" className="hover:text-blue-600 transition-colors">LIÊN HỆ</Link>
        <Link to="/" className="hover:text-blue-600 transition-colors">VI/EN</Link>
        <Link to="/" className="hover:text-blue-600 transition-colors">TK</Link>
      </div>
    </div>
  )
}

export default Navbar;