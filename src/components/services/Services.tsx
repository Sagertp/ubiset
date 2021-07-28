import React, { useState } from "react";
import "./Services.css";
import Service from "./Service";
import ubiset from "../../utilities/data";

const Services = () => {
  const cont = 0
  const lista = ubiset.servicios.servicio;
  const [servicio, setServicio] = useState(lista);
  console.log(servicio);
  return (
    <div className="container-fluid bodyServices">
      <div className="row">
        <div className="col-md-5 glass"></div>
        <div className="col-md-7"></div>
      </div>
      <div className="container">
        <div className="row top1">
          <div className="col-xxl-4">
            <h1>
              <span>{ubiset.servicios.titulo}</span>
            </h1>
            <p>{ubiset.servicios.contexto}</p>
          </div>
          <div className="col-xxl-8 row services">
            {servicio.map((servicio) => (
              <Service
                k={cont + 1}
                titulo={servicio.titulo}
                contexto={servicio.contexto}
                icono={servicio.icono}
              />
            ))}
          </div>
        </div>
        <div className="row top2">
          <p className="col-md-6">
            <span>03</span> / 07
          </p>
          <p className="col-md-6 languaje">
            <span>ES</span> / ENG
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
