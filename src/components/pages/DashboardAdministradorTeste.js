import React, { useEffect, useState } from "react";
import MonLoader from "react-spinners/MoonLoader";

import { Table } from "semantic-ui-react";

import styles from "./DashboardAdministrador.module.scss";

import { useAuth } from "../../contexts/AuthContext";

import GraficoPaulaVendas from "../Graph/paula/GraficoPaulaVendas";
import GraficoPaulaVideo from "../Graph/paula/GraficoPaulaVideo";
import GraficoPaulaConv from "../Graph/paula/GraficoPaulaConv";
import GraficoPaulaTm from "../Graph/paula/GraficoPaulaTm";

import ProgressBarSalesNaiara from "../Graph/paula/ProgressBarSalesNaiara";
import ProgressBarSalesPatricia from "../Graph/paula/ProgressBarSalesPatricia";
import ProgressBarSalesPamela from "../Graph/paula/ProgressBarSalesPamela";

import TermometroNaiara from "../Graph/paula/termometro/TermometroNaiara";
import TermometroPamela from "../Graph/paula/termometro/TermometroPamela";
import TermometroPatricia from "../Graph/paula/termometro/TermometroPatricia";

export default function DashboardAdministrador() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  let [loading, setLoading] = useState(true);
  let [loadingCont, setLoadingCont] = useState([]);

  useEffect(() => {
    if (loadingCont === false) {
      setLoading(false);
    }
  });
  console.log(loading);
  console.log(loadingCont);

  let [color, setColor] = useState("#ffffff");

  const [dataVendaTotalEmpDia, setDataVendaTotalEmpDia] = useState([]);
  const [dataVendaTotalEmpSemana, setDataVendaTotalEmpSemana] = useState([]);
  const [dataVendaTotalEmpMes, setDataVendaTotalEmpMes] = useState([]);
  const [dataVendaTotalEmpAno, setDataVendaTotalEmpAno] = useState([]);

  const [dataVenTmNaiaraDia, setDataVenTmNaiaraDia] = useState([]);
  const [dataVenTmNaiaraSemana, setDataVenTmNaiaraSemana] = useState([]);
  const [dataVenTmNaiaraMes, setDataVenTmNaiaraMes] = useState([]);
  const [dataVenTmNaiaraAno, setDataVenTmNaiaraAno] = useState([]);

  const [dataVenTmPamelaDia, setDataVenTmPamelaDia] = useState([]);
  const [dataVenTmPamelaSemana, setDataVenTmPamelaSemana] = useState([]);
  const [dataVenTmPamelaMes, setDataVenTmPamelaMes] = useState([]);
  const [dataVenTmPamelaAno, setDataVenTmPamelaAno] = useState([]);

  const [dataVenTmPatriciaDia, setDataVenTmPatriciaDia] = useState([]);
  const [dataVenTmPatriciaSemana, setDataVenTmPatriciaSemana] = useState([]);
  const [dataVenTmPatriciaMes, setDataVenTmPatriciaMes] = useState([]);
  const [dataVenTmPatriciaAno, setDataVenTmPatriciaAno] = useState([]);

  const [dataRankDia, setDataRankDia] = useState([]);
  const [dataRankSemana, setDataRankSemana] = useState([]);
  const [dataRankMes, setDataRankMes] = useState([]);
  const [dataRankAno, setDataRankAno] = useState([]);

  const [dataVendedoresNaiara, setDataVendedoresNaiara] = useState([]);
  const [dataVendedoresPamela, setDataVendedoresPamela] = useState([]);
  const [dataVendedoresPatricia, setDataVendedoresPatricia] = useState([]);

  const LoginADM = "kvoltareli@gmail.com";
  const LoginADM1 = "paula.aggio@oticasantograu.com.br";

  const { currentUser } = useAuth();

  var supAuth = false;

  const VerificaADM = currentUser.email;

  if (VerificaADM === LoginADM || VerificaADM === LoginADM1) {
    supAuth = true;
  }

  if (!supAuth) {
    window.location.href = "http://192.168.30.252:7000/home";
  }

  useEffect(() => {
    const getVendaTotalEmpDia = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboardSup_auto/api_dashboard_box_oportunidades.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVendaTotalEmpDia(responseJson.BoxVendaSup);
          // console.log(responseJson);
        });
    };
    getVendaTotalEmpDia();
  }, []);

  useEffect(() => {
    const getVendaTotalEmpSemana = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/box/api_dashboard_box_vendas_semana.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVendaTotalEmpSemana(responseJson.BoxVenda);
          // console.log(responseJson);
        });
    };
    getVendaTotalEmpSemana();
  }, []);

  useEffect(() => {
    const getVendaTotalEmpMes = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/box/api_dashboard_box_vendas_mes.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVendaTotalEmpMes(responseJson.BoxVenda);
          // console.log(responseJson);
        });
    };
    getVendaTotalEmpMes();
  }, []);

  useEffect(() => {
    const getVendaTotalEmpAno = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/box/api_dashboard_box_vendas_ano.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVendaTotalEmpAno(responseJson.BoxVenda);
          // console.log(responseJson);
        });
    };
    getVendaTotalEmpAno();
  }, []);

  useEffect(() => {
    const getVenTmNaiaraDia = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_naiara_dia.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmNaiaraDia(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmNaiaraDia();
  }, []);

  useEffect(() => {
    const getVenTmNaiaraSemana = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_naiara_semana.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmNaiaraSemana(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmNaiaraSemana();
  }, []);

  useEffect(() => {
    const getVenTmNaiaraMes = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_naiara_mes.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmNaiaraMes(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmNaiaraMes();
  }, []);

  useEffect(() => {
    const getVenTmNaiaraAno = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_naiara_ano.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmNaiaraAno(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmNaiaraAno();
  }, []);

  useEffect(() => {
    const getVenTmPamelaDia = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_pamela_dia.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmPamelaDia(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmPamelaDia();
  }, []);

  useEffect(() => {
    const getVenTmPamelaSemana = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_pamela_semana.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmPamelaSemana(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmPamelaSemana();
  }, []);

  useEffect(() => {
    const getVenTmPamelaMes = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_pamela_mes.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmPamelaMes(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmPamelaMes();
  }, []);

  useEffect(() => {
    const getVenTmPamelaAno = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_pamela_ano.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmPamelaAno(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmPamelaAno();
  }, []);

  useEffect(() => {
    const getVenTmPatriciaDia = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_patricia_dia.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmPatriciaDia(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmPatriciaDia();
  }, []);

  useEffect(() => {
    const getVenTmPatriciaSemana = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_patricia_semana.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmPatriciaSemana(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmPatriciaSemana();
  }, []);

  useEffect(() => {
    const getVenTmPatriciaMes = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_patricia_mes.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmPatriciaMes(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmPatriciaMes();
  }, []);

  useEffect(() => {
    const getVenTmPatriciaAno = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_venTm_patricia_ano.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVenTmPatriciaAno(responseJson.VENDAS);
          // console.log(responseJson);
        });
    };
    getVenTmPatriciaAno();
  }, []);

  useEffect(() => {
    const getRankDia = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/rank/api_dashboard_rank_vendedores_dia.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataRankDia(responseJson.RANK);
          // console.log(responseJson);
        });
    };
    getRankDia();
  }, []);

  useEffect(() => {
    const getRankSemana = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/rank/api_dashboard_rank_vendedores_semana.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataRankSemana(responseJson.RANK);
          // console.log(responseJson);
        });
    };
    getRankSemana();
  }, []);

  useEffect(() => {
    const getRankMes = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/rank/api_dashboard_rank_vendedores_mes.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataRankMes(responseJson.RANK);
          // console.log(responseJson);
        });
    };
    getRankMes();
  }, []);

  useEffect(() => {
    const getRankAno = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/rank/api_dashboard_rank_vendedores_ano.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataRankAno(responseJson.RANK);
          // console.log(responseJson);
        });
    };
    getRankAno();
  }, []);

  useEffect(() => {
    const getVendedoresNaiara = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/vendas/api_dashboard_vendas_naiara.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVendedoresNaiara(responseJson.VENDEDORES);
          // console.log(responseJson);
        });
    };
    getVendedoresNaiara();
  }, []);

  useEffect(() => {
    const getVendedoresPamela = async () => {
      setLoadingCont(true);
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/vendas/api_dashboard_vendas_pamela.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVendedoresPamela(responseJson.VENDEDORES);
          setLoadingCont(false);
          // console.log(responseJson);
        });
    };
    getVendedoresPamela();
  }, []);

  useEffect(() => {
    const getVendedoresPatricia = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/vendas/api_dashboard_vendas_patricia.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataVendedoresPatricia(responseJson.VENDEDORES);
          // console.log(responseJson);
        });
    };
    getVendedoresPatricia();
  }, []);

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
      {loading ? (
        <MonLoader color="#36d7b7" />
      ) : (
        <>
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
                <div className={styles.titulo}>Vendas total empresa</div>
                {mostraDia &&
                  Object.values(dataVendaTotalEmpDia).map((val, key) => {
                    return (
                      <div key={key} className={styles.conteudo}>
                        {val.VENDAS}
                      </div>
                    );
                  })}
                {mostraSemana &&
                  Object.values(dataVendaTotalEmpSemana).map((val, key) => {
                    return (
                      <div key={key} className={styles.conteudo}>
                        {val.VENDAS}
                      </div>
                    );
                  })}
                {mostraMes &&
                  Object.values(dataVendaTotalEmpMes).map((val, key) => {
                    return (
                      <div key={key} className={styles.conteudo}>
                        {val.VENDAS}
                      </div>
                    );
                  })}
                {mostraAno &&
                  Object.values(dataVendaTotalEmpAno).map((val, key) => {
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
                <div className={styles.titulo}>Ticket médio total empresa</div>
                {mostraDia &&
                  Object.values(dataVendaTotalEmpDia).map((val, key) => {
                    return (
                      <div key={key} className={styles.conteudo}>
                        {val.TM}
                      </div>
                    );
                  })}
                {mostraSemana &&
                  Object.values(dataVendaTotalEmpSemana).map((val, key) => {
                    return (
                      <div key={key} className={styles.conteudo}>
                        {val.TM}
                      </div>
                    );
                  })}
                {mostraMes &&
                  Object.values(dataVendaTotalEmpMes).map((val, key) => {
                    return (
                      <div key={key} className={styles.conteudo}>
                        {val.TM}
                      </div>
                    );
                  })}
                {mostraAno &&
                  Object.values(dataVendaTotalEmpAno).map((val, key) => {
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
                <div className={styles.titulo}>Total vitórias</div>
                {mostraDia &&
                  Object.values(dataVendaTotalEmpDia).map((val, key) => {
                    return (
                      <div key={key} className={styles.conteudo}>
                        {val.VITORIAS}
                      </div>
                    );
                  })}
                {mostraSemana &&
                  Object.values(dataVendaTotalEmpSemana).map((val, key) => {
                    return (
                      <div key={key} className={styles.conteudo}>
                        {val.VITORIAS}
                      </div>
                    );
                  })}
                {mostraMes &&
                  Object.values(dataVendaTotalEmpMes).map((val, key) => {
                    return (
                      <div key={key} className={styles.conteudo}>
                        {val.VITORIAS}
                      </div>
                    );
                  })}
                {mostraAno &&
                  Object.values(dataVendaTotalEmpAno).map((val, key) => {
                    return (
                      <div key={key} className={styles.conteudo}>
                        {val.VITORIAS}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className={styles.containerResumo}>
            <div className={styles.boxResumo}>
              <div className={styles.titulo}>Naiara</div>
              <div className={styles.controlaResumo}>
                <div className={styles.conteudoResumo}>
                  Vendas:
                  {mostraDia &&
                    Object.values(dataVenTmNaiaraDia).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                  {mostraSemana &&
                    Object.values(dataVenTmNaiaraSemana).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                  {mostraMes &&
                    Object.values(dataVenTmNaiaraMes).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                  {mostraAno &&
                    Object.values(dataVenTmNaiaraAno).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                </div>
                <div className={styles.conteudoResumo}>
                  Tm:
                  {mostraDia &&
                    Object.values(dataVenTmNaiaraDia).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                  {mostraSemana &&
                    Object.values(dataVenTmNaiaraSemana).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                  {mostraMes &&
                    Object.values(dataVenTmNaiaraMes).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                  {mostraAno &&
                    Object.values(dataVenTmNaiaraAno).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                </div>

                <div className={styles.termometro}>
                  <TermometroNaiara />
                </div>
              </div>
              <div className={styles.progressBar}>
                <ProgressBarSalesNaiara />
              </div>
            </div>

            <div className={styles.boxResumo}>
              <div className={styles.titulo}>Pamela</div>
              <div className={styles.controlaResumo}>
                <div className={styles.conteudoResumo}>
                  Vendas:{" "}
                  {mostraDia &&
                    Object.values(dataVenTmPamelaDia).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                  {mostraSemana &&
                    Object.values(dataVenTmPamelaSemana).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                  {mostraMes &&
                    Object.values(dataVenTmPamelaMes).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                  {mostraAno &&
                    Object.values(dataVenTmPamelaAno).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                </div>
                <div className={styles.conteudoResumo}>
                  Tm:{" "}
                  {mostraDia &&
                    Object.values(dataVenTmPamelaDia).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                  {mostraSemana &&
                    Object.values(dataVenTmPamelaSemana).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                  {mostraMes &&
                    Object.values(dataVenTmPamelaMes).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                  {mostraAno &&
                    Object.values(dataVenTmPamelaAno).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                </div>

                <div className={styles.termometro}>
                  <TermometroPamela />
                </div>
              </div>
              <div className={styles.progressBar}>
                <ProgressBarSalesPamela />
              </div>
            </div>

            <div className={styles.boxResumo}>
              <div className={styles.titulo}>Patrícia</div>
              <div className={styles.controlaResumo}>
                <div className={styles.conteudoResumo}>
                  Vendas:{" "}
                  {mostraDia &&
                    Object.values(dataVenTmPatriciaDia).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                  {mostraSemana &&
                    Object.values(dataVenTmPatriciaSemana).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                  {mostraMes &&
                    Object.values(dataVenTmPatriciaMes).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                  {mostraAno &&
                    Object.values(dataVenTmPatriciaAno).map((val, key) => {
                      return <span key={key}>{val.VENDAS}</span>;
                    })}
                </div>
                <div className={styles.conteudoResumo}>
                  Tm:{" "}
                  {mostraDia &&
                    Object.values(dataVenTmPatriciaDia).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                  {mostraSemana &&
                    Object.values(dataVenTmPatriciaSemana).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                  {mostraMes &&
                    Object.values(dataVenTmPatriciaMes).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                  {mostraAno &&
                    Object.values(dataVenTmPatriciaAno).map((val, key) => {
                      return <span key={key}>{val.TM}</span>;
                    })}
                </div>

                <div className={styles.termometro}>
                  <TermometroPatricia />
                </div>
              </div>
              <div className={styles.progressBar}>
                <ProgressBarSalesPatricia />
              </div>
            </div>
          </div>

          <div className={styles.topVendedores}>
            <div className={styles.titulo}>Top 3 vendedores</div>
            <div className={styles.RankVendedores}>
              {mostraDia &&
                Object.values(dataRankDia).map((val, key) => {
                  return (
                    <div key={key} className={styles.RankVendedores}>
                      {val.VENDEDOR} - R$ {val.VENDAS} - Sup. {val.SUPERVISOR}
                    </div>
                  );
                })}
              {mostraSemana &&
                Object.values(dataRankSemana).map((val, key) => {
                  return (
                    <div key={key} className={styles.RankVendedores}>
                      {val.VENDEDOR} - R$ {val.VENDAS} - Sup. {val.SUPERVISOR}
                    </div>
                  );
                })}
              {mostraMes &&
                Object.values(dataRankMes).map((val, key) => {
                  return (
                    <div key={key} className={styles.RankVendedores}>
                      {val.VENDEDOR} - R$ {val.VENDAS} - Sup. {val.SUPERVISOR}
                    </div>
                  );
                })}
              {mostraAno &&
                Object.values(dataRankAno).map((val, key) => {
                  return (
                    <div key={key} className={styles.RankVendedores}>
                      {val.VENDEDOR} - R$ {val.VENDAS} - Sup. {val.SUPERVISOR}
                    </div>
                  );
                })}
            </div>
            <div className={styles.ContainerBarras}>
              <div className={styles.BarraDois}>
                <h1>1º</h1>
              </div>
              <div className={styles.BarraUm}>
                <h1>2º</h1>
              </div>

              <div className={styles.BarraTres}>
                <h1>3º</h1>
              </div>
            </div>
          </div>

          <div className={styles.containerPerformance}>
            <Table striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Vendedores Naiara</Table.HeaderCell>
                  <Table.HeaderCell>Vendas</Table.HeaderCell>
                  <Table.HeaderCell>Ticket Médio</Table.HeaderCell>
                  <Table.HeaderCell>% Meta Batida</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {Object.values(dataVendedoresNaiara).map((val, key) => {
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
          <div className={styles.containerPerformance}>
            <Table striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Vendedores Pamela</Table.HeaderCell>
                  <Table.HeaderCell>Vendas</Table.HeaderCell>
                  <Table.HeaderCell>Ticket Médio</Table.HeaderCell>
                  <Table.HeaderCell>% Meta Batida</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {Object.values(dataVendedoresPamela).map((val, key) => {
                return (
                  <>
                    <Table.Body>
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
          <div className={styles.containerPerformance}>
            <Table striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Vendedores Patricia</Table.HeaderCell>
                  <Table.HeaderCell>Vendas</Table.HeaderCell>
                  <Table.HeaderCell>Ticket Médio</Table.HeaderCell>
                  <Table.HeaderCell>% Meta Batida</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {Object.values(dataVendedoresPatricia).map((val, key) => {
                return (
                  <>
                    <Table.Body>
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
        </>
      )}
    </div>
  );
}
