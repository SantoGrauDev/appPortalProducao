import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useAuth } from "../../contexts/AuthContext";
import {
  FaHome,
  FaEye,
  FaGlasses,
  FaBars,
  FaBug,
  FaPeopleArrows,
  FaUniversity,
  FaSignOutAlt,
} from "react-icons/fa";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsEmojiSunglasses, BsBrush, BsGraphUp } from "react-icons/bs";
import { MdCorporateFare } from "react-icons/md";
import { TbDiscount } from "react-icons/tb";
import { GrDocumentText } from "react-icons/gr";

const Sidebar = ({ children }) => {
  const { currentUser } = useAuth();
  const LoginADM = "kvoltareli@gmail.com";
  const LoginADM1 = "paula.aggio@oticasantograu.com.br";
  const loginSup = "naiarasantograu@gmail.com";
  const loginSup1 = "pampanzinha.sib@gmail.com";
  const loginSup2 = "danideoliveir32@gmail.com";
  const loginSup3 = "patiejoao1@hotmail.com";
  const loginSup4 = "jullie.avelaneda@gmail.com";

  const VerificaADM = currentUser.email;

  const uid = `'${currentUser.uid}'`;

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  var supAdm = false;
  var supAuth = false;
  var userAuth = false;

  if (VerificaADM === LoginADM || VerificaADM === LoginADM1) {
    supAdm = true;
  }

  if (
    VerificaADM === loginSup ||
    VerificaADM === loginSup1 ||
    VerificaADM === loginSup2 ||
    VerificaADM === loginSup3 ||
    VerificaADM === loginSup4
  ) {
    supAuth = true;
  }

  if (supAuth === false && supAdm === false) {
    userAuth = true;
  }

  if (
    VerificaADM === LoginADM ||
    VerificaADM === LoginADM1 ||
    VerificaADM === loginSup ||
    VerificaADM === loginSup1 ||
    VerificaADM === loginSup2 ||
    VerificaADM === loginSup3 ||
    VerificaADM === loginSup4
  ) {
    var menuItem = [
      {
        path: "/home",
        name: "Home",
        icon: <FaHome />,
      },
      {
        path: "/promocoes",
        name: "Promoções",
        icon: <TbDiscount />,
      },
      {
        path: "/menucatalogo",
        name: "Catalogo",
        icon: <FaGlasses />,
      },
      {
        path: "/Outlet",
        name: "Outlet",
        icon: <BsEmojiSunglasses />,
      },
      {
        path: "/CatalogoLenteOculos",
        name: "Catalogo Lentes",
        icon: <FaEye />,
      },
      {
        path: "/avisos",
        name: "Avisos",
        icon: <BiMessageAltDetail />,
      },
      {
        path: "/treinamentos",
        name: "Treinamento",
        icon: <FaUniversity />,
      },
      {
        path: "/Valores",
        name: "Código de conduta",
        icon: <MdCorporateFare />,
      },
      {
        path: "/7d2abf2d0fa7c3a0c13236910f30bc43",
        name: "Cadastrar funcionário",
        icon: <FaPeopleArrows />,
      },
      {
        path: "/contatodev",
        name: "Reportar bug",
        icon: <FaBug />,
      },
    ];
  } else {
    menuItem = [
      {
        path: "/home",
        name: "Home",
        icon: <FaHome />,
      },
      {
        path: "/promocoes",
        name: "Promoções",
        icon: <TbDiscount />,
      },
      {
        path: "/menucatalogo",
        name: "Catalogo",
        icon: <FaGlasses />,
      },
      {
        path: "/Outlet",
        name: "Outlet",
        icon: <BsEmojiSunglasses />,
      },
      {
        path: "/CatalogoLenteOculos",
        name: "Catalogo Lentes",
        icon: <FaEye />,
      },
      {
        path: "/avisos",
        name: "Avisos",
        icon: <BiMessageAltDetail />,
      },
      {
        path: "/treinamentos",
        name: "Treinamento",
        icon: <FaUniversity />,
      },
      {
        path: "/Valores",
        name: "Código de conduta",
        icon: <MdCorporateFare />,
      },
      {
        path: "/contatodev",
        name: "Reportar bug",
        icon: <FaBug />,
      },
    ];
  }

  return (
    <div className="barratoggle">
      <div style={{ minWidth: isOpen ? "205px" : "50px" }} className="sidebar">
        <div title="Sair" className="BtnSair">
          <a href="http://192.168.30.252:3000/">
            <FaSignOutAlt />
          </a>
        </div>
        <div className="top_selection">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Menu
          </h1>

          <div style={{ marginLeft: isOpen ? "auto" : "0" }} className="bars">
            <FaBars className="fabars" onClick={toggle} />
          </div>
        </div>

        {supAuth ? (
          <div className="EditorHover">
            <Link to={"/dashboardSupervisor/" + uid}>
              <div className="linkEditor">
                <BsGraphUp />

                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className=""
                >
                  Dashboard
                </div>
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}

        {supAdm ? (
          <div className="EditorHover">
            <Link to={"/dashboardAdm/"}>
              <div className="linkEditor">
                <BsGraphUp />

                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className=""
                >
                  Dashboard
                </div>
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}

        {userAuth ? (
          <div className="EditorHover">
            <Link to={"/dashboard/" + uid}>
              <div className="linkEditor">
                <BsGraphUp />

                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className=""
                >
                  Dashboard
                </div>
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}

        <div className="EditorHover">
          <a
            className="linkEditorLink"
            href="http://192.168.30.252:9091/Editor/index.html"
          >
            <div className="linkEditor">
              <BsBrush />

              <div style={{ display: isOpen ? "block" : "none" }} className="">
                Editor
              </div>
            </div>
          </a>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
