import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid bodyHome">
        <div className="row">
          <div className="col-md-5 glass"></div>
          <div className="col-md-7"></div>
        </div>
        <div className="container">
          <div className="row top1">
            <h1>
	      The typeface dosen`t really metter, <br></br> as long as the{" "}
              <span> text is good. </span>{" "}
            </h1>
          </div>
          <div className="row align-items-end top2">
	    <p className="col-md-6"><span>01</span> / 07</p>
	      <p className="col-md-6 languaje"><span>ES</span> / ENG</p>
          </div>
        </div>
      </div>
  );
};
export default Home;
