import React from "react";
// import { useState, useEffect } from 'react';

//import { Images } from "../../images";
//import { MoonIcon } from '@heroicons/react/outline';
//import { CodeIcon } from "@heroicons/react/outline";
import { Button } from "./buttons.js";
//import {MobileNavQuery} from './mediaqueries';
import { MobileNav } from "./mobileNav";
//import Typical from 'react-typical';
import { CodeIcon } from "@heroicons/react/outline";
const Header = () => {
  // const [scroll, setScroll] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 0);
  //   });
  // }, []);

  return (
    <>
      <div className=" h-20 lg:hover:bg-blue-700	relative bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500  w-full flex md:flex-row items-center justify-center  gap-10 transition ease-in delay-300 duration-700">
        <div className="md:container w-full flex md:flex-row items-center  justify-evenly lg:justify-center  md:gap-10  ">
          <div className="text-md font-md text-white ">Connect with me</div>
          <a href="https://github.com/Nathan-s-Anthony" rel="nofollow">
            <svg
              role="img"
              className="w-6 h-6"
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href="https://twitter.com/Nath_s_anthony">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="white"
            >
              <title>Twitter</title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="https://codepen.io/Nathan-s-Anthony">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="w-6 h-6"
            >
              <title>CodePen</title>
              <path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="min-w-full relative  z-10">
        <header className=" h-24 lg:h-auto  md:flex-row min-w-full  md:container flex-col flex-wrap content-start items-start justify-center relative  flex shadow-md">
          <MobileNav />

          <nav className="lg:flex-row  flex-col flex-wrap w-full    items-center  md:container hidden lg:flex lg:py-2 lg:px-6 ">
            <div className=" relative md:w-1/6 flex flex-wrap justify-start align-center content-center flex-grow-0">
              <CodeIcon className="w-8 h-8 text-textPrimary " />
            </div>
            <div className=" w-7/12 md:w-5/6 flex md:flex-row flex-col flex-grow ">
              <ul className="w-full flex md:flex-row flex-col flex-wrap justify-flex-end ">
                <li className="w-full  md:flex-row flex-col flex-wrap justify-end md:content-center md:items-center text-textPrimary  md:align-center gap-20 hidden md:flex">
                  <a href="/" className=" inline-block nav-link-transition  ">
                    Home
                  </a>
                  <a
                    href="#about"
                    className="inline-block nav-link-transition "
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="inline-block nav-link-transition "
                  >
                    Projects
                  </a>

                  <div className="w-auto">
                    <a href="#contact">
                      {" "}
                      <button
                        className={
                          "text-white bg-blue-600 transition duration-200 ease-in-out px-8 py-3 border transform hover:-translate-y-1   lg:w-6/6  rounded-md text-medium tracking-wide shadow-lg mt-5 mb-5 "
                        }
                      >
                        Contact
                      </button>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export { Header };
