import React from "react";
import { useState } from "react";
import phone from "../assets/phone.jpg"
import linkedin from "../assets/linkedin.png"
import github from "../assets/GitHub-Mark.png"
import email from "../assets/email.png"

function Canvas(props){
    return(
        <div className=" border p-4 w-full md:mx-20 self-start shadow-lg my-7">
            <div id="element-to-print">
                {/* Name */}
                <div className=" text-4xl font-bold p-4 text-center">
                    {props.contracts.name}
                </div>

                {/* Contact Details */}
                <div className=" flex gap-2 items-center justify-center py-3  text-xs md:text-base">
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
                <div className=" py-2 text-sm">
                    {props.contracts.descrp}
                </div>

                {/* Experience */}
                <div className=" text-xl font-semibold py-3 border-b border-gray-700">
                    Experience
                </div>
                <div className=" my-1 px-2">
                    <div className=" flex justify-between">
                        <div className=" font-medium">{props.contracts.company1}</div>
                        <div>{props.contracts.startDate1}-{props.contracts.endDate1}</div>
                    </div>
                    <div>
                        {props.contracts.position1}
                    </div>
                </div>

                <div className=" my-1 px-2">
                    <div className=" flex justify-between">
                        <div className=" font-medium">{props.contracts.company2}</div>
                        <div>{props.contracts.startDate2}-{props.contracts.endDate2}</div>
                    </div>
                    <div>
                        {props.contracts.position2}
                    </div>
                </div>

                <div className=" my-1 px-2">
                    <div className=" flex justify-between">
                        <div className=" font-medium">{props.contracts.company3}</div>
                        <div>{props.contracts.startDate3}-{props.contracts.endDate3}</div>
                    </div>
                    <div>
                        {props.contracts.position3}
                    </div>
                </div>
                <div className=" my-1 px-2">
                    <div className=" flex justify-between">
                        <div className=" font-medium">{props.contracts.company4}</div>
                        <div>{props.contracts.startDate4}-{props.contracts.endDate4}</div>
                    </div>
                    <div>
                        {props.contracts.position4}
                    </div>
                </div>

                {/* Education */}
                <div className=" text-xl font-semibold py-3 border-b border-gray-700">
                    Education
                </div>

                <div className=" my-1 px-2">
                    <div className=" flex justify-between">
                        <div className=" font-medium">{props.contracts.uniname0}</div>
                        <div>{props.contracts.startCourse0}-{props.contracts.endCourse0}</div>
                    </div>
                    <div>
                        {props.contracts.degree0}
                    </div>
                </div>

                <div className=" my-1 px-2">
                    <div className=" flex justify-between">
                        <div className=" font-medium">{props.contracts.uniname1}</div>
                        <div>{props.contracts.startCourse1}-{props.contracts.endCourse1}</div>
                    </div>
                    <div>
                        {props.contracts.degree1}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Canvas