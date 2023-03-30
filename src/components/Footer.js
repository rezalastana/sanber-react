import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" p-4 container mx-auto bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Flowbite™
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/job-vacancy"
                            className="mr-4 hover:underline md:mr-6 "
                        >
                            Job Vacancy
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
