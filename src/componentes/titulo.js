import React from 'react';

function Titulo(){
    return (
        <div className="caja">
            <h1 className="titulo">
                App de Prueba Responsiva
            </h1>
            <div className="texto-derecha">
                <p className="texto-simple">
                    Esta página es realizada con Lenguaje React JS, para realizar componentes en un Nivel Principiante 
                </p>
                <h4 className="titulo">
                    Deja tu comentario o visita la guía completa:
                </h4>
                <p className="texto-simple">
                    Realizar este ejercicio:  
                <a
                className="vinculo"
                href="http://bit.ly/2QQZeay"
                target="_blank"
                rel="noopener noreferrer"
                >
                    Guía Paso a Paso
                </a>
                
                o visita la Web Oficial de React para:  

                <a
                    className="vinculo"
                    href="http://bit.ly/2Dm1E9s"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Aprender ReactJS
                </a>
                </p>
            </div>
        </div>
    );
    }

export default Titulo;