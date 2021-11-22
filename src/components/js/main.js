import React from "react";

const Main = () => {
    return (
        <>
            <main className=" flex-row min-w-full  relative   flex-wrap justify-center content-center gap-5 flex" >
                <section className="flex flex-row flex-wrap  items-center w-full mt-10 md:container  ">
                    <div className="w-full md:w-3/6 flex  flex-col  flex-wrap  ">
                        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-500 tracking-wide text-center md:text-left leading-relaxed">Hello my name is Nathan </h1> 
                        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-500 tracking-wide text-center md:text-left leading-relaxed">I love everything <code>Web Development</code> </h2>  
                        &#128151;
                    </div>
                    <div className="md:w-3/6">
                        Hello
                    </div>
                </section>
            </main>
        </>
    )

}

export { Main };