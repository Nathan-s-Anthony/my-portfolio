import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/outline';
import { CodeIcon } from "@heroicons/react/outline";
import { FadeInSection } from "./fadeInSections";
const Tiles = () => {

    return (


        <FadeInSection >
            <div className="p-10 z-40  ">
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg shadow-white bg-white">
                    <div className=" px-10 py-12  ">
                        <div className="relative w-14 h-14 px-3 py-2 text-center flex justify-between items-center bg-blue-500 rounded-full">
                            <CodeIcon className="text-white  rounded-full  h-12 w-12 " />
                        </div>

                        <div className="font-bold text-2xl  mt-4 mb-4"> Front-end Development</div>

                        <ul className="text-gray-700 text-base">
                            <li>Wordpress</li>
                            <li>SCSS</li>
                            <li>Bootstrap</li>
                            <li>Tailwindcss</li>
                            <li>React</li>
                        </ul>



                    </div>
                </div>
            </div>

            <div className="p-10  z-40 ">
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg shadow-white bg-white ">
                    <div className=" px-10 py-12 ">
                        <div className="relative w-14 h-14 px-3 py-2 text-center flex justify-between items-center bg-textPrimary rounded-full">
                            <AcademicCapIcon className="text-white  rounded-full  h-12 w-12 " />
                        </div>

                        <div className="font-bold text-2xl  mt-4 mb-4">Back-end Development</div>

                        <ul lclassName="text-gray-700 text-base">
                            <li>nodeJs</li>
                            <li>PHP</li>
                            <li>SQL</li>
                            <li>    s</li>
                        </ul>


                    </div>
                </div>
            </div>
            <div className="p-10  z-40 ">
                <div className="max-w-sm rounded-md overflow-hidden shadow-lg shadow-white bg-white ">
                    <div className=" px-10 py-12 ">
                        <div className="relative w-14 h-14 px-3 py-2 text-center flex justify-between items-center bg-textPrimary rounded-full">
                            <AcademicCapIcon className="text-white  rounded-full  h-12 w-12 " />
                        </div>

                        <div className="font-bold text-2xl  mt-4 mb-4">Design</div>

                        <ul className="text-gray-700 text-base">
                            <li>Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe XD</li>
                            <li>Figma</li>
                        </ul>


                    </div>
                </div>
            </div>
        </FadeInSection>

    )
}
export { Tiles };