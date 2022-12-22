import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/api/pedido/";

const CompMostrarPedidos = () => {
  const [pedidos, setPedido] = useState([]);
  useEffect(() => {
    getPedidos();
  }, []);

  // creamos la funcion para mostrar los pedidos

  const getPedidos = async () => {
    const res = await axios.get(URL);
    setPedido(res.data);
  };

  // funcion para eliminar pedidos
  const eliminarPedidos = async (id) => {
    await axios.delete(`${URL}${id}`);
    getPedidos();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/pedidos/agregar" className="btn btn-primary mt-2 mb-2">
            {" "}
            <i className="fa-sharp fa-solid fa-user-plus"> </i>
          </Link>
          <table className="table">
            <thead className="tableThedBg">
              <tr>
                <th> Cliente </th>
                <th> Producto </th>
                <th> Cantidad </th>
                <th> Valor del Producto </th>
                <th> Valor del Pedido </th>
                <th> Fecha del Pedido </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
            {pedidos.map((pedido, index) => (
                <tr key={index}>
                  <td> {pedido.nombreCliente}</td>
                  <td> {pedido.nombreProducto}</td>
                  <td> {pedido.cantidad}</td>
                  <td> {pedido.valorProducto}</td>
                  <td> {pedido.valorTotalPed}</td>
                  <td> {pedido.fechaPedido}</td>
                  <td>
                    <Link
                      to={`/pedidos/editar/${pedido._id}`}
                      className="btn btn-info"
                    >
                      {" "}
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarPedidos(pedido._id)}
                      className="btn btn-danger"
                    >
                      {" "}
                      <i className="fa-sharp fa-solid fa-trash"> </i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CompMostrarPedidos;
