import React from "react";
import { useState } from "react";

function Header(){
    function handleDownload() {
        let element = document.getElementById('element-to-print')
        let opt = {
            margin:       1,
            filename:     'resume.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save()
    }
    return(
        <div className=" bg-gray-200 p-5 text-center drop-shadow-lg md:flex justify-around">
            <div className=" font-bold text-4xl">CV-Builder</div>
            <button onClick={handleDownload} className=" my-2 rounded-lg border bg-black text-white border-black px-5 py-1 transform transition duration-300 hover:scale-110 hover:bg-gray-300 hover:text-black">
                Download
            </button>
        </div>
    )
}

export default Header