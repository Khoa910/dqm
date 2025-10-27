import { useRef } from 'react';
import { usePageTransition } from '../../hooks/usePageTransition';

const VisionPage = () => {
  const pageRef = useRef(null);
  usePageTransition(pageRef);

  return (
    <div ref={pageRef} className="min-h-screen p-8 opacity-0">
      <h1 className="text-4xl font-bold mb-6">Tầm nhìn & Sứ mệnh</h1>
      <div className="prose max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tầm nhìn</h2>
          <p className="text-gray-700">
            Trở thành tập đoàn bất động sản và xây dựng hàng đầu Việt Nam, 
            kiến tạo những công trình biểu tượng và không gian sống đẳng cấp, 
            góp phần vào sự phát triển bền vững của đất nước.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Sứ mệnh</h2>
          <p className="text-gray-700">
            Không ngừng sáng tạo và phát triển để mang đến những giá trị bền vững cho khách hàng, 
            đối tác và cộng đồng thông qua việc kiến tạo những công trình chất lượng 
            và dịch vụ hoàn hảo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Giá trị cốt lõi</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Chất lượng và Sáng tạo</li>
            <li>Tận tâm và Chuyên nghiệp</li>
            <li>Uy tín và Trách nhiệm</li>
            <li>Phát triển bền vững</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VisionPage;