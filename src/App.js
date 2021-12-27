/*
  Ver como abrir un modal para poder editar y agregar nuevos usuarios
  Filtrar la tabla
  extra: paginacion de tabla
*/
import React, { Component } from 'react';
import Nav from './components/Nav';
import TableData from './components/TableData';
class DataTable extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <TableData />
      </div>
    )
  }
}

export default DataTable;