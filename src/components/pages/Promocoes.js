import React from "react";
import { useEffect, useState } from "react";
import { Tab, Card, Image, Divider, Grid, Segment } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import CriarPromoProd from "../CriarPromoProd";
import CriaPromoAcoes from "../CriaPromoAcoes";
import { FaTrashAlt } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import "./Promocoes.css";

export default function Promocoes() {
  //localizando imagem
  const urlPathAcoes = () => {
    return "/Image/promoAcoes/";
  };
  //Fim localizando imagem

  //logica auth
  const { currentUser } = useAuth();
  const LoginADM = "kvoltareli@gmail.com";
  const LoginADM1 = "paula.aggio@oticasantograu.com.br";
  const VerificaADM = currentUser.email;

  var ADMlogado = false;

  if (LoginADM === VerificaADM || VerificaADM === LoginADM1) {
    ADMlogado = true;
  }
  //fim logic auth

  //state para excluir
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  //conexão com api GET -> Promo produto
  const [data, setData] = useState([]);
  const getProdutos = async () => {
    fetch(
      "http://192.168.30.252:9091/app_portal_server/backend/visualiza_promoprod.php"
    )
      .then((response) => response.json())
      .then((responseJson) =>
        //console.log(responseJson),
        setData(responseJson.records)
      );
  };

  //conexão com api GET -> Promo ações
  const [dataAcoes, setDataAcoes] = useState([]);
  const getProdutosAcoes = async () => {
    fetch(
      "http://192.168.30.252:9091/app_portal_server/backend/visualiza_promoacoes.php"
    )
      .then((response) => response.json())
      .then((responseJson) =>
        //console.log(responseJson),
        setDataAcoes(responseJson.records)
      );
  };

  //Logica de apagar promo produtos BD
  const apagarProduto = async (idProduto) => {
    //console.log(idProduto);
    await fetch(
      "http://192.168.30.252:9091/app_portal_server/backend/ApagarPromoProd.php?id=" +
        idProduto
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.erro) {
          setStatus({
            type: "erro",
            mensagem: responseJson.mensagem,
          });
        } else {
          setStatus({
            type: "success",
            mensagem: responseJson.mensagem,
          });
          getProdutos();
        }
      })
      .catch(() => {
        setStatus({
          type: "erro",
          mensagem: "Oops, alguma coisa deu errado ): ",
        });
      });
  };

  //Logica de apagar ações de promo BD
  const apagarProdutoAcoes = async (idProdutoAcoes) => {
    console.log(idProdutoAcoes);
    await fetch(
      "http://192.168.30.252:9091/app_portal_server/backend/apagarPromoAcoes.php?id=" +
        idProdutoAcoes
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.erro) {
          setStatus({
            type: "erro",
            mensagem: responseJson.mensagem,
          });
        } else {
          setStatus({
            type: "success",
            mensagem: responseJson.mensagem,
          });
          getProdutosAcoes();
        }
      })
      .catch(() => {
        setStatus({
          type: "erro",
          mensagem: "Oops, alguma coisa deu errado ): ",
        });
      });
  };

  useEffect(() => {
    getProdutos();
  }, []);

  useEffect(() => {
    getProdutosAcoes();
  }, []);

  const urlPath = () => {
    return "/Image/";
  };

  const panes = [
    {
      menuItem: "Produtos promocionados",
      render: () => (
        <Tab.Pane style={{ width: "80vw" }} attached={false}>
          {ADMlogado ? <CriarPromoProd /> : ""}

          {Object.values(data).map((val, key) => {
            return (
              <Card
                key={key}
                style={{
                  width: "220px ",
                  position: "relative",
                  display: "inline-block",
                  margin: "20px 0 0 20px",
                  zIndex: "0",
                  fontSize: "13px",
                }}
              >
                <Image
                  style={{ width: "220px", height: "185px" }}
                  src={urlPath() + val.IMAGEM}
                  ui={false}
                />

                <Card.Content style={{ height: "120px" }}>
                  {ADMlogado ? (
                    <FaTrashAlt
                      style={{ cursor: "pointer", float: "right" }}
                      className="deletePost"
                      onClick={() => apagarProduto(val.IDPROMOPROD)}
                    />
                  ) : (
                    ""
                  )}
                  <Card.Header>Produto: {val.NOME}</Card.Header>
                  <Card.Meta>
                    <span className="date">
                      Promo inicio: {val.DATA_INICIO}
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    Estoque: {val.QTD} <br />
                    Cor:{val.COR} <br />
                    Valor promo: {val.valor_promo}
                  </Card.Description>
                </Card.Content>
                <Card.Content style={{ color: "red" }} extra>
                  Valido até: {val.data_termino}
                </Card.Content>
              </Card>
            );
          })}
          {status.type === "erro" ? (
            <p style={{ color: "red" }}>{status.mensagem}</p>
          ) : (
            ""
          )}
          {status.type === "success" ? (
            <p style={{ color: "green" }}>{status.mensagem}</p>
          ) : (
            ""
          )}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Ações de promoções",
      render: () => (
        <Tab.Pane style={{ width: "87vw" }} attached={false}>
          {ADMlogado ? <CriaPromoAcoes /> : ""}
          {status.type === "erro" ? (
            <p style={{ color: "red" }}>{status.mensagem}</p>
          ) : (
            ""
          )}
          {status.type === "success" ? (
            <p style={{ color: "green" }}>{status.mensagem}</p>
          ) : (
            ""
          )}
          {Object.values(dataAcoes).map((val, key) => {
            return (
              <Segment>
                <Grid columns={2} relaxed="very">
                  <Grid.Column>
                    {ADMlogado ? (
                      <FaTrashAlt
                        style={{ cursor: "pointer", float: "right" }}
                        className="deletePost"
                        onClick={() => apagarProdutoAcoes(val.IDPROMOACOES)}
                      />
                    ) : (
                      ""
                    )}
                    <div className="">
                      <div key={key} className="ContainerImg">
                        <img
                          alt={val.NOME_CAMPANHA}
                          src={urlPathAcoes() + val.IDPROMOACOESIMG}
                          wrapped
                          ui={false}
                        />
                      </div>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <h1> Campanha: {val.NOME_CAMPANHA}</h1>
                    <div className="titleInicio">
                      <h6>
                        <strong>Data de inicio:</strong> {val.DATA_INICIO}
                      </h6>
                    </div>
                    <div className="regras">
                      <h6>
                        <strong>Regras:</strong> {val.REGRAS_CAMPANHA}
                      </h6>
                    </div>
                    <div className="titleValidade">
                      <strong>Valido até: {val.DATA_TERMINO}</strong>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                      }}
                      className="titleLink"
                    >
                      <a href={val.LINKMIDIA}>Clique para ver a promo</a>
                    </div>
                  </Grid.Column>
                </Grid>

                <Divider vertical style={{ color: "purple" }}>
                  SG
                </Divider>
              </Segment>
            );
          })}
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Sidebar>
      <Tab
        style={{ margin: "30px 0 0 10px", background: "#fff" }}
        menu={{ secondary: true }}
        panes={panes}
      />
    </Sidebar>
  );
}
