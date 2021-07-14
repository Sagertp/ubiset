import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="container-fluid bodyServices">
      <div className="row">
        <div className="col-md-5 glass"></div>
        <div className="col-md-7"></div>
      </div>
      <div className="container">
        <div className="row top1">
          <div className="col-xxl-4">
            <h1>
              <span>OUR</span> SERVICES
            </h1>
            <p>
              Etiam ut elit dictum, gravida ligula non, mollis tortor. Aliquam
              non felis in sapien molestie interdum. Ut bibendum, sem velegestas
              faucibus,
            </p>
          </div>
          <div className="col-xxl-8 row services">
            <article className="col-xxl-6">
              <i className="bi bi-trophy iconStyle"></i>
              <h3>BRANDING</h3>
              <p>
                Etiam ut elit dictum, gravida ligula non, mollis tortor. Aliquam
                non felis in sapien molestie interdum. Ut bibendum, sem
                velegestas faucibus,
              </p>
            </article>
            <article className="col-xxl-6">
              <i className="bi bi-camera iconStyle"></i>
              <h3>PHOTOGRAPHY</h3>
              <p>
                Etiam ut elit dictum, gravida ligula non, mollis tortor. Aliquam
                non felis in sapien molestie interdum. Ut bibendum, sem
                velegestas faucibus,
              </p>
            </article>
            <article className="col-xxl-6">
              <i className="bi bi-gear iconStyle"></i>
              <h3>ANIMATION</h3>
              <p>
                Etiam ut elit dictum, gravida ligula non, mollis tortor. Aliquam
                non felis in sapien molestie interdum. Ut bibendum, sem
                velegestas faucibus,
              </p>
            </article>
            <article className="col-xxl-6">
	      <i className="bi bi-lightbulb iconStyle"></i>
              <h3>GENERATE IDEAS</h3>
              <p>
                Etiam ut elit dictum, gravida ligula non, mollis tortor. Aliquam
                non felis in sapien molestie interdum. Ut bibendum, sem
                velegestas faucibus,
              </p>
            </article>
          </div>
        </div>
        <div className="row top2">
	  <p className="col-md-6"><span>03</span> / 07</p>
	    <p className="col-md-6 languaje"><span>ES</span> / ENG</p>
        </div>
      </div>
    </div>
  );
};
export default Services;
