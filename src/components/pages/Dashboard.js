import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

import styles from "./dashboard.module.scss";

import TermometroNaiara from "../Graph/termometro/TermometroNaiara";
import TermometroPatricia from "../Graph/termometro/TermometroPatricia";
import TermometroPamela from "../Graph/termometro/TermometroPamela";

export default function Dashboard() {
  const { currentUser } = useAuth();

  const uid = `'${currentUser.uid}'`;

  const [dataBox, setDataBox] = useState([]);

  const [dataComparaVenda, setDataComparaVenda] = useState([]);
  const [dataComparaTm, setDataComparaTm] = useState([]);

  var { id } = useParams();

  if (id !== uid) {
    window.location.href = "http://192.168.30.252:7000/home";
  }

  useEffect(() => {
    const getConversao = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_ven_auto/meta_acumulada.php?id=" +
          id
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataBox(responseJson.BoxVenda);
          //console.log(responseJson);
        });
    };
    getConversao();
  }, [id]);

  return (
    <div className={styles.ContainerGeral}>
      <div className={styles.containerBoxSuperior}>
        <div className={styles.boxSuperiorConteudo}>
          <div className={styles.controlaConteudo}>
            <div className={styles.titulo}>Meta</div>

            {Object.values(dataBox).map((val, key) => {
              return (
                <div key={key} className={styles.conteudo}>
                  {val.META}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.boxSuperiorConteudo}>
          <div className={styles.controlaConteudo}>
            <div className={styles.titulo}>Faltante para bater a meta</div>
            {Object.values(dataBox).map((val, key) => {
              return (
                <div key={key} className={styles.conteudo}>
                  {val.DIFVENMETA}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.boxSuperiorConteudo}>
          <div className={styles.controlaConteudo}>
            <div className={styles.titulo}>Total Venda</div>
            {Object.values(dataBox).map((val, key) => {
              return (
                <div key={key} className={styles.conteudo}>
                  {val.VENDAS}
                </div>
              );
            })}

            {Object.values(dataComparaVenda).map((val, key) => {
              return (
                <div key={key} className={styles.conteudo}>
                  {val.COMPARAVENDAPERCENTUAL}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.containerBoxSuperior}>
        <div className={styles.boxSuperiorConteudo}>
          <div className={styles.controlaConteudo}>
            <div className={styles.titulo}>Ticket médio</div>

            {Object.values(dataBox).map((val, key) => {
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
            <div className={styles.titulo}>Vitórias</div>
            {Object.values(dataBox).map((val, key) => {
              return (
                <div key={key} className={styles.conteudo}>
                  {val.VITORIAS}
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.boxSuperiorConteudo}>
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
    </div>
  );
}
