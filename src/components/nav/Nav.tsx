import React from "react";
import "./Nav.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} 

from "react-router-dom";
import logo from "./logo.png";
import desing from "./Imagen.svg"
import Home from "../home/Home";
import Services from "../services/Services";
import Creative from "../creative/Creative";
import Ourteam from "../ourteam/Ourteam";
import Blog from "../blog/Blog";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";

const Nav = () => {
  const out = () => {
    console.log("LogOut");
  };
  return (
    <Router>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Logo Ubiset" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/creative">
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/proyects">
                    Portafolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/team">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>    
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/creative">
          <Creative />
        </Route>
        <Route path="/Services">
          <Services />
        </Route>
        <Route path="/team">
          <Ourteam />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/proyects">
          <Portfolio />
        </Route>
        <Route path="/touch">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
