import React from 'react';

function EscribirTarea(props){
    return (
        <form onSubmit={props.manejadorDeEntrada} className="caja">     
        <input 
           value={props.value}
           onChange={props.manejadorTareas}  
           type="text"
           minLength="5" 
           className="escribir-tarea tarea"
           placeholder="Escriba una o varias tareas a realizar luego de Enter..."            
        />
        </form>

    );
}

export default EscribirTarea;