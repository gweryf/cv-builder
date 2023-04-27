import React from "react";
import { useState } from "react";
import phone from "../assets/phone.jpg"
import linkedin from "../assets/linkedin.png"
import github from "../assets/GitHub-Mark.png"
import email from "../assets/email.png"

function Canvas(props){
    const educationalDetails = props.contracts.eduDetails
    const experienceDetails = props.contracts.expDetails
    console.log(educationalDetails);
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
                {experienceDetails? experienceDetails.map((expDetail)=>(
                    <div className=" my-1 px-2">
                        <div className=" flex justify-between">
                            <div className=" font-medium">{expDetail.company}</div>
                            <div>{expDetail.startDate}-{expDetail.endDate}</div>
                        </div>
                        <div>
                           {expDetail.position}
                        </div>
                    </div>
                )):null}

                {/* Education */}
                <div className=" text-xl font-semibold py-3 border-b border-gray-700">
                    Education
                </div>
                {educationalDetails? educationalDetails.map((eduDetail)=>(
                    <div className=" my-1 px-2">
                        <div className=" flex justify-between">
                            <div className=" font-medium">{eduDetail.uniname}</div>
                            <div>{eduDetail.startCourse}-{eduDetail.endCourse}</div>
                        </div>
                            <div>
                                {eduDetail.degree}
                            </div>
                    </div>
                )):null}
            </div>
        </div>
    )
}

export default Canvas