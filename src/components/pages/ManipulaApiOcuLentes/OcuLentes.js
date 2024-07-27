import React from "react";
import FetchLentes from "../../../fetchLentes/fetch";
import { Table } from "semantic-ui-react";
import styles from "./OcuLentes.module.css";

// function LentesTable({ data }) {
//   return (
//     <Table>
//       <Table.Body>
//         <Table.Header>
//           <Table.HeaderCell>Kodak VS</Table.HeaderCell>
//         </Table.Header>
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell>MARCA</Table.HeaderCell>
//             <Table.HeaderCell>MARCA_VARIANT</Table.HeaderCell>
//             <Table.HeaderCell>PRODUTO</Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>

//         {data.map((item, index) => (
//           <Table.Row key={index}>
//             <Table.Cell>{item.MARCA}</Table.Cell>
//             <Table.Cell>{item.MARCA_VARIANT}</Table.Cell>
//             <Table.Cell>{item.PRODUTO}</Table.Cell>
//           </Table.Row>
//         ))}
//       </Table.Body>
//     </Table>
//   );
// }

function OcuLentes() {
  return <div className={styles.ContainerTudoLentes}></div>;
}

export default OcuLentes;
