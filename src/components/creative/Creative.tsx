import React from "react";
import "./Creative.css";
import typeWriter from "./typewriter_PNG13.png";
const Creative = () => {
  return (
    <div className="container-fluid bodyCreative">
      <div className="row">
        <div className="col-md-5 glass"></div>
        <div className="col-md-7"></div>
      </div>

      <div className="container">
        <div className="row align-items-center top1">
          <div className="col-xxl-6">
            <h1>
              <span>WE ARE</span>
              <br></br> CREATIVE
            </h1>
            <p>
              {" "}
              Etiam ut elit dictum, gravida ligula non, mollis tortor. Aliquam
              non felis in sapien molestie interdum. Ut bibendum, sem vel
              egestas faucibus, nisi diam consectetur justo, et tempor nulla
              elit a velit. Quisque eget sollicitudin quam, vitae aliquet felis.
              Mauris tincidunt ultricies velit non pellentesque. Phasellus sed
              porta ante. Praesent ultrices vitae mi vitae consequat.{" "}
            </p>
            <p>
              {" "}
              Cras porttitor, neque ac sodales condimentum, sem nunc interdum
              mauris, fringilla mollis nibh erat luctus mauris. Fusce sed
              aliquam velit, consequat cursus sem. Proin volutpat vehicula
              cursus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Cras quis urna arcu.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Sed odio risus, vulputate et
              lectus nec, facilisis eleifend diam. In hac habitasse platea
              dictumst.{" "}
            </p>
          </div>
          <div className="row col-xxl-6">
            <img
              className="col creative-img"
              src={typeWriter}
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
export default Creative;
