import React from "react";

function PiePagina () {
    return (
        <div className="caja">  

            <a
              className="vinculo"
              href="https://norberdigital.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
    
    
          <a
              className="vinculo"
              href="https://facebook.com/norberdigital"
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
              href="https://medium.com/@ernestognw/construye-tu-primera-aplicaci%C3%B3n-web-con-reactjs-parte-1-4c8bcca3b9db"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guía Original
          </a>
        </div>

    );
}

export default PiePagina;