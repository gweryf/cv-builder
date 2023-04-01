import { defaults } from "autoprefixer";
import React from "react";
import { useState } from "react";
import InfoForm from "./infoform";

function Form() {

    const [details, setDetails] = useState([])

    function handleSubmit(event) {
        event.preventDefault();
        console.log(details);
    }

    return(
        <>
            <div className=" text-center p-10 flex flex-col">
                <InfoForm detail={details}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Form