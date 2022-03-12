import React from 'react';
import ProfilePic from './images/Nathan-Anthony.png';
import Ball from './images/ball 03 copy.png'
import classnames from "classnames";
//import ReactIcon from './images/React-Icon.svg';
const Images = ({ width, height, alt, images, arrI, arrO }) => {
    images = [
        [ProfilePic],
        [Ball]
    ]


    return (
        <img src={`${images[arrI][arrO]}`} className={classnames(`w-${width} h-${height} lg:h-auto lg:w-auto  w-22 h-22 z-10 rounded-full relative   `)} alt={`${alt}`} />

    )
}

export { Images };
