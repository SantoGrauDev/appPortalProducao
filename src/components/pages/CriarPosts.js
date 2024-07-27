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
} from "./CriarPostsStyle";
import "../Modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { Navigate } from "react-router-dom";

export const CriarPost = () => {
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
    TITULO_POST: "",
    AUTOR_POST: "",
    POST_POST: "",
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
      "http://localhost:9091/app_portal_server/backend/cadastrar.php",
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
      .catch((erro) => {
        setStatus({
          type: "erro",
          mensagem: "Ops, alguma coisa deu errado!",
        });
      });
  };

  return (
    <>
      <ButtonPost onClick={toggleModal} className="btn-modal">
        Adicionar post
      </ButtonPost>

      {modal && (
        <Container>
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <ConteudoForm>
              <ConteudoTitulo>
                <Titulo>Criar post</Titulo>
              </ConteudoTitulo>

              {status.type === "erro" ? (
                <AlertDanger>{status.mensagem}</AlertDanger>
              ) : (
                ""
              )}
              {status.type === "success" ? <Navigate to="/avisos" /> : ""}

              <Form onSubmit={cadProduto}>
                <Label>Título: </Label>
                <Input
                  required
                  type="text"
                  name="TITULO_POST"
                  placeholder="Título do produto"
                  onChange={valorInput}
                />

                <Label class>Autor: </Label>
                <Input
                  required
                  type="text"
                  name="AUTOR_POST"
                  placeholder="Nome de quem está postando"
                  onChange={valorInput}
                />

                <Label>Post: </Label>
                <Textarea
                  required
                  type="text"
                  name="POST_POST"
                  placeholder="Escrava aqui seu aviso"
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

export default CriarPost;
