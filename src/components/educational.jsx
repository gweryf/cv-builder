import React, {useState} from "react";
function Educational(props) {
    const [eduID, seteduID] = useState(1)
    const itemsList = []

    const addHandle = ()=>{
        seteduID(eduID+1)
    }

    for (let i = 0; i < eduID; i++) {
        itemsList.push(
            <>
                <input
                    name={`uniname${eduID}`}
                    type="text"
                    placeholder="University Name"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none"
                /><br/>
                <input
                    name={`degree${eduID}`}
                    type="text"
                    placeholder="Degree"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name={`startCourse${eduID}`}
                    type="text"
                    placeholder="Course Start"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name={`endCourse${eduID}`}
                    type="text"
                    placeholder="End Date"
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
            </>
        );
    }

    return(
        <>
            {itemsList}
            <button onClick={addHandle} className=" my-2 rounded-lg border border-black px-5 py-1 transform transition duration-300 hover:scale-110 hover:bg-gray-300">
                Add Field
            </button><br/>
        </>
    )
}

export default Educational