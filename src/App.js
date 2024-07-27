import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Catalogo from "./components/pages/Catalogo";
import Home from "./components/pages/Home";
import Signup from "./components/Signup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./contexts/AuthContext";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import ContatoDev from "./components/pages/ContatoDev";
import Avisos from "./components/pages/Avisos";
import Treinamentos from "./components/pages/Treinamentos";

import PaginaTreinamento1 from "./components/pages/PaginasTreinamento/PaginaTreinamento1";
import PaginaTreinamento2 from "./components/pages/PaginasTreinamento/PaginaTreinamento2";
import PaginaTreinamento3 from "./components/pages/PaginasTreinamento/PaginaTreinamento3";
import PaginaTreinamento4 from "./components/pages/PaginasTreinamento/PaginaTreinamento4";
import PaginaTreinamento5 from "./components/pages/PaginasTreinamento/PaginaTreinamento5.js";

import Outlet from "./components/pages/Outlet";
import Valores from "./components/pages/Valores";
import CardSGP from "./components/pages/CardSGP";
import CardClipon from "./components/pages/CardClipon";
import CardDrip from "./components/pages/CardDrip";
import CardSunglass from "./components/pages/CardSunglass";
import CardAcessorios from "./components/pages/CardAcessorios";
import MenuCatalogo from "./components/pages/MenuCatalogo";
import CatalogoLenteOculos from "./components/pages/CatalogoLenteOculos";
import CardInfantil from "./components/pages/CardInfantil";
import Promocoes from "./components/pages/Promocoes";

import DashboardUser from "./components/pages/DashboardUser";
import DashboardSup from "./components/pages/DashboardSup";
import DashboardAdm from "./components/pages/DashboardAdm";

import Prototipo from "./components/pages/Evelyn/Prototipo";
import PrototipoEv from "./components/pages/Evelyn/Ev/PrototipoEv";

function App() {
  return (
    <Router className="conteudo">
      <AuthProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/Catalogo"
            element={
              <PrivateRoute>
                <Catalogo />
              </PrivateRoute>
            }
          />

          <Route
            path="/menucatalogo"
            element={
              <PrivateRoute>
                <MenuCatalogo />
              </PrivateRoute>
            }
          />
          <Route
            path="/cardsgp"
            element={
              <PrivateRoute>
                <CardSGP />
              </PrivateRoute>
            }
          />
          <Route
            path="/cardclipon"
            element={
              <PrivateRoute>
                <CardClipon />
              </PrivateRoute>
            }
          />

          <Route
            path="/carddrip"
            element={
              <PrivateRoute>
                <CardDrip />
              </PrivateRoute>
            }
          />
          <Route
            path="/cardsunglass"
            element={
              <PrivateRoute>
                <CardSunglass />
              </PrivateRoute>
            }
          />
          <Route
            path="/cardacessorios"
            element={
              <PrivateRoute>
                <CardAcessorios />
              </PrivateRoute>
            }
          />
          <Route
            path="/cardinfantil"
            element={
              <PrivateRoute>
                <CardInfantil />
              </PrivateRoute>
            }
          />

          <Route
            path="/CatalogoLenteOculos"
            element={
              <PrivateRoute>
                <CatalogoLenteOculos />
              </PrivateRoute>
            }
          />

          <Route
            path="/contatodev"
            element={
              <PrivateRoute>
                <ContatoDev />
              </PrivateRoute>
            }
          />
          <Route
            path="/avisos"
            element={
              <PrivateRoute>
                <Avisos />
              </PrivateRoute>
            }
          />
          <Route
            path="/7d2abf2d0fa7c3a0c13236910f30bc43"
            element={
              <PrivateRoute>
                <Signup />
              </PrivateRoute>
            }
          />
          <Route
            path="/treinamentos"
            element={
              <PrivateRoute>
                <Treinamentos />
              </PrivateRoute>
            }
          />
          <Route
            path="/PaginaTreinamento1"
            element={
              <PrivateRoute>
                <PaginaTreinamento1 />
              </PrivateRoute>
            }
          />
          <Route
            path="/PaginaTreinamento2"
            element={
              <PrivateRoute>
                <PaginaTreinamento2 />
              </PrivateRoute>
            }
          />
          <Route
            path="/PaginaTreinamento3"
            element={
              <PrivateRoute>
                <PaginaTreinamento3 />
              </PrivateRoute>
            }
          />

          <Route
            path="/PaginaTreinamento4"
            element={
              <PrivateRoute>
                <PaginaTreinamento4 />
              </PrivateRoute>
            }
          />

          <Route
            path="/PaginaTreinamento5"
            element={
              <PrivateRoute>
                <PaginaTreinamento5 />
              </PrivateRoute>
            }
          />

          <Route
            path="/outlet"
            element={
              <PrivateRoute>
                <Outlet />
              </PrivateRoute>
            }
          />
          <Route
            path="/Valores"
            element={
              <PrivateRoute>
                <Valores />
              </PrivateRoute>
            }
          />
          <Route
            path="/Promocoes"
            element={
              <PrivateRoute>
                <Promocoes />
              </PrivateRoute>
            }
          />

          <Route path="/*" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/dashboard/:id"
            element={
              <PrivateRoute>
                <DashboardUser />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboardSupervisor/:id"
            element={
              <PrivateRoute>
                <DashboardSup />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboardAdm"
            element={
              <PrivateRoute>
                <DashboardAdm />
              </PrivateRoute>
            }
          />
          <Route
            path="/prototipo"
            element={
              <PrivateRoute>
                <Prototipo />
              </PrivateRoute>
            }
          />
          <Route
            path="/prototipoev"
            element={
              <PrivateRoute>
                <PrototipoEv />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
