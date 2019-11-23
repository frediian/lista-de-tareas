import React, {Fragment} from 'react';
import NuevaTarea from './nueva_tarea';

function ListaTareas (props) {
    return (
        <Fragment>
            {props.tareas.map((tareas, id) =>   
                <NuevaTarea
                    key={id}
                    value={tareas}
                />
            )}
        </Fragment>
    )
}

export default ListaTareas;