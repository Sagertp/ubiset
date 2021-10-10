import React from "react";
import "./Creative.css";
import us from "./open.jpg"
const Creative = () => {
  return (
    <div className="container-fluid bodywe">
      <div className="row grid">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="fondo-we">
            {/*<img className="img-services" src={servicios} alt="" />*/}
            <h2>Nosotros</h2>
            <p>
              Somos un equipo enfocado en brindar soluciones digitales para la web, aprovechando la tecnología para ayudarte a crecer.
            </p>
            <h3>02<strong>/06</strong></h3>
          </div> 
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="fondo-we">
                <img className="img-us" src={us} alt="" />
              </div>
            </div>
          </div>       
        </div>
      </div>
    </div>
  );
};
export default Creative;
