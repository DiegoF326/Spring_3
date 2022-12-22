import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URL = "http://localhost:5000/api/cita/";

const CompMostrarCitas = () => {
  const [citas, setCita] = useState([]);
  useEffect(() => {
    getCitas();
  }, []);

  // creamos la funcion para mostrar los citas

  const getCitas = async () => {
    const res = await axios.get(URL);
    setCita(res.data);
  };

  // funcion para eliminar Citas
  const eliminarCitas = async (id) => {
    await axios.delete(`${URL}${id}`);
    getCitas();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/citas/agregar" className="btn btn-primary mt-2 mb-2">
            {" "}
            <i className="fa-sharp fa-solid fa-user-plus"> </i>
          </Link>
          <table className="table">
            <thead className="tableThedBg">
              <tr>
                <th> Fecha </th>
                <th> Nombres </th>
                <th> Lugar </th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita, index) => (
                <tr key={index}>
                  <td> {cita.fecha}</td>
                  <td> {cita.nombres}</td>
                  <td> {cita.lugar}</td>
                  <td>
                    <Link
                      to={`/citas/editar/${cita._id}`}
                      className="btn btn-info"
                    >
                      {" "}
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => eliminarCitas(cita._id)}
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
export default CompMostrarCitas;
