import React from "react";
import { Button } from './buttons.js';
import { ArrowNarrowDownIcon } from '@heroicons/react/outline';
import { ArrowNarrowUpIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';

import { Images } from "../../images";
import { Tiles } from "./tiles.js";
// import { Pagination } from './pagination';
//import Typical from 'react-typical';

const Main = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });

    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,

        });
    };;
    return (



        <main className=" min-w-full relative h-full " >
            <div onClick={scrollToTop} className={scroll ? "fixed bottom-2 right-2 bg-blue-700 rounded-full p-3 z-50 cursor-pointer" : " fixed none"}><ArrowNarrowUpIcon className="w-8 h-8 text-white text-xl" /></div>
            <div className="absolute  w-30 h-30   px-20  bottom-0 right-0     bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 "></div>
            <section className="relative  flex  flex-wrap lg:flex-row  w-full md:container mx-auto   justify-start items-start flex-col lg:mb-20 lg:mt-20 mb-10 mt-10  ">
                <div className="  flex  flex-col justify-start flex-wrap align-start  lg:w-3/6  w-full ">
                    <div className="  text-center flex flex-col  lg:items-start justify-evenly  gap-8 md:mr-10 md:ml-10 ">
                        <h2 className=" lg:text-left text-md font-extrabold lg:text-lg  text-center container  lg:py-2 lg:px-6 text-textPrimary mt-10 "  >Hello, my name is Nathan<span className="ml-2  animate-spin">👋</span></h2>
                        <h1 className=" lg:text-left text-center text-5xl xl:text-6xl font-extrabold lg:py-2 lg:px-6  text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 tracking-wide   ">I'm a front-end developer </h1>
                        <p className="  lg:text-left text-center text-md lg:text-md  container  lg:py-2 lg:px-6  text-gray-700  ">Welcome to my portfolio website, I am currently working as a front-end developer with a <span className="color-transparent w-10 h-10 text-lg  animate-pulse text-center mx-auto"> 💓 </span> for everything Web Development</p>
                        <div className="  flex md:flex-row flex-col align-center items-center  justify-center md:gap-12 container  lg:py-2 lg:px-6 lg:justify-start md:full w:3/6 align-center ">
                            <Button size="lg" width="4/6" textColor="white" bgColor="blue-600 " text="Get in touch" borderColor="blue-600 " />
                            <Button size="lg" width="4/6" textColor="textPrimary hover:text-white" bgColor="transparent" borderColor="indigo-700 " text="View my projects" />

                        </div>
                    </div>

                    <div className="bg-none xl:flex hidden	  w-full h-full flex-row md:flex-col align-center items-start  gap-5 lg:py-2 lg:px-6">
                        <p className="text-gray-300 text-center ">Scroll Down

                        </p>
                        <div>
                            <ArrowNarrowDownIcon className="  rounded-full text-gray-200  h-12 w-12  animate-bounce" />
                        </div>
                    </div>

                </div>
                <div className="  flex  flex-col justify-center flex-wrap align-center items-center lg:w-3/6  w-full ">
                    <div className="w-full h-full flex flex-col md:flex-row justify-center relative align-center items-center  ">
                        <div className="w-full h-full flex flex-col md:flex-row align-center  items-center lg:items-end relative justify-center lg:justify-end md:mr-10 md:ml-10">
                            <div className="relative  ">
                                <div className=" w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 absolute inset-0 rounded-full shadow-lg"></div>

                                <Images arrI="0" arrO="0" alt="Nathan Anthony" width="mainImgW" height="mainImgH" borderRadius="full" />

                            </div>

                        </div>


                    </div>
                </div>


            </section>

            <section className="  relative  w-full lg:h-full  bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500  lg:mt-20  mt-10 py-20">
                <div className="  w-full    py-10 px-10 relative  z-20" id="about">
                    <div className="relative  flex  flex-wrap md:flex-row  w-full   md:container mx-auto justify-center items-center   z-30">
                        <div className="  flex  flex-col  flex-wrap align-center justify-center " >
                        </div>
                        <div className=" md:text-left text-center flex flex-col  items-center justify-evenly gap-5 container ">
                            <h2 className=" lg:text-center text-md font-extrabold lg:text-lg text-center container  lg:py-2 lg:px-6 text-white "  >About me<span className="ml-2">📝</span></h2>
                            <h3 className=" lg:text-center text-center text-5xl xl:text-6xl  font-extrabold lg:py-2 lg:px-6  text-transparent text-white tracking-wide   ">My Skills</h3>
                            <p className="   text-center text-md lg:text-md  container  lg:py-2 lg:px-6  text-white  ">   Each project requirements are unique making them require different technologies,frameworks or libraries to accomplish. </p>

                        </div>

                    </div>




                </div>



            </section>

            <Tiles />





            <section className="relative  flex  flex-wrap lg:flex-row  w-full md:container mx-auto   justify-start items-start flex-col  lg:mt-20  mt-10  ">
                <div className="  flex  flex-col justify-start flex-wrap align-start  lg:w-3/6  w-full ">
                    <div className="  text-center flex flex-col  lg:items-start justify-evenly  gap-8 md:mr-10 md:ml-10 ">
                        <h2 className=" lg:text-left text-md font-extrabold lg:text-lg  text-center container  lg:py-2 lg:px-6 text-textPrimary  "  >Projects<span className="ml-2  animate-spin">👋</span></h2>
                        <h1 className=" lg:text-left text-center text-5xl xl:text-6xl font-extrabold lg:py-2 lg:px-6  text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 tracking-wide   ">Whatever your requirements , my tech stack covers it all</h1>
                        <p className="  lg:text-left text-center text-md lg:text-md  container  lg:py-2 lg:px-6  text-gray-700  ">Welcome to my portfolio website, I am currently working as a front-end developer with a <span className="color-transparent w-10 h-10 text-lg  animate-pulse text-center mx-auto"> 💓 </span> for everything Web Development</p>

                    </div>
                    <div className="  flex md:flex-row flex-col align-center items-center  justify-center md:gap-12 container  lg:py-2 lg:px-6 lg:justify-start md:full w:3/6 align-center ">
                        <Button size="lg" width="4/6" textColor="white" bgColor="blue-600 " text="Get in touch" borderColor="blue-600 " />
                        <Button size="lg" width="4/6" textColor="textPrimary hover:text-white" bgColor="transparent" borderColor="indigo-700 " text="View my projects" />

                    </div>
                </div>
                <div className="  flex  flex-col justify-center flex-wrap align-center items-center lg:mb-20 lg:mt-20 lg:w-3/6  w-full ">
                    <div className="w-full h-full flex flex-col md:flex-row justify-center relative align-center items-center  ">
                        <div className="w-full h-full flex flex-col md:flex-row align-center  items-center lg:items-end relative justify-center lg:justify-end md:mr-10 md:ml-10">
                            <Images arrI="2" arrO="0" alt="Projects Completed" height="24" width="24" />

                        </div>

                    </div>


                </div>


            </section>

            <section className="relative  flex  flex-wrap lg:flex-row  w-full md:container mx-auto   justify-start items-start flex-col lg:mb-20 lg:mt-20  ">
                <div className="  flex  flex-col justify-center flex-wrap align-center items-center  lg:w-3/6  w-full ">
                    <div className="w-full h-full flex flex-col md:flex-row justify-center relative align-center items-center  ">
                        <div className="w-full h-full flex flex-col md:flex-row align-center  items-center lg:items-end relative justify-center lg:justify-end md:mr-10 md:ml-10">


                            <Images arrI="3" arrO="0" alt="Blog Posts" height="25" width="25" />



                        </div>


                    </div>
                </div>
                <div className="  flex  flex-col justify-start flex-wrap align-start  lg:w-3/6  w-full ">
                    <div className="  text-center flex flex-col  lg:items-start justify-evenly  gap-8 md:mr-10 md:ml-10 ">
                        <h2 className=" lg:text-left text-md font-extrabold lg:text-lg  text-center container  lg:py-2 lg:px-6 text-textPrimary mt-10 "  >Blog<span className="ml-2  animate-spin">👋</span></h2>
                        <h1 className=" lg:text-left text-center text-5xl xl:text-6xl font-extrabold lg:py-2 lg:px-6  text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 tracking-wide   ">Whatever your requirements , my tech stack covers it all</h1>
                        <p className="  lg:text-left text-center text-md lg:text-md  container  lg:py-2 lg:px-6  text-gray-700  ">Welcome to my portfolio website, I am currently working as a front-end developer with a <span className="color-transparent w-10 h-10 text-lg  animate-pulse text-center mx-auto"> 💓 </span> for everything Web Development</p>
                    </div>
                </div>



            </section>

        </main>


    )

}

export { Main };

