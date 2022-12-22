import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:5000/api/cita/";

const CompEditarCitas = () => {
  const [fecha, setFecha] = useState("");
  const [nombres, setNombres] = useState("");
  const [lugar, setLugar] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // funcion actualizar
  const ActualizarCitas = async (g) => {
    g.preventDefault();
    await axios.put(`${URL}${id}`, {
        fecha: fecha,
        nombres: nombres,
        lugar: lugar
    });
    navigate("/citas");
  };

  useEffect(() => {
    getCitasByid();
    // eslint-disable-next-line
  }, []);

  const getCitasByid = async () => {
    const res = await axios.get(`${URL}${id}`);
    setFecha(res.data.fecha);
    setNombres(res.data.nombres);
    setLugar(res.data.lugar);
  };

  return (
    <div>
      <h3> Modulo Editar Citas</h3>
      <form onSubmit={ActualizarCitas}>
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

export default CompEditarCitas;
