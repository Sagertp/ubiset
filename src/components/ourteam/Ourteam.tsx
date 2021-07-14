import React from "react";
import "./Ourteam.css";
import peopple from "./h-b-m.png";
const Creative = () => {
  return (
    <div className="container-fluid bodyCreative">
      <div className="row">
        <div className="col-md-5 glass"></div>
        <div className="col-md-7"></div>
      </div>

      <div className="container">
        <div className="row align-items-center top1">
          <div className="col-xxl-4">
            <h1>
              <span>OUR</span>
              <br></br> TEAM
            </h1>
            <p>
              {" "}
              Etiam ut elit dictum, gravida ligula non, mollis tortor. Aliquam
              non felis in sapien molestie interdum.
              <br></br>
              Ut bibendum, sem vel egestas faucibus, nisi diam consectetur
              justo, et tempor nulla elit a velit. Quisque eget sollicitudin
              quam, vitae aliquet felis. Mauris tincidunt ultricies velit non
              pellentesque. Phasellus sed porta ante. Praesent ultrices vitae mi
              vitae consequat.{" "}
            </p>
          </div>
          <div className="row col-xxl-8">
            <img
              className="col-xxl-6 creative-img"
              src={peopple}
              alt="TypeWriter"
            />
            <img
              className="col-xxl-6 creative-img"
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
export default Creative;