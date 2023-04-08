import React from "react";
import { useState } from "react";

function Form({addContract}) {
    const [details, UpdateDetails] = useState({})

    function handleChange(event) {
        UpdateDetails({...details, [event.target.name]:event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(details);
        addContract(details)
    }

    return(
        <div className="border w-full md:mx-20 text-center p-4 shadow-lg my-7 bg-gray-50">
            <form action="" onSubmit={handleSubmit}>

                {/* personal details */}
                <h3 className=" text-xl">Personal Details</h3>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none"
                /><br/>
                <input
                    name="phone"
                    type="text"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="E-Mail"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="linkedin"
                    type="text"
                    onChange={handleChange}
                    placeholder="LinkedIn URL"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="github"
                    type="text"
                    placeholder="GitHub URL"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <textarea name="descrp" onChange={handleChange} className="my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800" rows="4" placeholder="Description"></textarea>

                {/* Work Experience */}
                <h3 className=" text-xl">Experience</h3>
                <input
                    name="company1"
                    type="text"
                    placeholder="Company Name"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="position1"
                    type="text"
                    onChange={handleChange}
                    placeholder="About your Position"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="startDate1"
                    type="text"
                    placeholder="Start Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="endDate1"
                    type="text"
                    placeholder="End Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="company2"
                    type="text"
                    placeholder="Company Name"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="position2"
                    type="text"
                    onChange={handleChange}
                    placeholder="About your Position"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="startDate2"
                    type="text"
                    placeholder="Start Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="endDate2"
                    type="text"
                    placeholder="End Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="company3"
                    type="text"
                    placeholder="Company Name"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="position3"
                    type="text"
                    onChange={handleChange}
                    placeholder="About your Position"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="startDate3"
                    type="text"
                    placeholder="Start Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="endDate3"
                    type="text"
                    placeholder="End Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="company4"
                    type="text"
                    placeholder="Company Name"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="position4"
                    type="text"
                    onChange={handleChange}
                    placeholder="About your Position"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="startDate4"
                    type="text"
                    placeholder="Start Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-red-600"
                /><br/>
                <input
                    name="endDate4"
                    type="text"
                    placeholder="End Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>

                {/* Education Details   */}
                <h3 className=" text-xl">Education</h3>
                <input
                    name="university1"
                    type="text"
                    placeholder="University Name"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="degree1"
                    type="text"
                    onChange={handleChange}
                    placeholder="Degree"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="coursestart1"
                    type="text"
                    placeholder="Start Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="courseend1"
                    type="text"
                    placeholder="End Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>

                <input
                    name="university2"
                    type="text"
                    placeholder="University Name"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="degree2"
                    type="text"
                    onChange={handleChange}
                    placeholder="Degree"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="coursestart2"
                    type="text"
                    placeholder="Start Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name="courseend2"
                    type="text"
                    placeholder="End Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <button type="submit" className=" my-2 rounded-lg border border-black px-5 py-1 transform transition duration-300 hover:scale-110 hover:bg-gray-300">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form