import React from "react";
import { useState } from "react";

let ind = 0

function CvForm() {

    const [sample, sampleUpdate] = useState([])

    function submitAction(e) {
        let value = document.getElementById("arrInput").value
        e.preventDefault()
        console.log(typeof sample);
        sample.push({
            id : ind++ ,
            name : value
        })
        displaySample(sample)
        value = ''
    }

    function displaySample(sample) {
        sample.map((ele)=>{
            document.getElementById('canvas').textContent += ele.value
        })
    }

    return(
        <form>
            <label className=" mx-auto flex text-center gap-2">
                Enter Your Name:
                <input id="arrInput" className=" border-2 border-inherit border-black" type='text' />
            </label>
            <button type="submit" onClick={submitAction} className=" border-2 border-inherit border-black p-1 rounded-xl">
                Submit
            </button>
            <div id="canvas"></div>
        </form>
    )
}

export default CvForm