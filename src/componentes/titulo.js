import React from 'react';

function Titulo(){
    return (
        <div className="caja">
            <h1 className="titulo">
                App de Prueba
            </h1>
            <p className="texto-simple">
                Comprobando y realizando componentes en el Lenguaje React JS 
            </p>
            <h4 className="titulo">
                Deja tu comentario o visita la guía completa:
            </h4>
            <a
              className="vinculo"
              href="http://bit.ly/2QQZeay"
              target="_blank"
              rel="noopener noreferrer"
            >
                Guía Paso a Paso
            </a>
        </div>
    );
    }

export default Titulo;