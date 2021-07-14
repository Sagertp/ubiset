import React from "react";
import "./Portfolio.css";
import peopple from "./h-b-m.png";

const Portfolio = () => {
  return (
    <div className="container-fluid bodyPortfolio">
      <div className="row">
        <div className="col-md-5 glass"></div>
        <div className="col-md-7"></div>
      </div>

      <div className="container">
        <div className="row align-items-center top1">
          <div className="col-xxl-6">
            <h1>
              <span>-</span>
              PROYECTOS
            </h1>
            <p>CASTELLANA MOTORS</p>
            <p>M & S INTEGRACIONES</p>
            <p>REMET</p>
          </div>
          <div className="row col-xxl-6">
            <img
              className="col-xxl-6 creative-img gray"
              src={peopple}
              alt="TypeWriter"
            />
            <img
              className="col-xxl-6 creative-img ligthblue"
              src={peopple}
              alt="TypeWriter"
            />
            <img
              className="col-xxl-6 creative-img blue"
              src={peopple}
              alt="TypeWriter"
            />
            <img
              className="col-xxl-6 creative-img darkblue"
              src={peopple}
              alt="TypeWriter"
            />
          </div>
        </div>
        <div className="row align-items-end top2">
          <p className="col-md-6">
            <span>02</span> / 07
          </p>
          <p className="col-md-6 languaje">
            <span>ES </span>/ ENG
          </p>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
