import React from 'react';

function MostrarTarea (props){
    return (
        // se crea una caja la cual tendra todos sus hijos alineados en FILA (ROW) y en línea 
        // para que se guarden una debajo de otra
        <div className="caja caja-tareas">
            {/* se creara una caja con toda la lista de tareas */}
            <div className='mostrar-tareas'>
                <p className="lista-tareas">{props.value}</p>
            </div>
            {/* cada tarea tendra un boton de eliminar*/}
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