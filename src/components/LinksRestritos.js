import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

function LinksRestritos(props) {
  return {
    path: "/signup",
    name: "Cadastrar",
    icon: <FaSignOutAlt />,
  };
}

export default LinksRestritos;
