import React, {Fragment} from 'react';
import NuevaTarea from './nueva_tarea';

function ListaTareas (props) {
    return (

// creamos una caja para que se guarden todas las tareas aquí
        <div className="caja">
        <Fragment>
            {props.tareas.map((tareas, id) =>   
                <NuevaTarea
                    key={id}
                    id={id}
                    manejadorEliminacion={props.manejadorEliminacion}
                    value={tareas}
                />
            )}
        </Fragment>
        </div>
    )
}

export default ListaTareas;