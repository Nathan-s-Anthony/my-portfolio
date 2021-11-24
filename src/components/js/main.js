import React from "react";
import { Button } from './buttons.js';
import {Pagination} from './pagination';
const Main = () => {
    return (
        <>
       
            <main className="h-auto  md:flex-row min-w-full flex-col relative   flex-wrap justify-center content-center gap-5 flex z-5" >
                <div className="fixed right-0 top-0 h-full  bg-blue-600">
            <Pagination/>
            </div>
                <section className=" flex flex-col flex-wrap md:flex-row md:items-start w-full  mt-20 md:container mx-auto justify-center items-center z-1 h-auto ">
                    <div className="  flex  flex-col  flex-wrap w-3/6 align-center mb-10 mt-10  ">
                        <h1 className="md:text-6xl text-center font-extrabold text-primary tracking-wide md:text-left mb-5 mt-5 z-2 ">Hello my name is Nathan </h1>
                        <h2 className="md:text-3xl  text-center font-semibold text-primary  tracking-wide md:text-left  mt-5 mb-5 z-2">I <span className="color-transparent"> &#128151; </span> everything <code>Web Development</code> </h2>
                        <div className="w-3/6">  <Button /> </div>
                    </div>
                    <div className="  flex  flex-col  flex-wrap w-3/6  cotent-center items-center mt-10 mb-10">
                    <div className="w-72-h-72 flex"> 
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg  w-72-h-72 " >
                            <path fill="#0F62FE" d="M42,-66.3C53.4,-58,60.8,-44.6,69.3,-30.4C77.7,-16.2,87.1,-1.1,86.6,13.4C86,28,75.4,42.1,63.8,55.3C52.3,68.5,39.8,80.8,24.8,85.9C9.7,91,-7.9,88.9,-24.4,83.7C-40.9,78.6,-56.4,70.4,-66.7,58.1C-77,45.7,-82.1,29.1,-83.5,12.6C-85,-3.9,-82.9,-20.4,-75.2,-33.2C-67.6,-46,-54.5,-55.2,-41,-62.5C-27.5,-69.8,-13.8,-75.3,0.8,-76.5C15.3,-77.7,30.6,-74.6,42,-66.3Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                        </div>
                </section>


            </main>
        </>
    )

}

export { Main };