import React from "react";
import redes from '../images/redes.jpg';
import "../App.css";

const CompFooter = () => {
    return (
        <div>
            <div className="card-body">
                <h5 className="card-title">Direccion calle 113 # 23 - 4</h5>
                <p className="card-text">correo salmamina@gmail.com - telefono 4516853 - 4845484548</p>
                <img src={redes} className="redesImg" alt="logo"/>
            </div>
            <div className="card-footer text-muted ">
                lunes - viernes horario 8am - 6pm
            </div>
        </div>
    )
}
export default CompFooter;