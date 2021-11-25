import React from "react";

const Pagination =() =>{
    return(
        <div className="  bg-transparent w-32 h-3/6  right-0 top-0  flex flex-col flex-nowrap content-center justify-center items-center z-0 ">
        <div className="bg-transparent h-60 flex flex-col flex-nowrap content-center items-center justify-center ">
        <div className="w-1 h-6 bg-secondary mb-5 mt-5 border rounded-full"></div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#2e2e2e" className="w-16 h-16">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
</svg>
<div className="w-1 h-6 bg-secondary mb-5 mt-5 rounded-full"></div>
        </div>
        </div>
    )
}

export {Pagination}