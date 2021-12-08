import React from "react";
import "./Nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.png";
import Home from "../home/Home";
import Services from "../services/Services";
import Creative from "../creative/Creative";
import Contact from "../contact/Contact";
import Portfolio from "../portfolio/Portfolio";

const Nav = () => {
  return (
    <Router>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo Ubiset" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
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
                  <Link className="nav-link" to="/contact">
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
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/proyects">
          <Portfolio />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
