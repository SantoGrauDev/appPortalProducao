import React, { useEffect, useState } from "react";
import Thermometer from "react-thermometer-component";

export default function TermometroPamela() {
  const [dataPamela, setDataPamela] = useState([]);

  useEffect(() => {
    const GetTermometro = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/termometro/api_dashboard_termometro_pamela.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataPamela(responseJson.VENDAS);
          //console.log(responseJson);
        });
    };
    GetTermometro();
  }, []);

  const metaDia = dataPamela[0]?.PERCENTUALDIABATIDO;

  return (
    <>
      <Thermometer
        theme="light"
        value={metaDia}
        max="100"
        size="large"
        height="180"
      />
    </>
  );
}
