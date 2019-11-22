import React, {Component} from 'react';
import './App.css';
import Cabecera from './componentes/cabecera';
import PiePagina from './componentes/pie_pagina';
import Tareas from './componentes/tareas';
import Layout from './componentes/layout';

class App extends Component {
  constructor(props) {
     super(props)
     this.state = {
        nuevaTarea: "",
        tareas:[]
     }
  }
manejadorTareas =(event) => {
  this.setState({
    nuevaTarea: event.target.value,
  })
}
manejadorDeEntrada=(event)  =>{
  event.preventDefault();
  let nuevaTarea = this.state.tareas;
  nuevaTarea.push(this.state.nuevaTarea)
  this.setState({
    nuevaTarea: "",
    tareas: nuevaTarea
  })
}

render() {
     return (
      <Layout>
      <Cabecera/>
            
           <form onSubmit={this.manejadorDeEntrada}>     
           <input 
              value={this.state.nuevaTarea}
              onChange={this.manejadorTareas}  type="text" className="new-task"
           />
            </form>
          <div className='caja'>
            { this.state.tareas.map(task => <Tareas /> )}
          </div>
      <PiePagina/>
      </Layout>
     );
  }
}

export default App;
