import React from "react";
import "./Contact.css";

const Portfolio = () => {
  return (
    <div className="container-fluid bodyContact">
      <div className="row">
        <div className="col-md-5 glass"></div>
        <div className="col-md-7"></div>
      </div>

      <div className="container">
        <div className="row align-items-center top1">
          <div className="col-xxl-6">
            <h1>
              <span>-</span>
              CONTACTO
            </h1>
            <h2>EMAIL:</h2>
            <span>ubiset.ca@gmail.com</span>
            <h2>TELEFONO:</h2>
            <span>+58 0414 338 2379</span>
            <br />
            <span>+58 0414 337 9640</span>
          </div>
          <div className="row col-xxl-6 fromContact">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre Completo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Telefono
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  Nunca compartiremos tu email con terceros.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mensaje
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
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
