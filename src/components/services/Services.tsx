import React from "react";
import "./Services.css";
import servicios from "./SERVICIOS.png"
import dg from "./diseno.png"
import dw from "./web.png"
import fg from "./fotografia.png"
import pl from "./publicidad.png"

const Services = () => {
  return (
    <div className="container-fluid bodyservices">
      <div className="row left">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="fondo-serv">
            {/*<img className="img-services" src={servicios} alt="" />*/}
            <h2>Servicios</h2>
            <p>
              Entregamos sitios web basados en plataformas de comercio electrónico, desarrollo de sitios web corporativos y presencia digital en todos los canales de venta.
            </p>
            <h3>03<strong>/06</strong></h3>
          </div>             
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 after">
          <div className="servicios">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <img className="" src={dg} alt="" />
                <h4>Diseño Gráfico</h4>
                <p>Diseño gráfico para redes sociales y otros canales de ventas digitales. 
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <img className="" src={dw} alt="" />
                <h4>Desarrollo web</h4>
                <p>Plataformas e-commerce y sitios web corporativos. 
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
               <img className="" src={fg} alt="" />
                <h4>Fotografía</h4>
                <p>Fotografía profesional, para productos, espacios y personas. 
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <img className="" src={pl} alt="" />
                <h4>Publicidad en Linea</h4>
                <p>Campañas de públicidad en Facebook y Google Ads. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
};
export default Services;
