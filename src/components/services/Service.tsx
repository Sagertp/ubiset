import React from "react";
import fg from "./fotografia.png";

const Service = (props:any) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" key={props.k}>
      <img className={props.icono} src={fg} alt="" />
      <h4>{props.titulo}</h4>
      <p>{props.contexto}</p>
    </div>
  );
};

export default Service;