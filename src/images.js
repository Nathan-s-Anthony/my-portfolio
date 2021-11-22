import React from 'react';
import ProfilePic from './images/pp.jpg';

const Images = () => {
    return (
        <img src={ProfilePic} alt="" className="py-25 px-25 w-25 h-25 bg-gradient-to-r from-green-400 to-blue-500  rounded-full" />
    )
}

export { Images };