import React, {useEffect, useState} from "react";
function Experience({addexpDetails}) {
    const [expDetails, setexpDetails] = useState([{}])

    const addHandle = ()=>{
        setexpDetails([...expDetails, {}])
    }

    const handleChange = (event, index) => {
        const list = [...expDetails]
        const {name, value} = event.target
        list[index][`${name}`] = value
        setexpDetails(list)
    }

    const delHandle = (index)=>{
        const list = [...expDetails]
        list.splice(index,1)
        setexpDetails(list)
    }

    useEffect(()=>{
        console.log(expDetails);
        addexpDetails(expDetails)
    },[expDetails])

    return(
        <>
            {expDetails.map((expDetail, index)=>(
                <>
                <input
                    name='company'
                    type="text"
                    placeholder="Company Name"
                    onChange={(e)=>handleChange(e,index)}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none"
                /><br/>
                <input
                    name='position'
                    type="text"
                    placeholder="About Your Position"
                    onChange={(e)=>handleChange(e,index)}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name='startDate'
                    type="text"
                    placeholder="Start Date"
                    onChange={(e)=>handleChange(e,index)}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                <input
                    name='endDate'
                    type="text"
                    placeholder="End Date"
                    onChange={(e)=>handleChange(e,index)}
                    className=" my-1 w-full border border-gray-600 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-gray-800"
                /><br/>
                {expDetails.length>1&&
                (
                    <>
                        <button onClick={()=>delHandle(index)} className=" my-2 rounded-lg border border-black px-5 py-1 transform transition duration-300 hover:scale-110 hover:bg-gray-300">
                            Delete Field
                        </button><br/>
                    </>
                )}
                {expDetails.length-1===index && expDetails.length<4 &&
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

export default Experience