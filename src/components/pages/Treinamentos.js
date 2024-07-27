import React from "react";
import Sidebar from "./Sidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import "./Treinamentos.css";

function Treinamentos() {
  return (
    <Sidebar>
      {/* CONTAINER DE TREINAMENTO PAULA */}
      <div className="ContainerGeralTreinamento">
        <div className="ContainerConteudo">
          <div className="Conteudo">
            <Card sx={{ maxWidth: 270, minHeight: 350 }}>
              <CardActionArea component={Link} to={"/PaginaTreinamento1"}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/Image/LOGO1.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Treinamento venda certa
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aqui você irá aprender toda rotina e fluxo venda e contato
                    com o cliente.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  <Link to="/PaginaTreinamento1">Ler mais</Link>
                </Button>
              </CardActions>
            </Card>
          </div>

          {/* CONTAINER DE TREINAMENTO 2 LANÇAR OS */}
          <div className="Conteudo">
            <Card sx={{ maxWidth: 270, minHeight: 350 }}>
              <CardActionArea component={Link} to={"/PaginaTreinamento2"}>
                <CardMedia
                  component="img"
                  height="140"
                  image="http://downloads.desempenho.com.br/imagens/produtos/oticas.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Como lançar OS no SAV.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Pessoal, aqui você encontrará print do passo a passo de como
                    é lançado a OS.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary">
                  <Link to="/PaginaTreinamento2">Ler mais</Link>
                </Button>
              </CardActions>
            </Card>
          </div>

          {/* CONTAINER DE TREINAMENTO 3 APP EDITOR */}
          <div className="Conteudo">
            <Card sx={{ maxWidth: 270, minHeight: 350 }}>
              <CardActionArea component={Link} to={"/PaginaTreinamento3"}>
                <CardMedia
                  component="img"
                  height="140"
                  image="Image/assets/appeditor1.jpeg"
                  alt="green iguana"
                />
                <CardContent style={{ maxHeight: "100px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Como utilizar o app editor.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Pessoal, aqui você encontrará print do passo a passo de como
                    utilizar o app editor para mostrar os óculos aos clientes.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  style={{ position: "relative", marginTop: "50px" }}
                  size="medium"
                  color="primary"
                >
                  <Link to="/PaginaTreinamento3">Ler mais</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
          {/* CONTAINER DE TREINAMENTO 4 COMO ACHAR O OCULOS NA PASTA VENDER*/}
          <div className="Conteudo">
            <Card sx={{ maxWidth: 270, minHeight: 350 }}>
              <CardActionArea component={Link} to={"/PaginaTreinamento4"}>
                <CardMedia
                  component="img"
                  height="140"
                  image="Image/assets/pasta.jpg"
                  alt="green iguana"
                />
                <CardContent style={{ maxHeight: "100px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Como achar oculos na pasta vender
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Treinamento de como funciona a dinâmica de uso da pasta
                    vender
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  style={{ position: "relative", marginTop: "50px" }}
                  size="medium"
                  color="primary"
                >
                  <Link to="/PaginaTreinamento4">Ler mais</Link>
                </Button>
              </CardActions>
            </Card>
          </div>

          {/* CONTAINER DE TREINAMENTO 5 DIGISAC*/}
          <div className="Conteudo">
            <Card sx={{ maxWidth: 270, minHeight: 350 }}>
              <CardActionArea component={Link} to={"/PaginaTreinamento5"}>
                <CardMedia
                  component="img"
                  height="140"
                  image="Image/assets/digisac.png"
                  alt="green iguana"
                />
                <CardContent style={{ maxHeight: "100px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Treinamento Digisac
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Treinamento em video criado pela Paula, falando todo passo a
                    passo de como utilizaro app digisac
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  style={{ position: "relative", marginTop: "50px" }}
                  size="medium"
                  color="primary"
                >
                  <Link to="/PaginaTreinamento5">Ler mais</Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Treinamentos;
