import { Navbar } from "flowbite-react";
import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove("token");
        // jika berhasil hapus token,redirect ke
        navigate("/login");
    };

    return (
        <Navbar fluid={true} rounded={true}>
            <div className="container flex flex-wrap items-center justify-between mx-auto mt-4 mb-4">
                <Link to="/" className="flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-6 mr-3 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        JobHunter
                    </span>
                </Link>
                <div className="flex md:order-2">
                    {!Cookies.get("token") && (
                        <Link
                            className="border-2 py-2 px-4 rounded-xl bg-blue-700 hover:bg-blue-500 text-white"
                            to="/login"
                        >
                            Login
                        </Link>
                    )}
                    {Cookies.get("token") && (
                        <>
                            <Link
                                className="border-2 py-2 px-4 rounded-xl bg-blue-700 hover:bg-blue-500 text-white"
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>
                            <span
                                onClick={handleLogout}
                                className="border-2 py-2 px-4 rounded-xl bg-red-500 hover:bg-blue-500 text-white"
                            >
                                Logout
                            </span>
                        </>
                    )}
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pl-3 pr-4 md:border-none border-2 rounded-md text-black bg-transparent md:text-black hover:md:text-blue-500 md:p-0 dark:text-white hover:bg-blue-300"
                                aria-current="page"
                            >
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/job-vacancy"
                                className="block py-2 pl-3 pr-4 md:border-none border-2 rounded-md text-black bg-transparent md:text-black hover:md:text-blue-500 md:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Lowongan
                            </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Navigation;
