import React from "react";

function Cabecera() {
    return (
        <div className="caja">
            {/* creamos 2 cajas para ingresar una imagen y texto */}
            <div className="caja-cabecera">
                    {/* la primera caja siempre tendra el mismo tamaño de la imagen */}
                <div>
                <img alt="logo" src="./logo192.png" className="logo-imagen"/>
                </div>
                    {/* la segunda caja rellenera todo el espacion restante de la imagen */}
                <div >
                    {/* los hijos de esta caja se alinearan en filas */}
                    <div>
                        <h6 className="titulo">NORBER DIGITAL APP</h6>
                    </div>
                    <div >
                        <a
                            className="vinculo"
                            href="http://bit.ly/37I8Vhs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Repositorio
                        </a>

                        <a
                            className="vinculo"
                            href="http://bit.ly/2Dm1E9s"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Aprender ReactJS
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cabecera;