import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Rodrigo Zapana Flores</h1>
      <p>Junior Full-Stack Developer | Javascript(ES6) | React | MongoDB | ExpressJS | NodeJS | Html & Css</p>
    </div>
  );
};

export default Cover;
