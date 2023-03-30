import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

const FormJobVacancy = () => {
    // const [data, setData] = useState(null);

    const [input, setInput] = useState(
        // berbentuk object
        {
            name: "",
            course: "",
            score: 0,
        }
    );

    // const [fetchStatus, setFetchStatus] = useState(true);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setInput({ ...input, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
        } = input;

        //create data
        axios
            .post(
                "https://dev-example.sanbercloud.com/api/job-vacancy",
                {
                    title,
                    job_description,
                    job_qualification,
                    job_type,
                    job_tenure,
                    job_status,
                    company_name,
                    company_image_url,
                    company_city,
                    salary_min,
                    salary_max,
                },
                { headers: { Authorization: "Bearer " + Cookies.get("token") } }
            )
            .then((res) => {
                console.log(res);
                // setFetchStatus(true);
            });

        //clear input setelah create data
        setInput({
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: 0,
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: 0,
            salary_max: 0,
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-6 mt-10">
                    <label
                        htmlFor="title"
                        classtitle="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Title
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.title}
                        id="title"
                        name="title"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="job_description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Job Description
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.job_description}
                        id="job_description"
                        name="job_description"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="job_qualification"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Job Qualification
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.job_qualification}
                        id="job_qualification"
                        name="job_qualification"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="job_type"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Job Type
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.job_type}
                        id="job_type"
                        name="job_type"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="job_tenure"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Job Tenure
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.job_tenure}
                        id="job_tenure"
                        name="job_tenure"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="job_status"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Job Status
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.job_status}
                        id="job_status"
                        name="job_status"
                        type="number"
                        placeholder="0 dan 1. 0 untuk Ditutup, 1 untuk Dibuka"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="company_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Company Name
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.company_name}
                        id="company_name"
                        name="company_name"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="company_image_url"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Company Image
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.company_image_url}
                        id="company_image_url"
                        name="company_image_url"
                        type="text"
                        placeholder=" www.istockphoto.com klik kanan pada gambar lalu copy image address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="company_city"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Company City
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.company_city}
                        id="company_city"
                        name="company_city"
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="salary_min"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Salary Min
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.salary_min}
                        id="salary_min"
                        name="salary_min"
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="salary_max"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Salary Max
                    </label>
                    <input
                        onChange={handleInput}
                        value={input.salary_max}
                        id="salary_max"
                        name="salary_max"
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default FormJobVacancy;
