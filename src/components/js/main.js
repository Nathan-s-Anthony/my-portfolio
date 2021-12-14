import React from "react";
import { Button } from './buttons.js';
// import { Pagination } from './pagination';
import Typical from 'react-typical';

const Main = () => {
    return (
        <>
            <main className="  md:flex-row min-w-full flex-col relative   flex-wrap justify-center content-center gap-5 flex z-0 " >
                <div className="fixed right-0 top-0 h-full  bg-transparent flex items-center">
                    {/* <Pagination /> */}
                </div>
                <section className="relative h-section flex  flex-wrap md:flex-row md:items-start w-full   md:container mx-auto justify-center items-center   z-1">
                    <div className="  flex  flex-col  flex-wrap align-center mb-20 md:mt-40 container md:w-3/6 py-10 px-10 ">
                        <h1 className=" md:text-left text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 tracking-wide  mb-5 mt-5 container ">Hello my name is Nathan </h1>
                        <h3 className="md:text-left text-center text-2xl font-extrabold text-transparent text-primary tracking-wide  mb-5 mt-5 container">Im currently a front-end developer </h3>
                         <span className="color-transparent w-10 h-10 text-4xl animate-pulse text-center"> &#128151; </span>
                        <Typical className="md:text-3xl text-3xl  text-center text-primary"
                            steps={[
                                ' <html>',
                                3000,
                                ' <Javascript/>',
                                3000,
                                ' :CSS',
                                3000,
                                ' REACT',
                                3000,
                            ]}
                            wrapper="h3"
                            loop={Infinity}
                            
                        /> 
                        <Button />

                    </div>
 
                    <div className="  flex  flex-col  flex-wrap md:w-3/6  content-start md:container h-top-bar justify-center items-center  md:mb-20 mt-40 " >
                        <div className="relative w-72 h-96">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
                                <path fill="#0F62FE" d="M57.2,-16.6C65.8,7.9,58.7,39.5,37.7,55.6C16.8,71.7,-18.1,72.3,-37.3,57C-56.5,41.8,-60.1,10.5,-51.2,-14.3C-42.4,-39.1,-21.2,-57.5,1.5,-58C24.3,-58.5,48.6,-41.1,57.2,-16.6Z" transform="translate(100 100)" />
                            </svg>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full flex flex-col duration-700 transition-all flex-wrap items-center align-center justify-center transform   animate-bounce delay-700  ">
                            <span className="text-gray-300 ">Scroll Down</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce mt-5 mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>

                </section>


                {/* <section className=" flex flex-col flex-wrap md:flex-row md:items-start w-full  mt-20 md:container mx-auto justify-center items-center z-1 h-auto ">


                    <div className="  flex  flex-col  flex-wrap md:w-3/6  cotent-center items-center mt-10 mb-10">
                        <div className="w-72-h-72 flex">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg  w-72-h-72 " >
                                <path fill="#0F62FE" d="M42,-66.3C53.4,-58,60.8,-44.6,69.3,-30.4C77.7,-16.2,87.1,-1.1,86.6,13.4C86,28,75.4,42.1,63.8,55.3C52.3,68.5,39.8,80.8,24.8,85.9C9.7,91,-7.9,88.9,-24.4,83.7C-40.9,78.6,-56.4,70.4,-66.7,58.1C-77,45.7,-82.1,29.1,-83.5,12.6C-85,-3.9,-82.9,-20.4,-75.2,-33.2C-67.6,-46,-54.5,-55.2,-41,-62.5C-27.5,-69.8,-13.8,-75.3,0.8,-76.5C15.3,-77.7,30.6,-74.6,42,-66.3Z" transform="translate(100 100)" />
                            </svg>
                        </div>
                    </div>
                    <div className="  flex  flex-col  flex-wrap md:w-3/6 align-center mb-10 mt-10  ">
                        <h1 className="md:text-6xl text-center font-extrabold text-primary tracking-wide md:text-left mb-5 mt-5 z-2 ">Hello my name is Nathan </h1>
                        <h2 className="md:text-3xl  text-center font-semibold text-primary  tracking-wide md:text-left  mt-5 mb-5 z-2">I <span className="color-transparent"> &#128151; </span> everything <code>Web Development</code> </h2>
                        <div className="md:w-3/6">  <Button /> </div>
                    </div>
                </section> */}

            </main>
        </>
    )

}

export { Main };