import React, { useState } from "react";
import {
  Container,
  ConteudoForm,
  ButtonPost,
  AlertDanger,
  Form,
  Label,
  Input,
  ButtonSuccess,
  Textarea,
} from "./CriarPromoProdStyle";
import "../components/ModalCriarPromo.css";
import { AiOutlineClose } from "react-icons/ai";
import { Navigate } from "react-router-dom";

export const CriaPromoAcoes = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [produto, setProduto] = useState({
    NOME_CAMPANHA: "",
    TIPO_CAMPANHA: "",
    REGRAS_CAMPANHA: "",
    DATA_INICIO: "",
    DATA_TERMINO: "",
    MIDIA: "",
    LINK_MIDIA: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valorInput = (e) =>
    setProduto({ ...produto, [e.target.name]: e.target.value });

  const cadProduto = async (e) => {
    //e.preventDefault();
    //console.log(produto.titulo);

    await fetch(
      "http://localhost:9091/app_portal_server/backend/cadastrarPromoAcoes.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ produto }),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
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
        }
      })
      .catch(() => {
        setStatus({
          type: "erro",
          mensagem: "Ops, alguma coisa deu errado!",
        });
      });
  };

  return (
    <>
      <ButtonPost onClick={toggleModal} className="btn-modal">
        Adicionar promo
      </ButtonPost>

      {modal && (
        <Container>
          <div
            style={{ zIndex: "1" }}
            onClick={toggleModal}
            className="overlayAcoes"
          ></div>
          <div style={{ zIndex: "2" }} className="modal-contentAcoes">
            <ConteudoForm>
              {status.type === "erro" ? (
                <AlertDanger>{status.mensagem}</AlertDanger>
              ) : (
                ""
              )}
              {status.type === "success" ? <Navigate to="/promocoes" /> : ""}

              <Form onSubmit={cadProduto}>
                <Label>Nome da campanha: </Label>
                <Input
                  required
                  type="text"
                  name="NOME_CAMPANHA"
                  placeholder="Ex: Campanha de frete grátis"
                  onChange={valorInput}
                />

                <Label class>Tipo da campanha: </Label>
                <Input
                  required
                  type="text"
                  name="TIPO_CAMPANHA"
                  placeholder="Ex: Frete/desconto"
                  onChange={valorInput}
                />

                <Label class>Midia: </Label>
                <Input
                  required
                  type="text"
                  name="MIDIA"
                  placeholder="Onde está está promo? Instagram/Facebook/E-com?"
                  onChange={valorInput}
                />

                <Label class>Link da promo: </Label>
                <Input
                  required
                  type="text"
                  name="LINK_MIDIA"
                  placeholder="ex: https://www.instagram.com/p/ClhNhaxrzk0/"
                  onChange={valorInput}
                />

                <Label>Regras da campanha: </Label>
                <Textarea
                  required
                  type="text"
                  name="REGRAS_CAMPANHA"
                  placeholder="Ex: O frete grátis estará vendo apenas para compras no valor acima de 200,00 reais"
                  onChange={valorInput}
                />

                <Label class>Data do término: </Label>
                <Input
                  required
                  type="text"
                  name="DATA_TERMINO"
                  placeholder="Ex: dia/mês/ano"
                  onChange={valorInput}
                />

                <ButtonSuccess type="submit">Enviar post</ButtonSuccess>
              </Form>
              <span className="close-modal" onClick={toggleModal}>
                <AiOutlineClose />
              </span>
            </ConteudoForm>
          </div>
        </Container>
      )}
    </>
  );
};

export default CriaPromoAcoes;
