import React, {useEffect, useState} from "react";
function Educational({addeduDetails}) {
    const [eduID, seteduID] = useState(1)
    const [eduDetails, seteduDetails] = useState({})
    const itemsList = []

    const addHandle = ()=>{
        seteduID(eduID+1)
    }

    const handleChange = (event) => {
        seteduDetails({...eduDetails, [event.target.name]:event.target.value})
    }

    useEffect(()=>{
        addeduDetails(eduDetails)
    },[eduDetails])

    for (let i = 0; i < eduID; i++) {
        const delHandle = ()=>{
            if(eduID>0) {
                delete eduDetails[`uniname${i}`]
                delete eduDetails[`degree${i}`]
                delete eduDetails[`startCourse${i}`]
                delete eduDetails[`endCourse${i}`]
                seteduID(eduID-1)
            }
        }
        itemsList.push(
            <>
                <input
                    name={`uniname${i}`}
                    type="text"
                    placeholder="University Name"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none"
                /><br/>
                <input
                    name={`degree${i}`}
                    type="text"
                    placeholder="Degree"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name={`startCourse${i}`}
                    type="text"
                    placeholder="Course Start"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name={`endCourse${i}`}
                    type="text"
                    placeholder="End Date"
                    onChange={handleChange}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <button onClick={delHandle} className=" my-2 rounded-lg border border-black px-5 py-1 transform transition duration-300 hover:scale-110 hover:bg-gray-300">
                    Delete Field
                </button><br/>
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