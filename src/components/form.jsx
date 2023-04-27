import React from "react";
import { useState } from "react";
import Educational from "./educational";
import Experience from "./experience";

function Form({addContract}) {
    const [details, UpdateDetails] = useState({})

    function handleChange(event) {
        UpdateDetails({...details, [event.target.name]:event.target.value})
    }

    function addeduDetails(eduDetails){
        UpdateDetails({...details, eduDetails})
    }

    function addexpDetails(expDetails){
        UpdateDetails({...details, expDetails})
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
                <Experience addexpDetails={addexpDetails} />

                {/* Education Details   */}
                <h3 className=" text-xl">Education</h3>
                <Educational addeduDetails={addeduDetails} />
                <button type="submit" className=" my-2 rounded-lg border border-black px-5 py-1 transform transition duration-300 hover:scale-110 hover:bg-gray-300">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form