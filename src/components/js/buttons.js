import React from "react";

const Button = ({  text,width}) => {

    return (
        <button className={ "text-white bg-blue-600 transition duration-200 ease-in-out px-8 py-3 border transform hover:-translate-y-1   lg:w-3/6 w-4/6 rounded-md text-medium tracking-wide shadow-lg mt-5 mb-5 "}>
            {text}
        </button>
    )
}

export { Button }