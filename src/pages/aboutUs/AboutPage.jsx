// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useNavigationState from '../../hooks/useNavigationState';
// import IntroAbout from '../../components/effects/IntroAbout';
// import logo from "../../assets/intro-logo.png";
// import backgroundImage from "../../assets/intro-bg.jpg";

// const AboutPage = () => {
//   const navigate = useNavigate();
//   const { currentPage, rightPaginationSlides } = useNavigationState();
//   const [showIntro, setShowIntro] = useState(false);
//   const [introConfig, setIntroConfig] = useState(null);

//   useEffect(() => {
//     if (currentPage === 1) { // Khi chuyển sang slide 2
//       setIntroConfig({
//         logo: logo,
//         backgroundImage: backgroundImage,
//         currentBackground: backgroundImage,
//         duration: 3,
//         transitionType: 'slide'
//       });
//       setShowIntro(true);
//     }
//   }, [currentPage]);

//   const handleIntroFinish = () => {
//     setShowIntro(false);
//     // Chuyển hướng đến trang tương ứng sau khi intro kết thúc
//     const nextRoute = '/vision'; // Hoặc route tương ứng với slide được chọn
//     navigate(nextRoute);
//   };

//   if (showIntro) {
//     return (
//       <IntroAbout
//         onFinish={handleIntroFinish}
//         {...introConfig}
//       />
//     );
//   }

//   return (
//     <div className="min-h-screen p-8">
//       <h1 className="mb-6 text-4xl font-bold">Giới thiệu công ty</h1>
//       {/* Nội dung trang About */}
//       <div className="prose max-w-none">
//         {/* Thêm nội dung chi tiết về công ty ở đây */}
//       </div>
//     </div>
//   );
// };

// export default AboutPage;