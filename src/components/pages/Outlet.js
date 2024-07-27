import React from "react";
import { useState, useEffect } from "react";
import "./Card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";

function CardFunc() {
  const urlPath = () => {
    return "/image/outlet/";
  };

  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("http://192.168.30.252:9091/app_portal_server/backend/outlet_api.php")
      .then((response) => response.json())
      .then(
        (responseJson) =>
          //console.log(responseJson),
          setData(responseJson.records)
        //console.l og(responseJson.records)
      );
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const [busca, setBusca] = useState("");

  return (
    <Sidebar>
      <div
        style={{
          background: "#FFF",
          marginLeft: "10px",
          marginTop: "10px",
          borderRadius: "5px",
          width: "90vw",
        }}
      >
        <h3>
          IMPORTANTE: Consultar óculos direto nas pastas para mostrar melhor ao
          cliente o que está avariado
        </h3>
      </div>
      <div className="ContainerGeralCat">
        <div className="containerInputBusca">
          <input
            className="inputBusca"
            placeholder="Nome produto..."
            type="text"
            onChange={(event) => {
              setBusca(event.target.value);
            }}
          />
        </div>

        <div className="cardBusca">
          {Object.values(data)
            .filter((val) => {
              if (busca === "") {
                return val;
              } else if (
                val.APELIDO.toUpperCase().includes(busca.toUpperCase()) ||
                val.COR.toUpperCase().includes(busca.toUpperCase()) ||
                val.SUBLINHA1.toUpperCase().includes(busca.toUpperCase()) ||
                val.PRECO.toUpperCase().includes(busca.toUpperCase()) ||
                val.GENERO.toUpperCase().includes(busca.toUpperCase())
              ) {
                return val;
              }
              return false;
            })
            .map((val, key) => {
              return (
                <Card key={key} sx={{ maxWidth: 210, maxHeight: 330 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={urlPath() + val.IMAGEM}
                    alt="produto"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <h4>{val.APELIDO}</h4>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span>Cor: {val.COR}</span> <br />
                      <span>Codigo: {val.MATFANTASIA}</span> <br />
                      <span>Sub linha: {val.SUBLINHA1}</span> <br />
                      <span>Estoque: {val.QTD}</span> <br />
                      <span>Preço: {val.PRECO}</span> <br />
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </Sidebar>
  );
}

export default CardFunc;
