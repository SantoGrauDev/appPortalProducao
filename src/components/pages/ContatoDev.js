import React from "react";
import { Card, Image } from "semantic-ui-react";
import BarraLateral from "./Sidebar";

function ContatoDev() {
  return (
    <BarraLateral>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="ContainerCard">
          <Card>
            <Image
              className="img"
              src="https://camo.githubusercontent.com/9277e5a61dffecd8c127c25dbc11ba8d911282008973b51477c0b93ffe2a42f3/68747470733a2f2f692e7069636173696f6e2e636f6d2f70696339312f37663565643630333337626264626666396663366331386363396531346339662e676966"
              wrapped
              ui={false}
            />

            <Card.Content>
              <Card.Description className="ContainerDesc">
                OLÁ! Muito prazer! Para quem não me conhece, sou o Kevin, fico
                la na sala do marketing. Sou o desenvolvedor responsável por
                este projeto, caso encontrem algum bug ou queiram que adiocionem
                algo, fiquem a vontade para me avisar, meu email é{" "}
                <strong>kevin@oticasantograu.com.br</strong> e whatsapp{" "}
                <strong>9.8540-5800</strong>
                <br />
                VALEU!
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>
    </BarraLateral>
  );
}

export default ContatoDev;
