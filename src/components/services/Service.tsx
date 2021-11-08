import React from "react";

const Service = (props:any) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6" key={props.k}>
      <i className={props.icono} />
      <h4>{props.titulo}</h4>
      <p>{props.contexto}</p>
    </div>
  );
};

export default Service;
