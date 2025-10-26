import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="relative">
            {/* Navbar cố định */}
            <div className="fixed top-0 left-10 right-10 z-50 w-[1450px] bg-white shadow rounded-lg">
                <div className="px-4 md:px-8 lg:px-16 xl:px-32">
                <Navbar />
                </div>
            </div>

            {/* Nội dung chính */}
            <div className="px-4 pt-16 md:pt-28 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;