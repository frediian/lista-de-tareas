import React from 'react';

function Tareas (props){
    return (
        <div className="caja">
            <h3 className="title">{props.value}</h3>
        </div>
    );
}

export default Tareas;