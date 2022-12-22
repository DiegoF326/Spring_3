import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/cita/";

const CompAgregarCitas = () => {
  const [fecha, setFecha] = useState("");
  const [nombres, setNombres] = useState("");
  const [lugar, setLugar] = useState("");
  const navigate = useNavigate();

  //funcion guardar
  const GuardarCitas = async (g) => {
    g.preventDefault();
    await axios.post(URL, {
      fecha: fecha,
      nombres: nombres,
      lugar: lugar
    });
    navigate("/citas");
  };
  return (
    <div>
      <h3> Modulo Agregar Citas</h3>
      <form onSubmit={GuardarCitas}>
        <div className="mb -3">
          <label className="form-label"> Fecha </label>
          <input
            value={fecha}
            onChange={(g) => setFecha(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Nombres </label>
          <input
            value={nombres}
            onChange={(g) => setNombres(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Lugar </label>
          <input
            value={lugar}
            onChange={(g) => setLugar(g.target.value)}
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
export default CompAgregarCitas;
