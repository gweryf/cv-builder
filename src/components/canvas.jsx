import React from "react";
import { useState } from "react";

function Canvas(props){
    return(
        <>
            <div>
                {props.contracts.name}
            </div>
            <div>
                {props.contracts.email}
            </div>
            <div>
                {props.contracts.phone}
            </div>
            <div>
                {props.contracts.linkedin}
            </div>
            <div>
                {props.contracts.github}
            </div>
        </>
    )
}

export default Canvas