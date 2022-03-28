import React from "react";
import Tom from "../../assets/img/tom.png";
import "../notFound/notFound.css";

const NotFound = () => {
  return (
    <div className="container-nf text-center">
      <img src={Tom} className="tom" alt=""></img>
      <h1 className="title mt-4 text-white">Error 404!</h1>
      <h2 className="title text-white fw-bold">Página no encontrada</h2>
    </div>
  );
};

export default NotFound;
