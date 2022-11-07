import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Project 1",
    desc: "Game HTML",
    text: "https://github.com/RodrigoZapanaFlores/htmlGame"
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 2",
    desc: "Handlebars",
    text:"https://github.com/RodrigoZapanaFlores/beatflix"
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "React",
    text:"https://github.com/RodrigoZapanaFlores/8BEATS"
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.text}><img src={slide.src} alt={slide.alt} /></a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
