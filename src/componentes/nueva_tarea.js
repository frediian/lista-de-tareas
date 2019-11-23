import React from 'react';

function NuevaTarea (props){
    return (
        <div className="caja">
            <h5 className="title">{props.value}</h5>
            <div className="caja-borrar">
                <button 
                    onClick={ () => props.manejadorEliminacion (props.id)}
                    className="boton-borrar"    
                >
                    X
                </button>
            </div>
        </div> 
    );
}

export default NuevaTarea;