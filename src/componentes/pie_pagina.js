import React from "react";

function PiePagina () {
    return (
        <div className="caja">
          <a
              className="vinculo"
              href="http://bit.ly/35GKOhD"
              target="_blank"
              rel="noopener noreferrer"
          >
              Blog
          </a>

          <a
              className="vinculo"
              href="http://bit.ly/2QUkM6s"
              target="_blank"
              rel="noopener noreferrer"
          >
              Facebook
          </a>
  
          <p className="texto-simple">
              Un pequeño paso para iniciar, <br/>una gran experiencia para ser profesional
          </p>

          <a
              className="vinculo"
              href="http://bit.ly/2QUkM6s"
              target="_blank"
              rel="noopener noreferrer"
          >
              Siguenos en YouTube
          </a>

        </div>
    );
}

export default PiePagina;