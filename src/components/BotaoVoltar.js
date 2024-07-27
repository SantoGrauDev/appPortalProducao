import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import styles from "./BotaoVoltar.module.css";

const BotaoVoltar = () => (
  <Link to="/menucatalogo">
    <div className={styles.BotaoVoltar}>
      <Button color="orange">Menu catálogo</Button>
    </div>
  </Link>
);

export default BotaoVoltar;
