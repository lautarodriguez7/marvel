import React from "react";
import LogoMarvel from "../assets/img/logo-marvel3.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mb-0 bg-dark d-flex flex-row align-items-center justify-content-between m-3">
        <div className="m-2">
          <a className="navbar-brand nav-botton" href="/">
            PRINCIPAL
          </a>
          <a className="navbar-brand nav-botton" href="/personajes">
            PERSONAJES
          </a>
        </div>
        <div className="logo">
          <img src={LogoMarvel} className="logo-marvel" alt=""></img>
        </div>
        <div className="m-2">
          <a className="navbar-brand nav-botton" href="#">
            SALIR
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
