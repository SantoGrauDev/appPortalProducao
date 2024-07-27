import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import styles from "./dashboardSup.module.scss";

import { FaFilter } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { BsFillFlagFill } from "react-icons/bs";

import { Table } from "semantic-ui-react";

import GraficoNaiaraTm from "../Graph/naiara/GraficoNaiaraTm";
import GraficoNaiaraConv from "../Graph/naiara/GraficoNaiaraConv";
import GraficoNaiaraVideoChamada from "../Graph/naiara/GraficoNaiaraVideoChamada";
import GraficoNaiaraVenda from "../Graph/naiara/GraficoNaiaraVenda";

import GraficoPamelaTm from "../Graph/pamela/GraficoPamelaTm";
import GraficoPamelaConv from "../Graph/pamela/GraficoPamelaConv";
import GraficoPamelaVideoChamada from "../Graph/pamela/GraficoPamelaVideoChamada";
import GraficoPamelaVenda from "../Graph/pamela/GraficoPamelaVenda";

import GraficoPatriciaTm from "../Graph/patricia/GraficoPatriciaTm";
import GraficoPatriciaConv from "../Graph/patricia/GraficoPatriciaConv";
import GraficoPatriciaVideoChamada from "../Graph/patricia/GraficoPatriciaVideoChamada";
import GraficoPatriciaVenda from "../Graph/patricia/GraficoPatriciaVenda";

import TermometroNaiara from "../Graph/termometro/TermometroNaiara";
import TermometroPamela from "../Graph/termometro/TermometroPamela";
import TermometroPatricia from "../Graph/termometro/TermometroPatricia";

