import React from 'react';
import { useState } from 'react';
//import { Images } from "../../images";
import { MoonIcon } from '@heroicons/react/outline';
import {CodeIcon} from "@heroicons/react/outline";
//import { Button } from './buttons.js';
//import { MobileNavQuery } from './mediaqueries.js';

const MobileNav = () => {
  // const [scroll, setScroll] = useState(false);
  // useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //         setScroll(window.scrollY > 70);
  //     });

  // }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div className=" flex flex-row  justify-evenly align-center items-center w-full lg:hidden shadow-md h-full gap-10" >
        <MoonIcon className="w-10 h-10 text-gray-500 " />
        <div className=" flex shadows-md ">
        <CodeIcon className="w-10 h-10 text-gray-500 " />
          {/* <div className="p-1 bg-gradient-to-tr from-blue-500 via-blue-600 to-purple-500 rounded-full">
            <div className="bg-white rounded-full">
               <Images width="24" height="24" /> 
     
            </div>
          </div> */}
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#2e2e2e" onClick={() => {
          setMobileMenu(<span className="flex h-48 w-full bg-red-400 absolute rounded-full right-0 top-0 transition delay-300 z-50 ">
            Hello</span>

          )
        }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        {mobileMenu}
      </div>

      {/* <div className="flex justify-between h-full w-full content-center">
          <div className="w-2/6">
            <MoonIcon className="w-10 h-10 text-gray-500 " />
          </div>
        </div>
        <div className="w-2/6">

        
          <div className="lg:hidden w-2/6 text-right ">
            {mobileMenu}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#2e2e2e">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>

        </div>
      </div> */}
    </>
  )
}
export { MobileNav };