import React from "react";

const Main = () => {
    return (
        <>
            <main className=" 2xl:container md:container  flex-row min-w-full  relative mt-60 h-60 flex-wrap justify-center content-center gap-5 flex" >
                <section className="flex  flex-col md:flex-row flex-wrap   2xl:container items-center w-full h-60 ">
                    <div className="w-full md:w-3/6 ">
                        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-500 tracking-wide text-center md:text-left leading-relaxed">Hello my name is Nathan </h1> 
                        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-500 tracking-wide text-center md:text-left leading-relaxed">I love everything <code>Web Development</code>&#128151; </h2>  
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