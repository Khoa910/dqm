// import { useRef } from 'react';
// import { usePageTransition } from '../../hooks/usePageTransition';

// const LeadershipPage = () => {
//   const pageRef = useRef(null);
//   usePageTransition(pageRef);

//   const leaders = [
//     {
//       name: "Nguyễn Văn A",
//       position: "Chủ tịch HĐQT",
//       description: "Hơn 30 năm kinh nghiệm trong lĩnh vực bất động sản và xây dựng"
//     },
//     {
//       name: "Trần Thị B",
//       position: "Tổng Giám đốc",
//       description: "Chuyên gia cao cấp về quản lý dự án và phát triển kinh doanh"
//     },
//     {
//       name: "Lê Văn C",
//       position: "Phó Tổng Giám đốc",
//       description: "20 năm kinh nghiệm trong lĩnh vực tài chính và đầu tư"
//     }
//   ];

//   return (
//     <div ref={pageRef} className="min-h-screen p-8 opacity-0">
//       <h1 className="mb-8 text-4xl font-bold">Đội ngũ lãnh đạo</h1>
      
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {leaders.map((leader, index) => (
//           <div 
//             key={index}
//             className="p-6 transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
//           >
//             <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full">
//               {/* Placeholder for leader's photo */}
//             </div>
//             <h3 className="mb-2 text-xl font-bold text-center">{leader.name}</h3>
//             <p className="mb-4 text-center text-blue-600">{leader.position}</p>
//             <p className="text-center text-gray-600">{leader.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-12 prose max-w-none">
//         <h2 className="mb-6 text-2xl font-semibold">Triết lý lãnh đạo</h2>
//         <p className="text-gray-700">
//           Đội ngũ lãnh đạo của Đại Quang Minh luôn đề cao việc phát triển bền vững, 
//           đặt chất lượng và uy tín lên hàng đầu. Chúng tôi tin rằng thành công đến 
//           từ sự kết hợp giữa tầm nhìn chiến lược và việc thực thi chuyên nghiệp.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LeadershipPage;