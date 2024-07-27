import React, { useEffect, useState } from "react";
import Thermometer from "react-thermometer-component";

export default function TermometroPatricia() {
  const [dataPatricia, setDataPatricia] = useState([]);

  useEffect(() => {
    const GetTermometro = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/termometro/api_dashboard_termometro_patricia.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataPatricia(responseJson.VENDAS);
          console.log(responseJson);
        });
    };
    GetTermometro();
  }, []);

  const metaDia = dataPatricia[0]?.PERCENTUALDIABATIDO;

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
