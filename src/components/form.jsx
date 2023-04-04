import React from "react";
import { useState } from "react";

function Form() {
    return(
        <>
            <input
                name="name"
                type="text"
                placeholder="Name"
                className=" border-solid border-black border-2"
            /><br/>
            <input
                name="phone"
                type="number"
                placeholder="Phone Number"
                className=" border-solid border-black border-2"
            /><br/>
            <input
                name="email"
                type="email"
                placeholder="E-MAIL"
                className=" border-solid border-black border-2"
            /><br/>
            <input
                name="linkedin"
                type="text"
                placeholder="LinkedIn URL"
                className=" border-solid border-black border-2"
            /><br/>
            <input
                name="github"
                type="text"
                placeholder="GitHub URL"
                className=" border-solid border-black border-2"
            /><br/>
            <input
                name="company-name"
                type="text"
                placeholder="Company Name"
                className=" border-solid border-black border-2"
            /><br/>
            <input
                name="company-position"
                type="text"
                placeholder="Position"
                className=" border-solid border-black border-2"
            /><br/>
            <input
                name="Start Date"
                type="number"
                placeholder="Start Date"
                className=" border-solid border-black border-2"
            /><br/>
            <input
                name="End Date"
                type="number"
                placeholder="End Date"
                className=" border-solid border-black border-2"
            /><br/>
            <button
                type="submit"
                className=" rounded-lg border-2 border-black border-solid p-2"
            >
                Submit
            </button>
        </>
    )
}

export default Form