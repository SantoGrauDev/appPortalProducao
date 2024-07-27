import React from "react";
import { useState, useEffect } from "react";
import "./Card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Sidebar from "../pages/Sidebar";
import BotaoVoltar from "../BotaoVoltar";

function CardAcessorios() {
  const urlPath = () => {
    return "/image/";
  };

  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch(
      "http://192.168.30.252:9091/app_portal_server/backend/cardacessorios.php"
    )
      .then((response) => response.json())
      .then(
        (responseJson) =>
          //console.log(responseJson),
          setData(responseJson.records)
        //console.log(responseJson.records)
      );
  };

  useEffect(() => {
    getProdutos();
  }, []);

  const [busca, setBusca] = useState("");

  return (
    <Sidebar>
      <BotaoVoltar />
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
              } else if (val.NOME.toUpperCase().includes(busca.toUpperCase())) {
                return val;
              }
              return false;
            })
            .map((val, key) => {
              return (
                <Card key={key} sx={{ maxWidth: 210, height: 250 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={urlPath() + val.IMAGEM}
                    alt="produto"
                  />
                  <CardContent sx={{ height: 290 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      <h4>{val.NOME}</h4>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span>Codigo: {val.MATFANTASIA}</span> <br />
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

export default CardAcessorios;
