import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Rodrigo Zapana</h1>
        <p>Comunidad de Madrid, España</p>
      </div>
      <div className="footer-contact">
        <h3>Estudios :</h3>
        <p>Bootcamp intensivo de desarrollo web de 6 meses. Adquisición de altas capacidades para la creación de páginas web desde el entorno Backend y desde el entorno Frontend. Realización de proyectos de alto rendimiento. Tecnologias, JavaScript(ES6), MongoDB, Express, NodeJS, HTML, CSS, React.Otras tecnologías: Git, Postman.</p>
      </div>
      <div className="footer-sns">
        <div className="design-by"></div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/rodrigo-zapana-flores-b9a543256/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/RodrigoZapanaF1" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/rodrigo.zf.3" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
