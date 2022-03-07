import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/outline';
import { CodeIcon } from "@heroicons/react/outline";
const Tiles = () => {
   
    return (
        <div className="  relative  w-full h-full mx-auto z-40   ">
        <div className="flex lg:flex-row flex-col w-full items-center justify-center  mx-auto  -mt-20 lg:-mt-30 relative " >
            <div className="p-10 z-40 ">
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg shadow-white bg-white">
                    <div className=" px-10 py-12  ">
                        <div className="relative w-14 h-14 px-3 py-2 text-center flex justify-center items-center bg-blue-500 rounded-full">
                            <CodeIcon className="text-white  rounded-full  h-12 w-12 " />
                        </div>

                        <div className="font-bold text-2xl  mt-4 mb-4"> Front-end Development</div>
                        <p className="text-gray-700 text-base">
                     Each project requirements are unique making them require different technologies,frameworks or libraries to accomplish. 

                        </p>
                     
                    </div>
                </div>
            </div>
            <div className="p-10  z-40">
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg shadow-white bg-white ">
                    <div className=" px-10 py-12 ">
                        <div className="relative w-14 h-14 px-3 py-2 text-center flex justify-center items-center bg-textPrimary rounded-full">
                            <AcademicCapIcon className="text-white  rounded-full  h-12 w-12 " />
                        </div>

                        <div className="font-bold text-2xl  mt-4 mb-4">  BSC IT Degree</div>
                        <p className="text-gray-700 text-base">
                            BSC IT Computer Science.
                            BSC IT Computer Science.
                            BSC IT Computer Science.
                        </p>
                     
                    </div>
                </div>
            </div>
            <div className="p-10  z-40">
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg shadow-white bg-white ">
                    <div className=" px-10 py-12 ">
                        <div className="relative w-14 h-14 px-3 py-2 text-center flex justify-center items-center bg-textPrimary rounded-full">
                            <AcademicCapIcon className="text-white  rounded-full  h-12 w-12 " />
                        </div>

                        <div className="font-bold text-2xl  mt-4 mb-4">  BSC IT Degree</div>
                        <p className="text-gray-700 text-base">
                            BSC IT Computer Science.
                            BSC IT Computer Science.
                            BSC IT Computer Science.
                        </p>
                     
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export { Tiles };