import React from "react";
import { Button } from "./buttons.js";
import { ArrowNarrowDownIcon } from "@heroicons/react/outline";
import { ArrowNarrowUpIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { Images } from "../../images";
import { Tiles } from "./tiles.js";
const Main = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <main className=" min-w-full relative h-full ">
      <div
        onClick={scrollToTop}
        className={
          scroll
            ? "fixed bottom-2 right-2 bg-blue-500 rounded-full p-3 z-50 cursor-pointer"
            : " fixed none"
        }
      >
        <ArrowNarrowUpIcon className="w-8 h-8 text-white text-xl" />
      </div>
      <div className="absolute  w-30 h-30   px-20  bottom-0 right-0     bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 "></div>
      <section className="relative  flex  flex-wrap lg:flex-row  w-full md:container mx-auto   justify-start items-start flex-col  lg:mt-20 mb-10 mt-10  ">
        <div className="  flex  flex-col justify-start flex-wrap align-start  lg:w-3/6  w-full ">
          <div className="  text-center flex flex-col  lg:items-start justify-evenly  gap-8 md:mr-10 md:ml-10 ">
            <h2 className=" lg:text-left text-md font-extrabold lg:text-lg  text-center container  lg:py-2 lg:px-6 text-textPrimary mt-10 ">
              Hello, my name is Nathan
              <span className="ml-2 animate-spin ">👋</span>
            </h2>
            <h1 className=" lg:text-left text-center text-5xl xl:text-6xl font-extrabold lg:py-2 lg:px-6  text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 tracking-wide   ">
              I'm a front-end developer{" "}
            </h1>
            <p className="  lg:text-left text-center text-md lg:text-md  container  lg:py-2 lg:px-6  text-textPrimary ">
              Welcome to my portfolio website, I am currently working as a
              front-end developer with a{" "}
              <span className="color-transparent w-10 h-10 text-lg  animate-pulse text-center mx-auto">
                {" "}
                💓{" "}
              </span>{" "}
              for everything Web Development
            </p>
            <div className="  flex md:flex-row flex-col align-center items-center  justify-center md:gap-12 lg:py-2 lg:px-6 lg:justify-start md:w-full w-full align-center gap-2 lg:mb-0 lg:mt-0 mb-10 ">
              <a
                href="#contact"
                className="  lg:w-6/6 w-4/6  flex md:flex-row flex-col align-center items-center  justify-center md:gap-12  lg:justify-start md:w-full  align-center gap-2 lg:mb-0 lg:mt-0 mb-10 "
              >
                <button
                  className={
                    "text-white bg-blue-600 transition duration-200 ease-in-out px-8 py-3 border transform hover:-translate-y-1 w-full lg:w-3/6  rounded-md text-medium tracking-wide shadow-lg mt-5 mb-5 "
                  }
                >
                  Get in touch
                </button>
              </a>
            </div>
            <div className="bg-none xl:flex hidden	  w-full h-full flex-row md:flex-col align-center items-start  gap-5 lg:py-2 lg:px-6">
              <p className="text-gray-300 text-center ">Scroll Down</p>
              <div>
                <ArrowNarrowDownIcon className="  rounded-full text-gray-200  h-12 w-12  animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        <div className="  flex  flex-col justify-center flex-wrap align-center items-center lg:w-3/6  w-full ">
          <div className="w-full h-full flex flex-col md:flex-row justify-center relative align-center items-center  ">
            <div className="w-full h-full flex flex-col md:flex-row align-center  items-center lg:items-end relative justify-center lg:justify-end md:mr-10 md:ml-10 lg:mb-0 lg:mt-10 mb-10 ">
              <div className="relative ml-8 mr-8 ">
                <div className=" w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 absolute inset-0 rounded-full shadow-lg "></div>

                <Images
                  arrI="0"
                  arrO="0"
                  alt="Nathan Anthony"
                  borderRadius="full"
                  width="full"
                  height="full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="  relative  w-full lg:h-full   py-10">
        <div className="  w-full h-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500  transform -skew-y-2 relative p-20">
          <div
            className="  w-full     relative transform skew-y-2 z-20"
            id="about"
          >
            <div className="  flex  flex-wrap md:flex-row  w-full   md:container mx-auto justify-center items-center   z-30">
              <div className=" md:text-left text-center flex flex-col  items-center justify-evenly gap-5 container ">
                <h2 className=" lg:text-center text-md font-extrabold lg:text-lg text-center container  lg:py-2 lg:px-6 text-white ">
                  About me<span className="ml-2">📝</span>
                </h2>
                <h3 className=" lg:text-center text-center text-5xl xl:text-6xl  font-extrabold lg:py-2 lg:px-6  text-transparent text-white tracking-wide   ">
                  My Skills
                </h3>
                <p className=" lg:w-3/6   text-center text-md lg:text-md  container  lg:py-2 lg:px-6  text-white  ">
                  {" "}
                  Each project requirements are unique making them require
                  different technologies,frameworks or libraries to accomplish.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Tiles />

      <section className="  relative  w-full lg:h-full   py-10" id="projects">
        <div className="  w-full h-full relative p-10">
          <div className="  w-full     relative transform  z-20" id="about">
            <div className="  flex  flex-wrap md:flex-row  w-full   md:container mx-auto justify-center items-center   z-30">
              <div className=" md:text-left text-center flex flex-col  items-center justify-evenly gap-5 container ">
                <h2 className=" lg:text-center text-md font-extrabold lg:text-lg text-center container  lg:py-2 lg:px-6 text-textPrimary ">
                  My projects<span className="ml-2">📝</span>
                </h2>
                <h3 className=" lg:text-center text-center text-5xl xl:text-6xl  font-extrabold lg:py-2 lg:px-6  text-transparent text-textPrimary  tracking-wide   ">
                  Projects that i have built
                </h3>
                <p className=" lg:w-3/6   text-center text-md lg:text-md  container  lg:py-2 lg:px-6  text-textPrimary   ">
                  {" "}
                  Take a look at the projects that I have built with various
                  technologies{" "}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center align-center lg:py-2 lg:px-6 gap-10">
              <section className="max-w-sm rounded overflow-hidden shadow-lg p-5 mt-10 mb-10 relative">
                <div className="relative w-full m-auto h-72">
                  <div className="w-full h-full">
                    <Images
                      arrI="5"
                      arrO="0"
                      alt="Bookmark Landing Page Thumbnail"
                      borderRadius="none"
                      width="full"
                      height="full"
                    />
                  </div>
                </div>

                <div className="px-2 pt-4">
                  <div className="font-bold text-xl mb-2">
                    Bookmark landing page
                  </div>
                  <p className="text-gray-700 text-base">
                    A clean and simple interface to organize your favourite
                    websites. Open a new browser tab and see your sites load
                    instantly. Try it for free.
                  </p>
                </div>
                <div className="px-2 pt-4">
                  <a
                    href="https://bookmark-landing-page-nathan.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      className={
                        "text-white bg-blue-600 transition duration-200 ease-in-out px-8 py-3 border transform hover:-translate-y-1  lg:w-6/6  rounded-md text-medium tracking-wide shadow-lg mt-5 mb-5 "
                      }
                    >
                      View project
                    </button>
                  </a>
                </div>
                <div className="px-2 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Gatsby
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #React
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #React-helmet
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #SCSS
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #FrontEnd
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #WebDevelopment
                  </span>
                </div>
              </section>
              <section className=" relative max-w-sm rounded overflow-hidden shadow-lg p-5 mt-10 mb-10">
                <div className="relative w-full m-auto h-72">
                  <div className="w-full h-full">
                    <Images
                      arrI="6"
                      arrO="0"
                      alt="Time Tracking Dashboard Thumbnail"
                      borderRadius="none"
                      width="full"
                      height="full"
                    />
                  </div>
                </div>

                <div className="px-2 pt-4">
                  <div className="font-bold text-xl mb-2">
                    Time Tracking Dashboard
                  </div>
                  <p className="text-gray-700 text-base">
                    Track your daily, weekly or monthly routine with various
                    activities with a simple and intuitive interface.Compare
                    your results to previous weeks.
                  </p>
                </div>
                <div className="px-2 pt-4">
                  <a href="/" target="_blank" rel="noreferrer">
                    <button
                      className={
                        "text-white bg-blue-600 transition duration-200 ease-in-out px-8 py-3 border transform hover:-translate-y-1  lg:w-6/6  rounded-md text-medium tracking-wide shadow-lg mt-5 mb-5 "
                      }
                    >
                      Coming Soon
                    </button>
                  </a>
                </div>
                <div className="px-2 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #Gatsby
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #React
                  </span>

                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #SCSS
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #FrontEnd
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #WebDevelopment
                  </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="  relative  w-full lg:h-full   py-10">
        <div className="  w-full h-full relative  p-10">
          <div className="  w-full     relative transform  z-20" id="about">
            <div className="  flex  flex-wrap md:flex-row  w-full   md:container mx-auto justify-center items-center   z-30">
              <div className=" md:text-left text-center flex flex-col  items-center justify-evenly gap-5 container ">
                <h2 className=" lg:text-center text-md font-extrabold lg:text-lg text-center container  lg:py-2 lg:px-6 text-textPrimary ">
                  My Blog<span className="ml-2">📝</span>
                </h2>
                <h3 className=" lg:text-center text-center text-5xl xl:text-6xl  font-extrabold lg:py-2 lg:px-6  text-transparent text-textPrimary tracking-wide   ">
                  Improve your knowledge
                </h3>
                <p className=" lg:w-3/6  text-center text-md lg:text-md  container  lg:py-2 lg:px-6  text-textPrimary   ">
                  {" "}
                  Whether you an experienced developer or someone starting their
                  journey into web development , i will be writing technical
                  articles to help further your understanding.{" "}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center align-center lg:py-2 lg:px-6">
              <article className="max-w-sm rounded overflow-hidden shadow-lg p-5 mt-10 mb-10">
                <div className="relative w-full m-auto h-72">
                  <Images
                    arrI="4"
                    arrO="0"
                    alt="Semantic HTML Thumbnail"
                    borderRadius="none"
                    width="full"
                    height="full"
                  />
                </div>

                <div className="px-2 pt-4">
                  <div className="font-bold text-xl mb-2">Sematic HTML</div>
                  <p className="text-gray-700 text-base">
                    Semantic HTML reinforces the meaning of a web page and helps
                    search engines determine the importance of web pages.
                  </p>

                  <div className="px-2 pt-4">
                    <button
                      className={
                        "text-white bg-blue-600 transition duration-200 ease-in-out px-8 py-3 border transform hover:-translate-y-1   lg:w-6/6  rounded-md text-medium tracking-wide shadow-lg mt-5 mb-5 "
                      }
                    >
                      Coming soon
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #HTML
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #SEO
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #WebDevelopment
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #bestPractices
                  </span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div
          className="  w-full h-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500  relative p-10"
          id="contact"
        >
          <div
            className="  w-full  flex flex-col justify-center align-center gap-10   relative  z-20"
            id="contact"
          >
            <div className=" text-white flex  flex-wrap md:flex-row  w-full   md:container mx-auto justify-center items-center gap-5  z-30">
              <p>Contact me today: </p>
              <a href="mailto:nsanthony95@gmail.com" className="text-white font-bold">
                nsanthony95@gmail.com
              </a>
              <div className=" md:text-left text-center flex flex-col  items-center justify-evenly  container mt-20">
                <p className="   text-center text-md lg:text-md  container   text-white  ">
                  Created with
                  <span className="color-transparent w-10 h-10 text-lg  animate-pulse text-center mx-auto">
                    💓
                  </span>
                  with React & TailwindCSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export { Main };
