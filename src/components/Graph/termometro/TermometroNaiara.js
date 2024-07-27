import React, { useEffect, useState } from "react";
import Thermometer from "react-thermometer-component";

export default function TermometroNaiara() {
  const [dataNaiara, setDataNaiara] = useState([]);

  useEffect(() => {
    const GetTermometro = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/termometro/api_dashboard_termometro_naiara.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataNaiara(responseJson.VENDAS);
          console.log(responseJson);
        });
    };
    GetTermometro();
  }, []);

  const metaDia = dataNaiara[0]?.PERCENTUALDIABATIDO;

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
