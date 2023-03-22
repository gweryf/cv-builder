import { defaults } from "autoprefixer";
import React from "react";
import { useState } from "react";
import InfoForm from "./infoform";

function Form() {
    return(
        <>
            <div className=" text-center p-10 flex flex-col">
                <InfoForm/>
            </div>
        </>
    )
}

export default Form