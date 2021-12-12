import React from 'react';
import { useState, useEffect } from 'react';
//import { Images } from "../../images";
import { MoonIcon } from '@heroicons/react/outline';
import { Button } from './buttons.js';
//import { MobileNavQuery } from './mediaqueries.js';

const MobileNav = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 70);
        });

    }, []);

    return (
<>

        <header className={scroll ? "  bg-gradient-to-r from-blue-400 to-blue-500 relative top-0 right-0 transition-all ease-in-out duration-700 z-5 	" : "bg-white ease-in-out duration-200 transition-all md:flex-row min-w-full  h-header flex-col flex-wrap content-start items-start justify-center relative flex  z-1"}>
        <div className="lg:hidden w-3/6  text-2xl ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="#2e2e2e">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        </header>
        </>
    )
}
export { MobileNav };