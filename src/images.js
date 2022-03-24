import React from 'react';
import ProfilePic from './images/Nathan-Anthony.png';
import Ball from './images/ball 03 copy.png';
import ProjectsCompleted from './images/Projects-completed.svg';
import BlogPosts from './images/Blog-posts.svg';
import classnames from "classnames";
//import ReactIcon from './images/React-Icon.svg';
const Images = ({ width, height, alt, images, arrI, arrO,borderRadius }) => {
    images = [
        [ProfilePic],
        [Ball],
        [ProjectsCompleted],
        [BlogPosts],
    ]


    return (
        <img src={`${images[arrI][arrO]}`} className={classnames(`lg:w-${width} lg:h-${height} rounded-${borderRadius}  z-10  relative  w-20rem h-20rem  `)} alt={`${alt}`} />

    )
}

export { Images };
