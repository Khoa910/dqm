import { useRef } from 'react';
import { usePageTransition } from '../../hooks/usePageTransition';

const LeadershipPage = () => {
  const pageRef = useRef(null);
  usePageTransition(pageRef);

  const leaders = [
    {
      name: "Nguyễn Văn A",
      position: "Chủ tịch HĐQT",
      description: "Hơn 30 năm kinh nghiệm trong lĩnh vực bất động sản và xây dựng"
    },
    {
      name: "Trần Thị B",
      position: "Tổng Giám đốc",
      description: "Chuyên gia cao cấp về quản lý dự án và phát triển kinh doanh"
    },
    {
      name: "Lê Văn C",
      position: "Phó Tổng Giám đốc",
      description: "20 năm kinh nghiệm trong lĩnh vực tài chính và đầu tư"
    }
  ];

  return (
    <div ref={pageRef} className="min-h-screen p-8 opacity-0">
      <h1 className="text-4xl font-bold mb-8">Đội ngũ lãnh đạo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200">
              {/* Placeholder for leader's photo */}
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{leader.name}</h3>
            <p className="text-blue-600 text-center mb-4">{leader.position}</p>
            <p className="text-gray-600 text-center">{leader.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-semibold mb-6">Triết lý lãnh đạo</h2>
        <p className="text-gray-700">
          Đội ngũ lãnh đạo của Đại Quang Minh luôn đề cao việc phát triển bền vững, 
          đặt chất lượng và uy tín lên hàng đầu. Chúng tôi tin rằng thành công đến 
          từ sự kết hợp giữa tầm nhìn chiến lược và việc thực thi chuyên nghiệp.
        </p>
      </div>
    </div>
  );
};

export default LeadershipPage;