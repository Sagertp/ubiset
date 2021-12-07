import React from "react";
import "./Portfolio.css";
import castellana from "./dos.png"
import integraciones from "./tres.png"
import remet from "./cuatro.png"
import nueva from "./3d.png"


const Portfolio = () => {
  return (
    <div className="container-fluid bodyPortfolio">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="fondo-port">
            <h2>Proyectos</h2>
            <a  href="http://www.castellanamotors.com/" target="_blank">Castellana Motors</a>
            <a  href="https://www.msintegraciones.com.ve/" target="_blank">M & S Integraciones</a>
            <a  href="http://www.remet.cl/" target="_blank">Remet</a>  
            <a  href="https://www.longfafans.com/" target="_blank">Lonfar</a>    
            <h3>04<strong>/06</strong></h3>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="folio">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 uno">  
                <a  href="http://www.castellanamotors.com/" target="_blank"><img src={castellana} alt="" /></a>                              
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 dos">                
                <a  href="https://www.msintegraciones.com.ve/" target="_blank"><img src={integraciones} alt="" /></a>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 tres">
                <a  href="http://www.remet.cl/" target="_blank"><img src={remet} alt="" /></a>                  
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 cuatro">
                <a  href="https://www.longfafans.com/" target="_blank"><img src={nueva} alt="" /></a>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
