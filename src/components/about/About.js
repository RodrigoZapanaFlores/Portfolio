import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Acerca de mi</h3>
        <p>
        Actualmente he terminado el Bootcamp de Full Stack Web Developer en Ironhack. Ha sido una experiencia muy enriquecedora, que me ha ayudado a crecer como programador y como persona. Busco trabajo como Full Stack, aunque estoy abierto a trabajar tanto en el Frontend como en el Backend. Me encanta programar y siempre tengo una gran cantidad de ideas
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
