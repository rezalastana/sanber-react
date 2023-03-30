import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(input);

        let { email, password } = input;

        axios
            .post("https://dev-example.sanbercloud.com/api/login", {
                email,
                password,
            })
            .then((e) => {
                let data = e.data;
                console.log(data);

                let { token, user } = data;
                console.log(token);
                console.log(user);

                Cookies.set("token", token, { expires: 1 });
                Cookies.set("user", JSON.stringify(user), { expires: 1 });
                // jika berhasil login, redirect ke halaman depan
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full max-w-xs">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            onChange={handleChange}
                            value={input.email}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            onChange={handleChange}
                            value={input.password}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                    <div>
                        <Link to="/register">
                            <p className="mt-4 text-blue-600 text-md">
                                Register
                            </p>
                        </Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    ©2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;
