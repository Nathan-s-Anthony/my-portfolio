import React from "react";
import classnames from "classnames";

const Button = ({ size, bgColor, textColor, text,borderColor,width }) => {

    return (
        <button className={classnames(`bg-${bgColor} text-${textColor} border-${borderColor}  w-${width}  transition duration-500 ease-in-out px-8 py-3 border border-transparent  rounded-md text-medium tracking-wide  mt-5 mb-5  `, {
            "text-md": size === 'sm',
            "text-xl": size === 'lg',
        })}>
            {text}
        </button>
    )
}

export { Button }