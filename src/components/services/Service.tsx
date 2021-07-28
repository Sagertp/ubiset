import React from "react";

const Service = (props:any) => {
  return (
    <article className="col-xxl-6" key={props.k}>
      <i className={props.icono}></i>
      <h3>{props.titulo}</h3>
      <p>{props.contexto}</p>
    </article>
  );
};

export default Service;
