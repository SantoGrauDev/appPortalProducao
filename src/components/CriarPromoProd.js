import React, { useState } from "react";
import {
  Container,
  ConteudoForm,
  ConteudoTitulo,
  Titulo,
  ButtonPost,
  AlertDanger,
  Form,
  Label,
  Input,
  ButtonSuccess,
  Textarea,
} from "../components/CriarPromoProdStyle";
import { AiOutlineClose } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import "./ModalCriarPromo.css";

export const CriarPromoProd = () => {
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
    MATFANTASIA: "",
    DATA_TERMINO: "",
    VALOR_PROMO: "",
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
      "http://localhost:9091/app_portal_server/backend/cadastrarPromoProd.php",
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
            className="overlay"
          ></div>
          <div style={{ zIndex: "2" }} className="modal-content">
            <ConteudoForm>
              <ConteudoTitulo>
                <Titulo>Criar promo</Titulo>
              </ConteudoTitulo>

              {status.type === "erro" ? (
                <AlertDanger>{status.mensagem}</AlertDanger>
              ) : (
                ""
              )}
              {status.type === "success" ? <Navigate to="/promocoes" /> : ""}

              <Form onSubmit={cadProduto}>
                <Label>Matfantasia: </Label>
                <Input
                  required
                  type="text"
                  name="MATFANTASIA"
                  placeholder="INSERIR MATFANTASIA EX: CLIPON7715A0154"
                  onChange={valorInput}
                />

                <Label class>Data término: </Label>
                <Input
                  required
                  type="text"
                  name="DATA_TERMINO"
                  placeholder="dd/mm/aaaa"
                  onChange={valorInput}
                />

                <Label class>Valor da promo: </Label>
                <Input
                  required
                  type="text"
                  name="VALOR_PROMO"
                  placeholder="R$ xxx,yy"
                  onChange={valorInput}
                />

                <ButtonSuccess type="submit">Enviar promo</ButtonSuccess>
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

export default CriarPromoProd;
