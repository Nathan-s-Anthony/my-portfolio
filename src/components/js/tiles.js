import React from "react";
import { PhotographIcon, CodeIcon } from "@heroicons/react/outline";
import {} from "@heroicons/react/outline";
import { FadeInSection } from "./fadeInSections";
const Tiles = () => {
  return (
    <FadeInSection>
      <section className="relative container  flex lg:flex-row flex-col w-full items-center justify-center transform-gpu -mt-24">
        <div className="p-10 lg:w-2/6 w-full border-solid bottom-3-blue-600  ">
          <div className="w-full rounded-md overflow-hidden shadow-lg shadow-white bg-white">
            <div className=" px-10 py-12  ">
              <div className="relative w-14 h-14 px-3 py-2 text-center flex justify-between items-center bg-blue-500 rounded-full">
                <CodeIcon className="text-white  rounded-full  h-12 w-12 " />
              </div>

              <div className="font-bold text-2xl  mt-4 mb-4"> Front-end </div>

              <ul className="text-gray-700 text-base">
                <li>&bull; Wordpress</li>
                <li>&bull; SCSS</li>
                <li>&bull; Bootstrap</li>
                <li>&bull; Tailwindcss</li>
                <li>&bull; React</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-10 lg:w-2/6 w-full 	  z-40  ">
          <div className="w-full rounded-md overflow-hidden shadow-lg shadow-white bg-white">
            <div className=" px-10 py-12  ">
              <div className="relative w-14 h-14 px-3 py-2 text-center flex justify-between items-center bg-blue-500 rounded-full">
                <CodeIcon className="text-white  rounded-full  h-12 w-12 " />
              </div>

              <div className="font-bold text-2xl  mt-4 mb-4"> Back-end </div>

              <ul className="text-gray-700 text-base">
                <li>&bull; PHP</li>
                <li>&bull; SQL</li>
                <li className="text-white">SQL</li>
                <li className="text-white">SQL</li>
                <li className="text-white">SQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-10 lg:w-2/6 w-full 	  z-40  ">
          <div className="w-full rounded-md overflow-hidden shadow-lg shadow-white bg-white">
            <div className=" px-10 py-12  ">
              <div className="relative w-14 h-14 px-3 py-2 text-center flex justify-between items-center bg-blue-500 rounded-full">
                <PhotographIcon className="text-white  rounded-full  h-12 w-12 " />
              </div>

              <div className="font-bold text-2xl  mt-4 mb-4"> Design </div>

              <ul className="text-gray-700 text-base">
                <li>&bull; Adobe Illustrator</li>
                <li>&bull; Adobe Photoshop</li>
                <li>&bull; Adobe XD</li>
                <li>&bull; Figma</li>
                <li className="text-white">&bull; test</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};
export { Tiles };
