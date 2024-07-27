import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import styles from "./OcuLentes.module.css";
import fotoLente from "./img/foto_lente.png";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function OcuLentes() {
  const [data, setData] = useState([]);
  const [dataD, setDataD] = useState([]);
  const [busca, setBusca] = useState("");
  const [idMarca, setIdMarca] = useState([]);
  const [marca, setMarca] = useState([]);

  const handleClick = (IdMarcas) => {
    setIdMarca(IdMarcas);
  };

  const handleMarcaClick = (marca) => {
    setIdMarca(marca);
  };

  const getIdMarca = async () => {
    fetch(
      `http://192.168.30.252:9091/app_portal_server/backend/Lentes_Prontas_e_LC.php?id_marca=${idMarca}`
    );
  };

  useEffect(() => {
    getIdMarca();
  }, []);

  const getMarca = async () => {
    fetch(
      `http://192.168.30.252:9091/app_portal_server/backend/Lentes_Prontas_e_LC.php?marca=${marca}`
    );
  };

  useEffect(() => {
    getMarca();
  }, []);

  return (
    <div>
      <p>ID da Marca: {idMarca}</p>
      <button onClick={() => handleMarcaClick()}></button>
      <button onClick={() => handleClick(1)}>1</button>
    </div>
  );
}

export default OcuLentes;
