import React from "react";
import {useState} from "react";
import { useEffect } from "react";
const Pagination = () => {
    const [tooltip, setToolTop] = useState(false);
    useEffect(() => {
      window.addEventListener("mouseenter", () => {
        setToolTop(<div className="absolute bg-red inset-0 w-10 h-10">Hello</div>);
      });
    }, []);
    
    return (
        <div className="  bg-transparent w-32 h-3/6  right-0 top-0  flex flex-col flex-nowrap content-center justify-center items-center z-0 ">
            <div className="bg-transparent h-60 flex flex-col flex-nowrap content-center items-center justify-center ">
                <div className="w-1 h-6 bg-gray-300 mb-5 mt-5 border rounded-full "></div>
                <div className={tooltip ? "relative w-12 h-12 bg-gray-300 rounded-full transform transition duration-500 hover:scale-125":"relative w-4 h-4 cursor-pointer bg-gray-300 rounded-full z-10 mt-2 mb-2"}>      </div>
                <div className={tooltip ? "relative w-12 h-12 bg-gray-300 rounded-full transform transition duration-500 hover:scale-125":"relative w-4 h-4 cursor-pointer bg-gray-300 rounded-full z-10  mt-2 mb-2"}></div>
                <div className={tooltip ? "relative w-12 h-12 bg-gray-300 rounded-full transform transition duration-500 hover:scale-125":"relative w-4 h-4 cursor-pointer bg-gray-300 rounded-full z-10  mt-2 mb-2"}></div>
                <div className="w-1 h-6 bg-gray-300 mb-5 mt-5 rounded-full"></div>
            </div>
        </div>
    )
}

export { Pagination }