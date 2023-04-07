import React from "react";
import { useState } from "react";

function Form() {
    const [details, UpdateDetails] = useState({})

    function handleChange(event) {
        UpdateDetails({...details, [event.target.name]:event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(details);
    }

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    className=" border-solid border-black border-2"
                /><br/>
                <input
                    name="phone"
                    type="number"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className=" border-solid border-black border-2"
                /><br/>
                <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="E-MAIL"
                    className=" border-solid border-black border-2"
                /><br/>
                <input
                    name="linkedin"
                    type="text"
                    onChange={handleChange}
                    placeholder="LinkedIn URL"
                    className=" border-solid border-black border-2"
                /><br/>
                <input
                    name="github"
                    type="text"
                    placeholder="GitHub URL"
                    onChange={handleChange}
                    className=" border-solid border-black border-2"
                /><br/>
                <input
                    name="company-name"
                    type="text"
                    placeholder="Company Name"
                    onChange={handleChange}
                    className=" border-solid border-black border-2"
                /><br/>
                <input
                    name="company-position"
                    type="text"
                    onChange={handleChange}
                    placeholder="Position"
                    className=" border-solid border-black border-2"
                /><br/>
                <input
                    name="Start Date"
                    type="number"
                    placeholder="Start Date"
                    onChange={handleChange}
                    className=" border-solid border-black border-2"
                /><br/>
                <input
                    name="End Date"
                    type="number"
                    placeholder="End Date"
                    onChange={handleChange}
                    className=" border-solid border-black border-2"
                /><br/>
                <button
                    type="submit"
                    className=" rounded-lg border-2 border-black border-solid p-2"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default Form