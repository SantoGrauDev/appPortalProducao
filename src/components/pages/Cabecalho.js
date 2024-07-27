import React from "react";
import "./Cabecalho.css";

function Cabecalho({ pagina }) {
  return (
    <>
      <div className="cabecalho">
        <h1>{pagina}</h1>
      </div>
    </>
  );
}

export default Cabecalho;
