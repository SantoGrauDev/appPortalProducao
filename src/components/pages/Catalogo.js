import React from "react";
import CardFunc from "./Card";
import Sidebar from "./Sidebar";
import BotaoVoltar from "../BotaoVoltar";

function Catalogo() {
  return (
    <Sidebar>
      <BotaoVoltar />
      <CardFunc />
    </Sidebar>
  );
}

export default Catalogo;
