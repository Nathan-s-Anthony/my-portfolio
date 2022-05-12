import React from "react";
import ProfilePic from "./images/Nathan-Anthony.png";
import Ball from "./images/ball 03 copy.png";
import ProjectsCompleted from "./images/Projects-completed.svg";
import BlogPosts from "./images/Blog-posts.svg";
import SemanticHtml from "./images/Semantic-html.jpg";
import classnames from "classnames";
import BookMarkThumbnail from "./images/BookmarkLandingPage-Thumbnail.png";
import Timetracking from "./images/Timetracking-dashboard-thumbnail.png";
import LaunchCountDownTimer from "./images/CountDownTracker-Thumbnail.png";
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
    [LaunchCountDownTimer],
  ];

  return (
    <img
      src={`${images[arrI][arrO]}`}
      className={classnames(
        ` rounded-${borderRadius}  z-10 w-${width} h-${height} relative max-w-full  `
      )}
      alt={`${alt}`}
    />
  );
};

export { Images };
