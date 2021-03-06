import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid bodyHome">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="fondo-home">
            {/*<img className="img-services" src={servicios} alt="" />*/}  
            <h2>Utilizamos la investigación, la estrategia y el diseño para crear <p className="negrita"> experiencias de usuario atractivas</p></h2>
            <h3>01<strong>/05</strong></h3>
          </div>         
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6"></div>
      </div>
    </div>         
  );
};
export default Home;
