import React from 'react';

function NuevaTarea (props){
    return (
        <div className="caja">
            <h5 className="title">{props.value}</h5>
        </div> 
    );
}

export default NuevaTarea;