export default function Dashboard() {
  const { currentUser } = useAuth();

  const uid = `'${currentUser.uid}'`;

  const [dataBoxSuperiorDia, setDataBoxSuperiorDia] = useState([]);
  const [dataBoxSuperiorSem, setDataBoxSuperiorSem] = useState([]);
  const [dataBoxSuperiorMes, setDataBoxSuperiorMes] = useState([]);
  const [dataBoxSuperiorAno, setDataBoxSuperiorAno] = useState([]);

  const [dataVendaVendedores, setDataVendaVendedores] = useState([]);

  const VerificaADM = currentUser.email;

  const loginSup = "naiarasantograu@gmail.com";

  const loginSup1 = "pampanzinha.sib@gmail.com";

  const loginSup2 = "danideoliveir32@gmail.com";

  const loginSup3 = "patiejoao1@hotmail.com";

  const loginSup4 = "jullie.avelaneda@gmail.com";

  const LoginADM = "kvoltareli@gmail.com";
  const LoginADM1 = "paula.aggio@oticasantograu.com.br";

  const RenderGraf = currentUser.email;

  var grafNaiara = false;
  var grafPamela = false;
  var grafDani = false;
  var grafPatricia = false;

  var supAuth = false;

  var { id } = useParams();

  if (RenderGraf === loginSup) {
    grafNaiara = true;
  }

  if (RenderGraf === loginSup1) {
    grafPamela = true;
  }

  if (RenderGraf === loginSup2) {
    grafNaiara = true;
  }

  if (RenderGraf === loginSup3) {
    grafPatricia = true;
  }

  if (
    VerificaADM === loginSup ||
    VerificaADM === loginSup1 ||
    VerificaADM === loginSup2 ||
    VerificaADM === loginSup3 ||
    VerificaADM === loginSup4 ||
    VerificaADM === LoginADM ||
    VerificaADM === LoginADM1
  ) {
    supAuth = true;
  }

  if (!supAuth) {
    window.location.href = "http://192.168.30.252:7000/home";
  }

  useEffect(() => {
    const GetInfoSup = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_sup_auto/box_venda_total/vendaTotal_dia.php?id=" +
          id
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataBoxSuperiorDia(responseJson.BoxVenda);
          //console.log(responseJson);
        });
    };
    GetInfoSup();
  }, [id]);

  useEffect(() => {
    const GetInfoSup = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_sup_auto/box_venda_total/vendaTotal_semana.php?id=" +
          id
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataBoxSuperiorSem(responseJson.BoxVenda);
          //console.log(responseJson);
        });
    };
    GetInfoSup();
  }, [id]);

  useEffect(() => {
    const GetInfoSup = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_sup_auto/box_venda_total/vendaTotal_mes.php?id=" +
          id
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataBoxSuperiorMes(responseJson.BoxVenda);
          //console.log(responseJson);
        });
    };
    GetInfoSup();
  }, [id]);

  useEffect(() => {
    const GetInfoSup = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_sup_auto/box_venda_total/vendaTotal_ano.php?id=" +
          id
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataBoxSuperiorAno(responseJson.BoxVenda);
          //console.log(responseJson);
        });
    };
    GetInfoSup();
  }, [id]);

  useEffect(() => {
    const GetInfoSup = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_sup_auto/vendas_vendedores/vendas_vendedores.php?id=" +
          id
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVendaVendedores(responseJson.VENDEDORES);
          //console.log(responseJson);
        });
    };
    GetInfoSup();
  }, [id]);

  const [mostraDia, setMostraDia] = useState(false);
  const [mostraSemana, setMostraSemana] = useState(false);
  const [mostraMes, setMostraMes] = useState(true);
  const [mostraAno, setMostraAno] = useState(false);

  const handleClickMostraDia = (event) => {
    setMostraDia(true);

    setMostraSemana(false);
    setMostraMes(false);
    setMostraAno(false);
  };

  const handleClickMostraSemana = (event) => {
    setMostraSemana(true);

    setMostraDia(false);
    setMostraMes(false);
    setMostraAno(false);
  };

  const handleClickMostraMes = (event) => {
    setMostraMes(true);

    setMostraDia(false);
    setMostraSemana(false);
    setMostraAno(false);
  };

  const handleClickMostraAno = (event) => {
    setMostraAno(true);

    setMostraDia(false);
    setMostraSemana(false);
    setMostraMes(false);
  };

  return (
    <div className={styles.ContainerGeral}>
      <div className={styles.filtro}>
        <div className={styles.filtroBord}>
          <span onClick={handleClickMostraDia}>Dia</span>
          <span onClick={handleClickMostraSemana}>-7 dias</span>
          <span onClick={handleClickMostraMes}>Mês</span>
          <span onClick={handleClickMostraAno}>Ano</span>
        </div>
      </div>

      <div className={styles.containerBoxSuperior}>
        <div className={styles.boxSuperiorConteudo}>
          <div className={styles.controlaConteudo}>
            <div className={styles.titulo}>Vendas total equipe</div>

            {mostraDia &&
              Object.values(dataBoxSuperiorDia).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.VENDAS}
                  </div>
                );
              })}
            {mostraSemana &&
              Object.values(dataBoxSuperiorSem).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.VENDAS}
                  </div>
                );
              })}
            {mostraMes &&
              Object.values(dataBoxSuperiorMes).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.VENDAS}
                  </div>
                );
              })}
            {mostraAno &&
              Object.values(dataBoxSuperiorAno).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.VENDAS}
                  </div>
                );
              })}
          </div>
        </div>

        <div className={styles.boxSuperiorConteudo}>
          <div className={styles.controlaConteudo}>
            <div className={styles.titulo}>Ticket médio total equipe</div>

            {mostraDia &&
              Object.values(dataBoxSuperiorDia).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.TM}
                  </div>
                );
              })}
            {mostraSemana &&
              Object.values(dataBoxSuperiorSem).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.TM}
                  </div>
                );
              })}
            {mostraMes &&
              Object.values(dataBoxSuperiorMes).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.TM}
                  </div>
                );
              })}
            {mostraAno &&
              Object.values(dataBoxSuperiorAno).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.TM}
                  </div>
                );
              })}
          </div>
        </div>

        <div className={styles.boxSuperiorConteudo}>
          <div className={styles.controlaConteudo}>
            <div className={styles.titulo}>Total vitórias equipe</div>

            {mostraDia &&
              Object.values(dataBoxSuperiorDia).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.VITORIAS}
                  </div>
                );
              })}
            {mostraSemana &&
              Object.values(dataBoxSuperiorSem).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.VITORIAS}
                  </div>
                );
              })}
            {mostraMes &&
              Object.values(dataBoxSuperiorMes).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.VITORIAS}
                  </div>
                );
              })}
            {mostraAno &&
              Object.values(dataBoxSuperiorAno).map((val, key) => {
                return (
                  <div key={key} className={styles.conteudo}>
                    {val.VITORIAS}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles.ContainerTermVel}>
        <div className={styles.relatorio}>
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Vendedores Jullie</Table.HeaderCell>
                <Table.HeaderCell>Vendas</Table.HeaderCell>
                <Table.HeaderCell>Ticket Médio</Table.HeaderCell>
                <Table.HeaderCell>% Meta Batida</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            {Object.values(dataVendaVendedores).map((val, key) => {
              return (
                <>
                  <Table.Body key={key}>
                    <Table.Row>
                      <Table.Cell>{val.VENDEDOR}</Table.Cell>
                      <Table.Cell>{val.VENDAS}</Table.Cell>
                      <Table.Cell>{val.TM}</Table.Cell>
                      <Table.Cell>{val.PERCENTUALMETA}%</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </>
              );
            })}
          </Table>
        </div>

        <div className={styles.termometro}>
          <div className={styles.conteudoTerm}>
            <div className={styles.titulo}>Jullie</div>
            <TermometroNaiara />
          </div>
          <div className={styles.conteudoTerm}>
            <div className={styles.titulo}>Pamela</div>
            <TermometroPamela />
          </div>
          <div className={styles.conteudoTerm}>
            <div className={styles.titulo}>Patricia</div>
            <TermometroPatricia />
          </div>
        </div>
      </div>
    </div>
  );
}
