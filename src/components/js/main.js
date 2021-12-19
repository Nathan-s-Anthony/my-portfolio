import React from "react";
import { Button } from './buttons.js';
import { useState, useEffect } from 'react';
// import { Pagination } from './pagination';
//import Typical from 'react-typical';

const Main = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });

    }, []);
    return (
        <>
            <main className=" min-w-full relative   " >
                <div className="fixed right-0 top-0 h-full  bg-transparent flex items-center">
                    {/* <Pagination /> */}
                </div>
                <section className="relative lg:h-section flex  h-screen flex-wrap md:flex-row md:items-start w-full   md:container mx-auto justify-center items-center   z-1">
                    <div className="  flex  flex-col  flex-wrap align-center lg:mb-20 lg:mt-40  md:w-3/6 w-full ">
                        <div className=" md:text-left text-center flex flex-col  items-center justify-around gap-8 container ">
                            <h1 className=" text-md font-bold  container text-primary  mt-10"  >Hello, my name is Nathan<span className="ml-2">👋</span></h1>
                            <h3 className="md:text-left text-center text-5xl font-extrabold   text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-blue-600 to-purple-500 tracking-wide  ml-5 mr-5  ">I'm a front-end developer </h3>
                            <p className="md:text-left text-center text-lg font-md container ml-5 mr-5  text-primary ">Welcome to my portfolio website, I am currently working as a front-end developer with a <span className="color-transparent w-10 h-10 text-lg  animate-pulse text-center mx-auto"> 💓 </span> for everything Web Development</p>
                            <div className="w-full ">
                                <div className="  flex flex-row justify-center gap-8 container ">
                                    <Button size="sm" textColor="white" bgColor=" bg-blue-600 hover:bg-blue-700" text="Get in touch" />
                                    <Button size="sm" textColor="text-primary" bgColor="none" borderColor="purple-700" text="View my work" />

                                </div>
                            </div>
                        </div>


                        {/* <Typical className="md:text-3xl text-3xl  text-center text-primary"
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

                        /> */}

                        <div className="w-full flex-col justify-evenly items-center align-center container text-center h-4">
                            <span className={scroll ? "transition duration-200 ease-in-out transform translate-y-48 mx-auto z-5  text-gray-300 " : "text-gray-300"}>Scroll Down</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={scroll ? "transition duration-200 ease-in-out transform translate-y-48 mx-auto text-gray-300  h-6 w-6" : "h-6 w-6 animate-bounce mt-5 mb-5 text-gray-300 mx-auto"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                    <div className="  flex  flex-col  flex-wrap md:w-3/6  content-start md:container justify-center items-center  md:mb-20 md:mt-40 " >
                        <div className="relative w-96 h-96">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
                                <path fill="#0F62FE" d="M57.2,-16.6C65.8,7.9,58.7,39.5,37.7,55.6C16.8,71.7,-18.1,72.3,-37.3,57C-56.5,41.8,-60.1,10.5,-51.2,-14.3C-42.4,-39.1,-21.2,-57.5,1.5,-58C24.3,-58.5,48.6,-41.1,57.2,-16.6Z" transform="translate(100 100)" />
                            </svg>
                        </div>

                    </div>

                </section>

                <section className="relative lg:h-section flex  h-screen flex-wrap md:flex-row md:items-start w-full   md:container mx-auto justify-center items-center   z-1">
                    <div className="  flex  flex-col  flex-wrap align-center lg:mb-20 lg:mt-40  md:w-3/6 w-full ">
                        <div className=" md:text-left text-center flex flex-col  items-center justify-around gap-5 container ">
                            <h1 className=" text-md font-bold  mt-5 container text-primary "  >About Me<span className="ml-2">👋</span></h1>
                            <h3 className="md:text-left text-center text-4xl font-extrabold   text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-blue-600 to-purple-500 tracking-wide  mb-5 mt-5 ml-5 mr-5">My education & work experience </h3>
                            <ul class="list-inside  list-disc bg-rose-200 ...">
                                <li>BSC IT </li>
                                ...
                            </ul>

                            <ul class="list-outside bg-rose-200 ...">
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                                ...
                            </ul>

                        </div>
                    </div>
                    <div className="w-full  bg-gradient-to-br from-blue-500 via-blue-600 to-purple-500 py-10 px-10 ">
                   <h2 className="text-white font-bold text-4xl tracking-wide text-center mb-5 mt-5">Turning your ideas into reality </h2>
                   <h4 className="text-white font-bold text-2xl text-center">Lets get started</h4>
                    </div>
                    <div className="  flex  flex-col  flex-wrap md:w-3/6  content-start md:container justify-center items-center  md:mb-20 md:mt-40 " >
                        <div className="relative w-76 h-96">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
                                <path fill="#0F62FE" d="M57.2,-16.6C65.8,7.9,58.7,39.5,37.7,55.6C16.8,71.7,-18.1,72.3,-37.3,57C-56.5,41.8,-60.1,10.5,-51.2,-14.3C-42.4,-39.1,-21.2,-57.5,1.5,-58C24.3,-58.5,48.6,-41.1,57.2,-16.6Z" transform="translate(100 100)" />
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