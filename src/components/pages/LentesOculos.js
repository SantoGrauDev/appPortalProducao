import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import styles from "./Outlet.module.css";

function Outlet() {
  const [data, setData] = useState([]);

  const getOutlet = async () => {
    fetch("http://192.168.30.252:3001/getRows")
      .then((response) => response.json())
      .then((responseJson) =>
        //console.log(responseJson),
        setData(responseJson.values)
        //console.log(responseJson),
        // console.log(responseJson.values)
      );
  };

  useEffect(() => {
    getOutlet();
  }, []);

  return (
    <Sidebar>
      <div className={styles.ContainerGeralOutlet}>
        <Table fixed>
          <Table.Body>
            {Object.values(data).map((val, key) => {
              return (
                <Table.Row key={key}>
                  <Table.Cell>
                    <span>{val[0]}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span>{val[1]}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span>{val[2]}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span>{val[3]}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span>{val[4]}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span>{val[5]}</span>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </Sidebar>
  );
}

export default Outlet;
