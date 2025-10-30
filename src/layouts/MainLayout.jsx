import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/gradient.css";

const MainLayout = () => {

    return (
        <div className="relative">
            {/* Navbar cố định */}
            <div className="gradient-border">
                <div className="w-full bg-white shadow-lg rounded-b-3xl">
                    <div className="pt-2 md:px-4 lg:px-8 xl:px-16">
                        <Navbar />
                    </div>
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