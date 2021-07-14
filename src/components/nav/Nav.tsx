import React from "react";
import "./Nav.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import logo from "./Logo_Blanco.png";
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
      <nav className="navbar justify-content-center ">
        <a className="navbar-brand" href="/">
          <img className="logo-img" src={logo} alt="Logo Ubiset" />
        </a>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/creative">
              Creative
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/proyects">
              Proyects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/team">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/touch">
              Touch
            </Link>
          </li>
          <li className="nav-item hiden">
            <a className="nav-link" href="/" onClick={out}>
              LogOut
            </a>
          </li>
        </ul>
      </nav>
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
