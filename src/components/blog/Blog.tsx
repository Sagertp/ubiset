import React from "react";
import "./Blog.css";
import img2 from "./pretty.png"

const Blog = () => {
  return (
    <div className="container-fluid bodyBlog">
      <div className="row fondo">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <div className="blog-left">
            <h2>Blog</h2>
            <p>
              Los mejores articulos de información, tendencia, tips de comercio electrónico, plataformas digitales, marketing digital, e-commerce, diseño, fotografía. 
            </p>
            <h3>05<strong>/06</strong></h3>
          </div>  
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 after">
          <div className="blog">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">  
                <img src={img2} alt="" />     
                <h4>EL HOME OFFICE</h4>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">                
                <img src={img2} alt="" />
                <h4>EL HOME OFFICE</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <img src={img2} alt="" /> 
                <h4>EL HOME OFFICE</h4>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <img src={img2} alt="" />
                <h4>EL HOME OFFICE</h4>                  
              </div>
            </div>
          </div>
        </div>
      </div>        
    </div>
  );
};
export default Blog;
