// import { useRef } from 'react';
// import { usePageTransition } from '../../hooks/usePageTransition';

// const HistoryPage = () => {
//   const pageRef = useRef(null);
//   usePageTransition(pageRef);

//   const milestones = [
//     {
//       year: "2000",
//       title: "Thành lập công ty",
//       description: "Công ty Cổ phần Đại Quang Minh chính thức được thành lập"
//     },
//     {
//       year: "2005",
//       title: "Dự án đầu tiên",
//       description: "Khởi công dự án đầu tiên tại TP.HCM"
//     },
//     {
//       year: "2010",
//       title: "Mở rộng thị trường",
//       description: "Phát triển các dự án tại nhiều tỉnh thành trên cả nước"
//     },
//     {
//       year: "2015",
//       title: "Phát triển vượt bậc",
//       description: "Trở thành một trong những công ty BĐS hàng đầu Việt Nam"
//     },
//     {
//       year: "2020",
//       title: "Định hướng tương lai",
//       description: "Phát triển theo hướng bền vững, thân thiện với môi trường"
//     }
//   ];

//   return (
//     <div ref={pageRef} className="min-h-screen p-8 opacity-0">
//       <h1 className="mb-8 text-4xl font-bold">Lịch sử phát triển</h1>

//       <div className="relative">
//         {/* Timeline line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

//         {/* Timeline items */}
//         {milestones.map((milestone, index) => (
//           <div 
//             key={index}
//             className={`relative flex items-center justify-between mb-12 ${
//               index % 2 === 0 ? 'flex-row-reverse' : ''
//             }`}
//           >
//             {/* Content */}
//             <div className="w-5/12">
//               <div className="p-6 transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl">
//                 <h3 className="mb-2 text-xl font-bold">{milestone.title}</h3>
//                 <p className="text-gray-600">{milestone.description}</p>
//               </div>
//             </div>

//             {/* Year marker */}
//             <div className="absolute flex flex-col items-center transform -translate-x-1/2 left-1/2">
//               <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
//                 <div className="w-4 h-4 bg-white rounded-full"></div>
//               </div>
//               <span className="mt-2 font-bold text-blue-600">{milestone.year}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-12 prose max-w-none">
//         <h2 className="mb-6 text-2xl font-semibold">Tầm nhìn tương lai</h2>
//         <p className="text-gray-700">
//           Với hơn 20 năm phát triển, Đại Quang Minh đã và đang không ngừng đổi mới, 
//           nâng cao năng lực để trở thành một trong những tập đoàn bất động sản 
//           hàng đầu tại Việt Nam.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HistoryPage;