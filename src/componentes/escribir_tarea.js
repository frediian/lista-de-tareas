import React from 'react';

function EscribirTarea(props){
    return (
        <form onSubmit={props.manejadorDeEntrada}>     
        <input 
           value={props.value}
           onChange={props.manejadorTareas}  
           type="text" 
           className="new-task tarea" 
           
        />
        </form>

    );
}

export default EscribirTarea;