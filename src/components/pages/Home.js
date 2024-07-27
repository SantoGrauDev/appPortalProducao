import React from "react";
import BarraLateral from "./Sidebar";
import SlideshowHome from "./SliderHome";
import "semantic-ui-css/semantic.min.css";
import { Button, Icon } from "semantic-ui-react";

import styles from "./Home.module.scss";

function Home() {
  return (
    <BarraLateral>
      <div className={styles.Gridheader}>
        <div className={styles.conteudoEsquerdo}>
          <img
            className={styles.GridLogo}
            src="Image/assets/logo.png"
            alt="imgLogo"
          />

          <div className={styles.Gridh1}>Bem vindos!</div>

          <div className={styles.GridP}>
            Agora ficou fácil consultar todos nossos produtos, com um clique
            <br /> todas informações em apenas um lugar!
            <div className={styles.GridButtons}>
              <a href="https://www.facebook.com/oticasantograu">
                <Button color="facebook">
                  <Icon name="facebook" /> Facebook
                </Button>
              </a>
              <a href="https://www.instagram.com/oticasantograuoficial/">
                <Button color="instagram">
                  <Icon name="instagram" /> Instagram
                </Button>
              </a>
              <a href="https://www.youtube.com/@oticasantograu557">
                <Button style={{ background: "#FF0000", color: "#fff" }}>
                  <Icon name="youtube" /> YouTube
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.ContainerImg}>
          <img
            className={styles.ImagemLogo}
            src="Image/assets/bannersite3.png"
            alt="imgbanner"
          />
        </div>
      </div>
    </BarraLateral>
  );
}

export default Home;
