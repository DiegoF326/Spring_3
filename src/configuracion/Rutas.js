import CompMostrarProveedores from '../componentes/mostrarProveedores';
import CompAgregarProveedores from '../componentes/crearProveedores';
import CompEditarProveedores from '../componentes/editarProveedores';

import CompMostrarClientes from '../componentes/mostrarClientes';
import CompAgregarClientes from '../componentes/crearClientes';
import CompEditarClientes from '../componentes/editarClientes';

import CompMostrarCitas from '../componentes/mostrarCitas';
import CompAgregarCitas from '../componentes/crearCitas';
import CompEditarCitas from '../componentes/editarCitas';

import CompMostrarPedidos from '../componentes/mostrarPedidos';
import CompAgregarPedidos from '../componentes/crearPedidos';
import CompEditarPedidos from '../componentes/editarPedidos';

import CompInicio from './Inicio';
import {Route, Routes } from 'react-router-dom'

const CompRutas = () => {
    return(
    <Routes>
      <Route path='/' element = {<CompInicio/>}/>

      <Route path='/proveedores' element = { <CompMostrarProveedores/>} />
      <Route path='/proveedores/agregar' element = { <CompAgregarProveedores/>} />
      <Route path='/proveedores/editar/:id' element = { <CompEditarProveedores/>} />

      <Route path='/clientes' element = { <CompMostrarClientes/>} />
      <Route path='/clientes/agregar' element = { <CompAgregarClientes/>} />
      <Route path='/clientes/editar/:id' element = { <CompEditarClientes/>} />


      <Route path='/citas' element = { <CompMostrarCitas/>} />
      <Route path='/citas/agregar' element = { <CompAgregarCitas/>} />
      <Route path='/citas/editar/:id' element = { <CompEditarCitas/>} />

      <Route path='/pedidos' element = { <CompMostrarPedidos/>} />
      <Route path='/pedidos/agregar' element = { <CompAgregarPedidos/>} />
      <Route path='/pedidos/editar/:id' element = { <CompEditarPedidos/>} />
    </Routes>
)}
export default CompRutas;