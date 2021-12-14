import React from 'react';
import { useState } from 'react';
//import { Images } from "../../images";
import { MoonIcon } from '@heroicons/react/outline';
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

      <div className=" flex flex-row justify-evenly align-center items-center w-full lg:hidden shadow-md " onClick={() => {
        setMobileMenu(<span class="flex h-3 w-3">
          <span class="animate-ping fixed inline-flex inset-0 h-full w-full rounded-full bg-purple-400"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>

        )
      }}>
        <div className="w-3/6">
          <MoonIcon className="w-10 h-10 text-primary " />
        </div>
        <div className="lg:hidden w-3/6  ">
          {mobileMenu}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#2e2e2e">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>

      </div>
    </>
  )
}
export { MobileNav };