import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/api/proveedor/";

const CompMostrarProveedores = () => {
  const [proveedores, setProveedor] = useState([]);
  useEffect(() => {
    getProveedores();
  }, []);

  // creamos la funcion para mostrar los proveedores

  const getProveedores = async () => {
    const res = await axios.get(URL);
    setProveedor(res.data);
  };

  // funcion para eliminar proveedores
  const eliminarProveedores = async (id) => {
    await axios.delete(`${URL}${id}`);
    getProveedores();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/proveedores/agregar" className="btn btn-primary mt-2 mb-2">
            {" "}
            <i className="fa-sharp fa-solid fa-user-plus"> </i>
          </Link>
          <table className="table">
            <thead className="tableThedBg">
              <tr>
                <th> Nombres </th>
                <th> Apellidos </th>
                <th> Documento </th>
                <th> Correo </th>
                <th> Telefono </th>
                <th> Direccion </th>
                <th> Empresa </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map((proveedor, index) => (
                <tr key={index}>
                  <td> {proveedor.nombres}</td>
                  <td> {proveedor.apellidos}</td>
                  <td> {proveedor.documento}</td>
                  <td> {proveedor.correo}</td>
                  <td> {proveedor.telefono}</td>
                  <td> {proveedor.direccion}</td>
                  <td> {proveedor.empresa}</td>
                  <td>
                    <Link
                      to={`/proveedores/editar/${proveedor._id}`}
                      className="btn btn-info"
                    >
                      {" "}
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarProveedores(proveedor._id)}
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
export default CompMostrarProveedores;
