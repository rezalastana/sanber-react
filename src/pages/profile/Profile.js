import Cookies from "js-cookie";
import React from "react";

const Profile = () => {
    const user = JSON.parse(Cookies.get("user"));

    return (
        <div className="w-full flex justify-center items-center">
            <div class="bg-white shadow-lg rounded-2xl w-80 dark:bg-gray-800">
                <div class="flex flex-col items-center justify-center p-4">
                    <span class="relative block">
                        <img
                            alt="profil"
                            src={user.image_url}
                            class="mx-auto object-cover rounded-full h-32 w-32 border-2 border-white dark:border-gray-800"
                        />
                    </span>
                    <p class="mt-2 mb-10 text-2xl font-medium text-gray-800 dark:text-white">
                        {user.name}
                    </p>

                    <p class="p-2 px-4 text-xs text-white bg-sky-500 rounded-full">
                        {user.email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
