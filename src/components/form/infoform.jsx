import { Input } from "postcss";
import React from "react";
import { useState } from "react";

function InfoForm() {
    return(
        <>
            <label>
                Name:
            </label><br/>
            <input
                className=" border border-black rounded-xl" 
                type={Text}
                placeholder='eg.) Priyam Shrivastava'/><br/>
            <label>
                Title:
            </label><br/>
            <input
                type={Text}
                className=" border border-black rounded-xl"
                placeholder="eg.)Frontend Developer"
            /><br/>
            <label>
                Email:
            </label><br/>
            <input
                type="email"
                className=" border border-black rounded-xl"
                placeholder="eg.)xxx@xxx.com"
            /><br/>
            <label>
                Phone:
            </label><br/>
            <input
                type={Number}
                className=" border border-black rounded-xl"
                placeholder="eg.)0123456789"
            /><br/>
            <label>
                Github URL:
            </label><br/>
            <input
                type={Text}
                className=" border border-black rounded-xl"
                placeholder="eg.)https://github.com/gweryf"
            /><br/>
            <label>
                LinkedIn URL:
            </label><br/>
            <input
                type={Text}
                className=" border border-black rounded-xl"
                placeholder="eg.)https://www.linkedin.com/in/shrivastavpriyam/"
            /><br/>
        </>
    )
}

export default InfoForm