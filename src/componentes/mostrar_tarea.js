import React from 'react';

function MostrarTarea (props){
    return (
        <div className="caja caja-tareas">
            {/* <div> */}
            <div className='mostrar-tareas'>
            <p className="lista-tareas">{props.value}</p>
            </div>
            {/* <div> */}
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

export default MostrarTarea;