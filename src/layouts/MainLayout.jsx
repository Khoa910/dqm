import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="relative">
            {/* Navbar cố định */}
            <div className="fixed top-0 z-50 bg-green-200 rounded-lg shadow left-12 right-12">
                <div className="px-4 md:px-8 lg:px-16 xl:px-32">
                <Navbar />
                </div>
            </div>

            {/* Nội dung chính */}
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;