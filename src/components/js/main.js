import React from "react";

const Main = () => {
    return (
        <>
            <main className=" flex-row min-w-full  relative   flex-wrap justify-center content-center gap-5 flex" >
                <section className="flex flex-row flex-wrap  items-start w-full mt-10 md:container  ">
                    <div className="  flex  flex-row  flex-wrap w-3/6  ">
                        <h1 className="md:text-8xl text-center font-extrabold text-primary tracking-wide md:text-left  leading-relaxed">Hello my name is Nathan </h1>
                        <h2 className="md:text-5xl  text-center font-semibold text-primary  tracking-wide md:text-left  leading-relaxed">I <span className="text-current">  &#128151;</span> everything <code>Web Development</code> </h2>
                        <button className=" transition duration-500 ease-in-out bg-blue-600 hover:bg-blue-700 mt-10 mb-10  items-center justify-center px-8 py-5 border border-transparent  text-xl font-medium rounded-md   0 text-medium text-white tracking-wide   ">Get in touch</button>
                    </div>
                    <div className="  flex  flex-col  flex-wrap w-3/6  self-start ">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-50 h-50">
                            <path fill="#0F62FE" d="M42,-66.3C53.4,-58,60.8,-44.6,69.3,-30.4C77.7,-16.2,87.1,-1.1,86.6,13.4C86,28,75.4,42.1,63.8,55.3C52.3,68.5,39.8,80.8,24.8,85.9C9.7,91,-7.9,88.9,-24.4,83.7C-40.9,78.6,-56.4,70.4,-66.7,58.1C-77,45.7,-82.1,29.1,-83.5,12.6C-85,-3.9,-82.9,-20.4,-75.2,-33.2C-67.6,-46,-54.5,-55.2,-41,-62.5C-27.5,-69.8,-13.8,-75.3,0.8,-76.5C15.3,-77.7,30.6,-74.6,42,-66.3Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                </section>


            </main>
        </>
    )

}

export { Main };