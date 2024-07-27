import React from "react";
import { useEffect, useState } from "react";
import "./Avisos.css";
import Sidebar from "./Sidebar";
import CriarPost from "./CriarPosts";
import { FaTrashAlt } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";

export default function Avisos() {
  //state para excluir post
  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  //logica para liberar botão
  const { currentUser } = useAuth();
  const LoginADM = "kvoltareli@gmail.com";
  const LoginADM1 = "paula.aggio@oticasantograu.com.br";
  const VerificaADM = currentUser.email;

  var ADMlogado = false;

  if (LoginADM === VerificaADM || VerificaADM === LoginADM1) {
    ADMlogado = true;
  }

  //conexão com api GET -> Post page
  const [data, setData] = useState([]);
  const getProdutos = async () => {
    fetch(
      "http://192.168.30.252:9091/app_portal_server/backend/visualiza_post.php"
    )
      .then((response) => response.json())
      .then((responseJson) =>
        //console.log(responseJson),
        setData(responseJson.records)
      );
  };

  const apagarProduto = async (idProduto) => {
    //console.log(idProduto);
    await fetch(
      "http://192.168.30.252:9091/app_portal_server/backend/apagarPost.php?id=" +
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

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <Sidebar>
      {ADMlogado ? <CriarPost /> : ""}

      <div className="avisos">
        {Object.values(data).map((val, key) => {
          return (
            <div key={key} className="post">
              <div className="postHeader">
                {ADMlogado ? (
                  <div
                    className="deletePost"
                    onClick={() => apagarProduto(val.ID_POST)}
                  >
                    <FaTrashAlt />
                  </div>
                ) : (
                  ""
                )}

                <div key={val.ID_POST} className="title">
                  <h1>{val.TITULO_POST}</h1>
                </div>
              </div>

              <div className="postTextContainer">{val.POST}</div>
              <div className="postHeader">
                <div className="tituloAutor">
                  <h6>@{val.AUTOR_POST}</h6>
                </div>
                <div className="dataContainer">
                  <div className="postHeader">
                    <div className="title">
                      <h6>
                        {val.DATA_POST} 
                      </h6>
                    </div>
                  </div>
                  {status.type === "erro" ? <p>{status.mensagem}</p> : ""}
                  {status.type === "success" ? <p>{status.mensagem}</p> : ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Sidebar>
  );
}
