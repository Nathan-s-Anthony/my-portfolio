import React from 'react';
import ProfilePic from './images/Nathan-Anthony.png';
import Ball from './images/ball 03 copy.png';
import ProjectsCompleted from './images/Projects-completed.svg';
import BlogPosts from './images/Blog-posts.svg';
import SemanticHtml from './images/Semantic-html.jpg';
import classnames from "classnames";
//import ReactIcon from './images/React-Icon.svg';
const Images = ({alt, images, arrI, arrO,borderRadius }) => {
    images = [
        [ProfilePic],
        [Ball],
        [ProjectsCompleted],
        [BlogPosts],
        [SemanticHtml],
    ]


    return (
        <img src={`${images[arrI][arrO]}`} className={classnames(`lg:w-mainImgW lg:h-mainImgH rounded-${borderRadius}  z-10  relative  w-60 h-60  `)} alt={`${alt}`} />

    )
}

export { Images };
