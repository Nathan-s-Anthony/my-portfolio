import React from 'react';
import ProfilePic from './images/Nathan-Anthony.png';
import classnames from "classnames";
//import ReactIcon from './images/React-Icon.svg';
const Images = (width,height) => {
    
    return (
        <img src={ProfilePic} className={classnames(`w-${width} h-${height} rounded-full shadow-lg z-1`)} alt={"Nathan Anthony"} />
    
    )
}

export { Images };