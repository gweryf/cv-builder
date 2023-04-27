import React, {useEffect, useState} from "react";
function Educational({addeduDetails}) {
    const [eduDetails, seteduDetails] = useState([{}])

    const addHandle = ()=>{
        seteduDetails([...eduDetails, {}])
    }

    const handleChange = (event, index) => {
        const list = [...eduDetails]
        const {name, value} = event.target
        list[index][`${name}`] = value
        seteduDetails(list)
    }

    const delHandle = (index)=>{
        const list = [...eduDetails]
        list.splice(index,1)
        seteduDetails(list)
    }

    useEffect(()=>{
        console.log(eduDetails);
        addeduDetails(eduDetails)
    },[eduDetails])

    return(
        <>
            {eduDetails.map((eduDetail, index)=>(
                <>
                <input
                    name='uniname'
                    type="text"
                    placeholder="University Name"
                    onChange={(e)=>handleChange(e,index)}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none"
                /><br/>
                <input
                    name='degree'
                    type="text"
                    placeholder="Degree"
                    onChange={(e)=>handleChange(e,index)}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name='startCourse'
                    type="text"
                    placeholder="Course Start"
                    onChange={(e)=>handleChange(e,index)}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name='endCourse'
                    type="text"
                    placeholder="End Date"
                    onChange={(e)=>handleChange(e,index)}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                {eduDetails.length>1&&
                (
                    <>
                        <button onClick={()=>delHandle(index)} className=" my-2 rounded-lg border border-black px-5 py-1 transform transition duration-300 hover:scale-110 hover:bg-gray-300">
                            Delete Field
                        </button><br/>
                    </>
                )}
                {eduDetails.length-1===index && eduDetails.length<4 &&
                (
                    <>
                        <button onClick={addHandle} className=" my-2 rounded-lg border border-black px-5 py-1 transform transition duration-300 hover:scale-110 hover:bg-gray-300">
                            Add Field
                        </button><br />
                    </>
                )}
            </>
            ))}
        </>
    )
}

export default Educational