import React from "react";
import Sidebar from "./Sidebar";
import "./Valores.css";
import ModalValores from "../modais/ModalValores";
import ModalPrincipios from "../modais/ModalPrincipios";
import ModalPrincipiosClientes from "../modais/ModalPrincipiosCliente";
import ModalPosturaConcorrencia from "../modais/ModalPosturaConcorrencia";
import ModalDispGeral from "../modais/ModalDispGeral";
import RegulamentoInterno from "../modais/ModalRegulamentoInterno";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Valores() {
  return (
    <Sidebar>
      <div className="ContainerValores">
        <Grid columns={4} divided>
          <Grid.Row>
            <Grid.Column style={{ margin: "10px" }}>
              <ModalValores />
            </Grid.Column>
            <Grid.Column style={{ margin: "10px" }}>
              <ModalPrincipios />
            </Grid.Column>
            <Grid.Column style={{ margin: "10px" }}>
              <ModalPrincipiosClientes />
            </Grid.Column>
            <Grid.Column style={{ margin: "10px" }}>
              <ModalPosturaConcorrencia />
            </Grid.Column>
            <Grid.Column style={{ margin: "10px" }}>
              <ModalDispGeral />
            </Grid.Column>
            <Grid.Column style={{ margin: "10px" }}>
              <RegulamentoInterno />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Sidebar>
  );
}

export default Valores;
