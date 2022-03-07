import React from 'react';
import ProfilePic from './images/Nathan-Anthony.png';
import Ball from './images/ball 03 copy.png'
import classnames from "classnames";
//import ReactIcon from './images/React-Icon.svg';
const Images = ({width,height,alt}) => {
    const images = ({ProfilePic,Ball});
    return (
        <img src={images.ProfilePic} className={classnames(`lg:w-${width} lg:h-${height}  w-22 h-22 z-10 rounded-full relative   `)} alt={`${alt}`} />
    
    )
}

export { Images };
