import React from "react";
import ProfilePic from "./images/Nathan-Anthony.png";
import Ball from "./images/ball 03 copy.png";
import ProjectsCompleted from "./images/Projects-completed.svg";
import BlogPosts from "./images/Blog-posts.svg";
import SemanticHtml from "./images/Semantic-html.jpg";
import classnames from "classnames";
import BookMarkThumbnail from "./images/Bookmark-Landing-Page-thumbnail.jpg";
import Timetracking from "./images/Timetracking-dashboard-thumbnail.jpg";
//import ReactIcon from './images/React-Icon.svg';
const Images = ({ alt, images, arrI, arrO, borderRadius, width, height }) => {
  images = [
    [ProfilePic],
    [Ball],
    [ProjectsCompleted],
    [BlogPosts],
    [SemanticHtml],
    [BookMarkThumbnail],
    [Timetracking],
  ];

  return (
    <img
      src={`${images[arrI][arrO]}`}
      className={classnames(
        ` rounded-${borderRadius}  z-10 w-${width} h-${height} relative  w-60 h-60  `
      )}
      alt={`${alt}`}
    />
  );
};

export { Images };
