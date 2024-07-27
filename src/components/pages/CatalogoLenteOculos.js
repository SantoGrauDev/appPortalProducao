import OcuLentes from "./ManipulaApiOcuLentes/OcuLentes";
import FetchLentes from "../../fetchLentes/fetch";
import Sidebar from "./Sidebar";
import React from "react";

function CatalogoLenteOculos() {
  return (
    <Sidebar>
      <div style={{ width: "95vw", height: "95vh" }}>
        <FetchLentes />
      </div>
    </Sidebar>
  );
}

export default CatalogoLenteOculos;
