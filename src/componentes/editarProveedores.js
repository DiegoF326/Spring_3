import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:5000/api/proveedor/";

const CompEditarProveedores = () => {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [empresa, setEmpresa] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // funcion actualizar

  const ActualizarProveedores = async (g) => {
    g.preventDefault();
    await axios.put(`${URL}${id}`, {
      nombres: nombres,
      apellidos: apellidos,
      documento: documento,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
      empresa: empresa
    });
    navigate("/proveedores");
  };

  useEffect(() => {
    getProveedoresByid();
    // eslint-disable-next-line
}, []);


  const getProveedoresByid = async () => {
    const res = await axios.get(`${URL}${id}`)
    setNombres(res.data.nombres)
    setApellidos(res.data.apellidos)
    setDocumento(res.data.documento)
    setCorreo(res.data.correo)
    setTelefono(res.data.telefono)
    setDireccion(res.data.direccion)
    setEmpresa(res.data.empresa)
  };

  return (
    <div>
      <h3> Modulo Editar Proveedores</h3>
      <form onSubmit={ActualizarProveedores}>
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
          <label className="form-label"> Apellidos </label>
          <input
            value={apellidos}
            onChange={(g) => setApellidos(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Documento </label>
          <input
            value={documento}
            onChange={(g) => setDocumento(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Correo </label>
          <input
            value={correo}
            onChange={(g) => setCorreo(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Telefono </label>
          <input
            value={telefono}
            onChange={(g) => setTelefono(g.target.value)}
            type="number"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Direccion </label>
          <input
            value={direccion}
            onChange={(g) => setDireccion(g.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb -3">
          <label className="form-label"> Empresa </label>
          <input
            value={empresa}
            onChange={(g) => setEmpresa(g.target.value)}
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

export default CompEditarProveedores;
