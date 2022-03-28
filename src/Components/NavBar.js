import React from "react";
import { NavLink } from "react-router-dom";
import LogoMarvel from "../assets/img/logo-marvel3.png";
import "../index.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mb-0 bg-dark d-flex flex-row align-items-center justify-content-between">
        <div className="m-2">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active navbar-brand nav-botton"
                : "navbar-brand nav-botton"
            }
            to="/"
          >
            PRINCIPAL
          </NavLink>
          <NavLink className="navbar-brand nav-botton" to="/personajes">
            PERSONAJES
          </NavLink>
        </div>
        <div className="logo">
          <img src={LogoMarvel} className="logo-marvel" alt=""></img>
        </div>
        <div className="m-2">
          <NavLink className="navbar-brand nav-botton" to="/salir">
            SALIR
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
