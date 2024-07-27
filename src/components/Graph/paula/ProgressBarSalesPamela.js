import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import ReactSpeedometer from "react-d3-speedometer";

const ProgressBarSalesPamela = () => {
  const [dataResumoPamela, setDataResumoPamela] = useState([]);

  useEffect(() => {
    const GetResumoPamela = async () => {
      //console.log(id);
      await fetch(
        "http://192.168.30.252:9091/app_portal_server/Backend/api_dashboard_adm_auto/resumo/api_dashboard_resumo_pamela.php"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setDataResumoPamela(responseJson.VENDAS);
          console.log(responseJson);
        });
    };
    GetResumoPamela();
  }, []);

  let meta = dataResumoPamela[0]?.PERCENTUALDIABATIDO;

  const percentage = meta;

  return (
    <div>
      <ReactSpeedometer
        maxValue={100}
        value={percentage}
        needleColor="black"
        startColor="green"
        segments={10}
        currentValueText={"% vendas"}
        segmentColors={[
          "#ff0000",
          "#ff0000",
          "#ff5252",
          "#ff5252",
          "#f8ed62",
          "#f8ed62",
          "#008000",
          "#008000",
          "#70e000",
        ]}
      />
    </div>
  );
};
export default ProgressBarSalesPamela;
