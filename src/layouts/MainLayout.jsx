import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import RightPagination from "../components/RightPagination";
import useNavigationState from "../hooks/useNavigationState";
import "../css/gradient.css";

const MainLayout = () => {
    const location = useLocation();
    const { currentPage, rightPaginationSlides, setCurrentPage } = useNavigationState();
    
    // Chỉ hiển thị RightPagination khi ở các route thuộc "Về Đại Quang Minh"
    const showRightPagination = location.pathname.includes('/about') || 
                              location.pathname.includes('/vision') ||
                              location.pathname.includes('/leadership') ||
                              location.pathname.includes('/history');

    return (
        <div className="relative">
            {/* Navbar cố định */}
            <div className="gradient-border" style={{ overflow: 'visible' }}>
                <div className="w-full bg-white shadow-lg rounded-b-3xl" style={{ overflow: 'visible' }}>
                    <div className="pt-2 md:px-4 lg:px-8 xl:px-16" style={{ overflow: 'visible', position: 'relative' }}>
                        <Navbar />
                    </div>
                </div>
            </div>

            {/* Right Pagination cho các trang "Về Đại Quang Minh" */}
            {/* {showRightPagination && (
                <RightPagination
                    current={currentPage}
                    slides={rightPaginationSlides}
                    onSlideClick={setCurrentPage}
                />
            )} */}

            {/* Nội dung chính */}
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;