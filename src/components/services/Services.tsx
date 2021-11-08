import React, { useState } from "react";
import "./Services.css";
import Service from "./Service";
import ubiset from "../../utilities/data";
const Services = () => {
  const cont = 0
  const lista = ubiset.servicios.servicio;
  const [servicio, ] = useState(lista);
  console.log(servicio);
  return (
    <div className="container-fluid bodyservices">
      <div className="row left">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="fondo-serv">
            {/*<img className="img-services" src={servicios} alt="" />*/}
            <h2><span>{ubiset.servicios.titulo}</span></h2>
            <p>{ubiset.servicios.contexto}</p>
            <h3>03<strong>/06</strong></h3>
          </div>             
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 after">
          <div className="servicios">
            <div className="row">
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
        </div>
      </div>
    </div>    
  );
};
export default Services;
