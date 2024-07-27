import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Sidebar from "../pages/Sidebar";
import styles from "./MenuCatalogo.module.css";

const MenuCatalogo = () => (
  <Sidebar>
    <div className={styles.ContainerMenuCatalogo}>
      <div
        style={{ height: "200px", width: "200px" }}
        className={styles.ContainerCardMenu}
      >
        <Card>
          <Image
            style={{ height: "200px" }}
            src="/IMAGE/circus_SGP.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Santo Grau Prime</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to="/cardSGP">Clique aqui para acessar</Link>
          </Card.Content>
        </Card>
      </div>

      <div
        style={{ height: "200px", width: "200px" }}
        className={styles.ContainerCardMenu}
      >
        <Card>
          <Image
            style={{ height: "200px" }}
            src="/IMAGE/maya_clipon.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Clipon</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to="/cardclipon">Clique aqui para acessar</Link>
          </Card.Content>
        </Card>
      </div>

      <div
        style={{ height: "200px", width: "200px" }}
        className={styles.ContainerCardMenu}
      >
        <Card>
          <Image
            style={{ height: "200px" }}
            src="/IMAGE/dualipa_drip.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Drip</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to="/carddrip">Clique aqui para acessar</Link>
          </Card.Content>
        </Card>
      </div>

      <div
        style={{ height: "200px", width: "200px" }}
        className={styles.ContainerCardMenu}
      >
        <Card>
          <Image
            style={{ height: "200px" }}
            src="/IMAGE/label_sunglass.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Sunglass</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to="/cardsunglass">Clique aqui para acessar</Link>
          </Card.Content>
        </Card>
      </div>

      <div
        style={{ height: "200px", width: "200px" }}
        className={styles.ContainerCardMenu}
      >
        <Card>
          <Image
            style={{ height: "200px" }}
            src="/IMAGE/caixinha.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Todas grifes</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to="/catalogo">Clique aqui para acessar</Link>
          </Card.Content>
        </Card>
      </div>

      <div
        style={{ height: "200px", width: "200px" }}
        className={styles.ContainerCardMenu}
      >
        <Card>
          <Image
            style={{ height: "200px" }}
            src="/IMAGE/SANTO GRAU PRIME_BR4247C6_PRETO_VINHO_RETANGULO_ACETATO_INFANTIL_MASCULINO_RX_49_TAMP_209_SPIDER.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Infantil</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to="/cardinfantil">Clique aqui para acessar</Link>
          </Card.Content>
        </Card>
      </div>

      <div
        style={{ height: "200px", width: "200px" }}
        className={styles.ContainerCardMenu}
      >
        <Card>
          <Image
            style={{ height: "200px" }}
            src="/IMAGE/ACESSÓRIO_CORDAO_MIÇANGA_SORTIDAS_UNICO_25_LISBOA.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Acessorios</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Link to="/cardacessorios">Clique aqui para acessar</Link>
          </Card.Content>
        </Card>
      </div>
    </div>
  </Sidebar>
);

export default MenuCatalogo;
