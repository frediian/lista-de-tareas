import React, {Fragment} from 'react';
import MostrarTarea from './mostrar_tarea';

function ListaTareas (props) {
    return (

// creamos una caja para que se guarden y muestren todas las tareas
// conforme las agregamos
        <div className="caja">
        <Fragment>
            {props.tareas.map((tareas, id) =>   
                <MostrarTarea
                    key={id}
                    id={id}
                    value={tareas}
                    manejadorEliminacion={props.manejadorEliminacion}
                />
            )}
        </Fragment>
        </div>
    )
}

export default ListaTareas;