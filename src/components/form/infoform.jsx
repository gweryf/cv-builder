import { Input } from "postcss";
import React from "react";
import { useState } from "react";

function InfoForm() {


    function handleChange(event) {
        setDetails({...details, [event.target.name]: event.target.value})
    }

    return(
        <>
            <label>
                Name:
            </label><br/>
            <input
                name="name"
                className=" border border-black rounded-xl" 
                type='text'
                placeholder='eg.) Priyam Shrivastava'/><br/>
            <label>
                Title:
            </label><br/>
            <input
                name="title"
                type='text'
                className=" border border-black rounded-xl"
                placeholder="eg.)Frontend Developer"
            /><br/>
            <label>
                Email:
            </label><br/>
            <input
                name="email"
                type="email"
                className=" border border-black rounded-xl"
                placeholder="eg.)xxx@xxx.com"
            /><br/>
            <label>
                Phone:
            </label><br/>
            <input
                name="phone"
                type='number'
                className=" border border-black rounded-xl"
                placeholder="eg.)0123456789"
            /><br/>
            <label>
                Github URL:
            </label><br/>
            <input
                name="github"
                type='text'
                className=" border border-black rounded-xl"
                placeholder="eg.)https://github.com/gweryf"
            /><br/>
            <label>
                LinkedIn URL:
            </label><br/>
            <input
                name="linkedin"
                type='text'
                className=" border border-black rounded-xl"
                placeholder="eg.)https://www.linkedin.com/in/shrivastavpriyam/"
            /><br/>
            <label>
                Career Outcome:
            </label><br/>
            <textarea
                name="descrp"
                type='text'
                className=" border border-black rounded-xl"
                placeholder="What you want to achieve in your career"
            /><br/>
        </>
    )
}

export default InfoForm