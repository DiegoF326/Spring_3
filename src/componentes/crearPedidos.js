import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/pedido/";

const CompAgregarPedidos = () => {
  const [nombreCliente, setNombreCliente] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [valorProducto, setValorProducto] = useState("");
  const [valorTotalPed, setValorTotalPed] = useState("");
  const [fechaPedido, setFechaPedido] = useState("");
  const navigate = useNavigate();

  //funcion guardar
  const GuardarPedidos = async (g) => {
    g.preventDefault();
    await axios.post(URL, {
      nombreCliente: nombreCliente,
      nombreProducto: nombreProducto,
      cantidad: cantidad,
      valorProducto: valorProducto,
      valorTotalPed: valorTotalPed,
      fechaPedido: fechaPedido
    });
    navigate("/pedidos");
  };
  return (
    <div>
      <h3> Modulo Agregar Pedidos</h3>
      <form onSubmit={GuardarPedidos}>
        <div className="mb -3">
          <label className="form-label"> Cliente </label>
          <input
            value={nombreCliente}
            onChange={(g) => setNombreCliente(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Producto </label>
          <input
            value={nombreProducto}
            onChange={(g) => setNombreProducto(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Cantidad </label>
          <input
            value={cantidad}
            onChange={(g) => setCantidad(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Valor del Producto </label>
          <input
            value={valorProducto}
            onChange={(g) => setValorProducto(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Valor del Pedido </label>
          <input
            value={valorTotalPed}
            onChange={(g) => setValorTotalPed(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Fecha del Pedido </label>
          <input
            value={fechaPedido}
            onChange={(g) => setFechaPedido(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};
export default CompAgregarPedidos;
