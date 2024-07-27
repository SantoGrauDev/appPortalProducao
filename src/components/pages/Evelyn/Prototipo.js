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
  ContainerInfo,
  AlertSuccess,
} from "./styles";
import { Navigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

import LancaOs from "./LancaOs";

import "react-toastify/dist/ReactToastify.css";

export const Prototipo = () => {
  const [produto, setProduto] = useState([
    {
      VENDEDOR: "",
      OS: "",
      LENTE: [""],
      TIPO_LENTE: [""],
      INDICE: "",
      VALOR: "",
      GRADE: "",
      COMENTARIO: "",
      DNPOE: "",
      DNPOD: "",
      DP: "",
      TIPOLENTE: "",
      file: null,
    },
  ]);

  if (produto.TIPO_LENTE === "ECO SOFT AR NORMAL") {
    setProduto({
      OS: produto.OS,
      VENDEDOR: produto.VENDEDOR,
      LENTE: produto.LENTE,
      TIPOLENTE: produto.TIPO_LENTE,
      INDICE: "1.56",
      VALOR: "110,00",
      GRADE: "+3.00 a -4.00 Cil. -2.00",
    });
  }

  if (produto.TIPO_LENTE === "ECO SOFT AR FINA") {
    setProduto({
      OS: produto.OS,
      VENDEDOR: produto.VENDEDOR,
      LENTE: produto.LENTE,
      TIPOLENTE: produto.TIPO_LENTE,
      INDICE: "1.56",
      VALOR: "149,00",
      GRADE: "+6.00 a -6.00 Cil. -2.00",
    });
  }
  if (produto.TIPO_LENTE === "ECO SOFT AR MAIS FINA") {
    setProduto({
      OS: produto.OS,
      VENDEDOR: produto.VENDEDOR,
      LENTE: produto.LENTE,
      TIPOLENTE: produto.TIPO_LENTE,
      INDICE: "1.59",
      VALOR: "199,00",
      GRADE: "+6.00 a -6.00 Cil. -2.00",
    });
  }
  const UPLOAD_ENDPOINT =
    "http://192.168.30.252:9091/app_portal_server/backend/evelyn/lancaos.php";

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valorInput = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };
  const cadProduto = async (e) => {
    e.preventDefault();
    // console.log(produto);

    let res = await uploadFile(produto);
    console.log(res.data);

    await fetch(
      "http://192.168.30.252:9091/app_portal_server/Backend/evelyn/lancaOs.php",
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
        //console.log(responseJson);
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

  const uploadFile = async (produto) => {
    const formData = new FormData();
    formData.append("avatar", produto);

    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };

  toast.success("OS enviada com sucesso!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  return (
    <>
      <Form onSubmit={cadProduto}>
        <div style={{ display: "flex" }}>
          <Container>
            <div className="">
              <ConteudoForm>
                <ConteudoTitulo>
                  <Titulo>Criar OS</Titulo>
                </ConteudoTitulo>

                <Label>Nome vendedor: </Label>
                <Input
                  type="text"
                  name="VENDEDOR"
                  placeholder="Digite seu nome"
                  onChange={valorInput}
                />

                <Label>Digite número da OS: </Label>
                <Input
                  type="text"
                  name="OS"
                  placeholder="nº OS"
                  onChange={valorInput}
                />

                <Label>Selecione a lente: </Label>
                <select
                  className={styles.select}
                  name="LENTE"
                  onChange={valorInput}
                  value={produto.LENTE}
                  defaultValue={produto.LENTE}
                >
                  <option value="">-- Selecione --</option>
                  <option value="SOFT AR">Soft Ar</option>
                  <option value="valor2">Valor 2</option>
                  <option value="valor3">Valor 3</option>
                </select>
                <br />
                <Label>Selecione o tipo de lente: </Label>
                {produto.LENTE === "SOFT AR" && (
                  <select
                    className={styles.select}
                    name="TIPO_LENTE"
                    onChange={valorInput}
                    value={produto.TIPO_LENTE}
                  >
                    <option value="">-- Selecione --</option>
                    <option value="ECO SOFT AR NORMAL">
                      ECO SOFT AR NORMAL
                    </option>
                    <option value="ECO SOFT AR FINA">ECO SOFT AR FINA</option>
                    <option value="ECO SOFT AR MAIS FINA">
                      ECO SOFT AR MAIS FINA
                    </option>
                  </select>
                )}

                <Label>Dnp olho esquerdo: </Label>
                <Input type="text" name="DNPOE" onChange={valorInput} />

                <Label>Dnp olho direito: </Label>
                <Input type="text" name="DNPOD" onChange={valorInput} />

                <Label>DP:</Label>
                <Input type="text" name="DP" onChange={valorInput} />

                <Label>Comentário: </Label>
                <Textarea
                  type="text"
                  name="COMENTARIO"
                  placeholder="Opcional"
                  onChange={valorInput}
                />

                <input type="file" onChange={valorInput} />

                {status.type === "success" ? (
                  <AlertSuccess>{status.mensagem}</AlertSuccess>
                ) : (
                  ""
                )}

                {status.type === "erro" ? (
                  <AlertDanger>{status.mensagem}</AlertDanger>
                ) : (
                  ""
                )}

                <ButtonSuccess type="submit">Enviar OS</ButtonSuccess>
              </ConteudoForm>
            </div>
          </Container>

          <div style={{ flexDirection: "row" }}>
            <ContainerInfo>
              <div className={styles.atrLentes}>
                <span>
                  Indice: <strong>{produto.INDICE}</strong>
                </span>{" "}
                <br />
                <span>
                  Valor: <strong>{produto.VALOR}</strong>
                </span>{" "}
                <br />
                <span>
                  Grade: <strong>{produto.GRADE}</strong>
                </span>{" "}
                <br />
              </div>
            </ContainerInfo>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Prototipo;
