import React from "react";
import "./Blog.css";
import woman from "./woman.jpg";
import colleagues from "./colleagues.jpg";

const Blog = () => {
  return (
    <div className="container-fluid bodyBlog">
      <div className="glass">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 top1">
              <h1>
                <span>-</span> BLOG
              </h1>
              <p>
                Etiam ut elit dictum, gravida ligula non, mollis tortor. Aliquam
                non felis in sapien molestie interdum. Ut bibendum, sem
                velegestas faucibus,
              </p>
            </div>
            <div className="col-xxl-8 row top1">
              <article className="col-xxl-6 post">
                <img className="img-blog" src={woman} alt="" />
                <h3>
                  BRANDING <i className="bi bi-search"></i>
                </h3>
              </article>
              <article className="col-xxl-6 post">
                <img className="img-blog" src={colleagues} alt="" />
                <h3>
                  BRANDING <i className="bi bi-search"></i>
                </h3>
              </article>
              <article className="col-xxl-6 post">
                <img className="img-blog" src={colleagues} alt="" />
                <h3>
                  BRANDING <i className="bi bi-search"></i>
                </h3>
              </article>
              <article className="col-xxl-6 post">
                <img className="img-blog" src={woman} alt="" />
                <h3>
                  BRANDING <i className="bi bi-search"></i>
                </h3>
              </article>
            </div>
          </div>
        </div>
        <div className="row top2">
          <p className="col-md-6">
            <span>03</span> / 07
          </p>
          <p className="col-md-6 languaje">
            <span>ES</span> / ENG
          </p>
        </div>
      </div>
    </div>
  );
};
export default Blog;
