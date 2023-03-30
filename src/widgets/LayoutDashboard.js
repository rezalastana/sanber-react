import Sidebar from "../components/Sidebar";
import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LayoutDashboard = (props) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove("token");
        // jika berhasil hapus token,redirect ke
        navigate("/login");
    };
    // const user = JSON.parse(Cookies.get("user"));

    return (
        <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
            <div className="flex items-start justify-between">
                <Sidebar />
                <div className="flex flex-col w-full md:space-y-4">
                    {/* isi dari header */}
                    <header className="px-4 z-40 bg-blue-400 flex items-center justify-between w-full h-16">
                        {/* <h3 className=" font-bold">{user.name}</h3> */}
                        <span></span>
                        <span
                            onClick={handleLogout}
                            className="border-2 py-2 px-4 rounded-xl bg-red-500 hover:bg-blue-500 text-white"
                        >
                            Logout
                        </span>
                    </header>
                    {/* Isi dari konten */}
                    <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LayoutDashboard;
