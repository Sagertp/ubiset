import React, { ChangeEvent, useState } from "react";
import funcProps from "../../libs/interfaces/funcProps";
import "./Contact.css";

const Form = (prop: funcProps) => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [values, setValues] = useState(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(values);
    prop.addMessage(values);
    setValues({ ...initialState });
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
      <div className="fondo-contact-2 after">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="name"
                aria-describedby="nombrelHelp"
                onChange={handleInputChange}
                value={values.name}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                aria-describedby="emailHelp"
                onChange={handleInputChange}
                value={values.email}
              />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                name="message"
                onChange={handleInputChange}
                value={values.message}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
