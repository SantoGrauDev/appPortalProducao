import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";

export default function PrototipoEv() {
  const [data, setData] = useState([]);
  const getProdutos = async () => {
    fetch(
      "http://192.168.30.252:9091/app_portal_server/Backend/evelyn/visualizaOs.php"
    )
      .then((response) => response.json())
      .then((responseJson) =>
        //console.log(responseJson)
        setData(responseJson.records)
      );
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div>
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>OS</Table.HeaderCell>
            <Table.HeaderCell>Vendedor</Table.HeaderCell>
            <Table.HeaderCell>Lente</Table.HeaderCell>
            <Table.HeaderCell>Tipo lente</Table.HeaderCell>
            <Table.HeaderCell>Indice</Table.HeaderCell>
            <Table.HeaderCell>Valor</Table.HeaderCell>
            <Table.HeaderCell>Grade</Table.HeaderCell>
            <Table.HeaderCell>Dnp OE</Table.HeaderCell>
            <Table.HeaderCell>Dnp OD</Table.HeaderCell>
            <Table.HeaderCell>DP</Table.HeaderCell>
            <Table.HeaderCell>Comentario</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {Object.values(data).map((val, key) => {
          return (
            <Table.Body key={key}>
              <Table.Row>
                <Table.Cell>{val.OS}</Table.Cell>
                <Table.Cell>{val.VENDEDOR}</Table.Cell>
                <Table.Cell>{val.LENTE}</Table.Cell>
                <Table.Cell>{val.TIPOLENTE}</Table.Cell>
                <Table.Cell>{val.INDICE}</Table.Cell>
                <Table.Cell>{val.VALOR}</Table.Cell>
                <Table.Cell>{val.GRADE}</Table.Cell>
                <Table.Cell>{val.DNPOE}</Table.Cell>
                <Table.Cell>{val.DNPOD}</Table.Cell>
                <Table.Cell>{val.DP}</Table.Cell>
                <Table.Cell>{val.COMENTARIO}</Table.Cell>
              </Table.Row>
            </Table.Body>
          );
        })}
      </Table>
    </div>
  );
}
