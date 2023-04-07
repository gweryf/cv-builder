import React from "react";
import { useState } from "react";
import phone from "../assets/phone.jpg"
import linkedin from "../assets/linkedin.png"
import github from "../assets/GitHub-Mark.png"
import email from "../assets/email.png"

function Canvas(props){
    return(
        <div className=" mx-auto border p-4 max-w-xl max-h-xl shadow-lg my-7">
            
            {/* Name */}
            <div className=" text-4xl font-bold p-4 text-center">
                {props.contracts.name}
            </div>

            {/* Contact Details */}
            <div className=" flex gap-2 items-center justify-center">
                <img src={phone} className=" w-7" alt="" />
                {props.contracts.phone}
                <a className=" cursor-pointer flex gap-2 items-center justify-center" href={props.contracts.linkedin}>
                    <img src={linkedin} className=" w-5 h-5"/>
                    LinkedIn
                </a>
                <a className=" cursor-pointer flex gap-2 items-center justify-center" href={props.contracts.github}>
                    <img src={github} className=" w-7" alt="" />
                    Github
                </a>
                <img src={email} className=" w-7 h-6" alt="" />
                {props.contracts.email} 
            </div>

            {/* Description */}
            <div className=" text-xl font-semibold py-3 border-b border-gray-700">
                Description
            </div>
            <div>
                {props.contracts.descrp}
            </div>

            {/* Experience */}
            <div>
            </div>
            <div>
                {props.contracts.descrp}
            </div>
        </div>
    )
}

export default Canvas