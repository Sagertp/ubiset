import React from "react";
import "./Ourteam.css";

const Creative = () => {
  return (
    <div className="container-fluid bodyCreative">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="fondo-contact">
            {/*<img className="img-services" src={servicios} alt="" />*/}
            <h2>Contacto</h2>
            <h4>EMAIL:</h4>
            <p>ubiset.ca@gmail.com</p>
            <h4>TELÉFONO:</h4>
            <p>+58 0414 3379640</p>
            <h3>
              06<strong>/06</strong>
            </h3>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="fondo-contact-2 after">
            <div className="container">
              <form>
                <div className="form-group">
                  <label>Nombre</label>
                  <input
                    type="nombre"
                    className="form-control"
                    id="exampleInputNombre1"
                    aria-describedby="nombrelHelp"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label>Teléfono</label>
                  <input
                    type="phone"
                    className="form-control"
                    id="exampleInputphone"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label>Mensaje</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Creative;
