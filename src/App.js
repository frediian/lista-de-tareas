import React, {Component} from 'react';
import './App.css';
import Cabecera from './componentes/cabecera';
import PiePagina from './componentes/pie_pagina';
import Layout from './componentes/layout';
import ListaTareas from './componentes/lista_tareas';
import EscribirTarea from './componentes/escribir_tarea';
import Titulo from './componentes/titulo';
import Descripcion from './componentes/descripcion';

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

manejadorEliminacion = (id) => {
  let nuevaTarea = this.state.tareas;
  nuevaTarea.splice(id, 1)
  this.setState({
    tareas: nuevaTarea,
  })
}

render() {
     return (
      <Layout>

      <Cabecera/>
      <Descripcion/>
      <EscribirTarea 
          manejadorDeEntrada={this.manejadorDeEntrada}     
          manejadorTareas={this.manejadorTareas}
          value={this.state.nuevaTarea}
      />
        
      <ListaTareas 
          tareas={this.state.tareas}
          manejadorEliminacion={this.manejadorEliminacion}
      />
      <Titulo/>
      <PiePagina/>

      </Layout>
     );
  }
}

export default App;
