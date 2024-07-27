import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./fetch";
import "./fetch.css";

const FetchLentes = () => {
  const [lentes, setLentes] = useState([]);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [idMarca, setIdMarca] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const buttonNames = [
    "Diversas/Johson/Solótica",
    "Essilor/Kodak/Zeiss/BlueCut",
    "VS Incol/VS Alta Dioptrias/VS Lite Incol",
    "VS Surf/KODAK Single/Zeis FreeForm",
    "AR Essilor/Promo Essilor/Colorações/Serviços/",
    "Chorma Digital/Definity/FreeForm",
    "Essilor Interview/Kodak Softwear/Bifocais",
    "Varilux XR Design/Varilux Physio",
    "Varilux Confort e Max/Varilux Liberty",
    "Kodak Unique UHD/Network UHD/Precise",
    "Espace PlusDigital/Short Digital/Plus",
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://192.168.30.252:9091/app_portal_server/backend/Lentes_Prontas_e_LC.php?id_marca=${id}`
        );

        setLentes(response.data.Lentes);
      } catch (error) {
        console.error("Erro", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const handleButtonClick = (newId) => {
    setId(newId);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://192.168.30.252:9091/app_portal_server/backend/Lentes_Prontas_e_LC.php`
      );

      setLentes(response.data.Lentes);
    } catch (error) {
      console.error("Erro", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLentes = lentes.filter((lente) =>
    Object.values(lente).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  console.log(filteredLentes);

  return (
    <div className="FetchLentes">
      <div>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Carregando...</p>}
      {!loading && filteredLentes.length === 0 && (
        <p>Nenhum dado encontrado.</p>
      )}
      {!loading && filteredLentes.length > 0 && (
        <>
          <div className="button-container">
            {Array.from({ length: 11 }, (_, index) => (
              <button
                className=""
                key={index + 1}
                onClick={() => handleButtonClick(index + 1)}
              >
                {buttonNames[index]}
              </button>
            ))}
          </div>
          <div className="table-container">
            {id === 1 && (
              <>
                <table className="">
                  <thead>
                    <tr>
                      <th>Marca</th>
                      <th>Marca Variant</th>
                      <th>Produto</th>
                      <th>Preço par</th>
                      <th>Esférico</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLentes.map((lente, key) => (
                      <tr key={key}>
                        <td>{lente.MARCA}</td>
                        <td>{lente.MARCA_VARIANT}</td>
                        <td>{lente.PRODUTO}</td>
                        <td>{lente.PRECO_PAR}</td>
                        <td>{lente.ESFERICO}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br />
              </>
            )}
            {id === 2 && (
              <>
                <table className="">
                  <thead>
                    <tr>
                      <th>Marca</th>
                      <th>Marca Variant</th>
                      <th>Produto</th>
                      <th>Preço par</th>
                      <th>Esférico</th>
                      <th>Blue UV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLentes.map((lente, key) => (
                      <tr key={key}>
                        <td>{lente.MARCA}</td>
                        <td>{lente.MARCA_VARIANT}</td>
                        <td>{lente.PRODUTO}</td>
                        <td>{lente.PRECO_PAR}</td>
                        <td>{lente.ESFERICO}</td>
                        <td>{lente.BLUE_UV}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br />
              </>
            )}
            {id === 3 && (
              <table className="">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Marca Variant</th>
                    <th>Produto</th>
                    <th>Preço par</th>
                    <th>Esférico</th>
                    <th>Altura</th>
                    <th>IR</th>
                    <th>Cil</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLentes.map((lente, key) => (
                    <tr key={key}>
                      <td>{lente.MARCA}</td>
                      <td>{lente.MARCA_VARIANT}</td>
                      <td>{lente.PRODUTO}</td>
                      <td>{lente.PRECO_PAR}</td>
                      <td>{lente.ESFERICO}</td>
                      <td>{lente.ALTURA}</td>
                      <td>{lente.IR}</td>
                      <td>{lente.CIL}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {id === 4 && (
              <table className="">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Marca Variant</th>
                    <th>Produto</th>
                    <th>Preço par</th>
                    <th>Esférico</th>
                    <th>BLUE_UV</th>
                    <th>Crizal Prevencia</th>
                    <th>Crizal Sapphire</th>
                    <th>Crizal Rock</th>
                    <th>Crizal Easy Pro</th>
                    <th>Optifog</th>
                    <th>Trio Easy Clean</th>
                    <th>Sem AR</th>
                    <th>No Reflex</th>
                    <th>Crizal Sapphire HR</th>
                    <th>Incolor</th>
                    <th>Crizal S</th>
                    <th>Duravision Platinum</th>
                    <th>Duravision Silver</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLentes.map((lente, key) => (
                    <tr key={key}>
                      <td>{lente.MARCA}</td>
                      <td>{lente.MARCA_VARIANT}</td>
                      <td>{lente.PRODUTO}</td>
                      <td>{lente.PRECO_PAR}</td>
                      <td>{lente.ESFERICO}</td>
                      <td>{lente.BLUE_UV}</td>
                      <td>{lente.CRIZAL_PREVENCIA}</td>
                      <td>{lente.CRIZAL_SAPPHIRE}</td>
                      <td>{lente.CRIZAL_ROCK}</td>
                      <td>{lente.CRIZAL_EASY_PRO}</td>
                      <td>{lente.OPTIFOG}</td>
                      <td>{lente.TRIO_EASY_CLEAN}</td>
                      <td>{lente.SEM_AR}</td>
                      <td>{lente.NO_REFLEX}</td>
                      <td>{lente.CRIZAL_SAPPHIRE_HR}</td>
                      <td>{lente.INCOLOR}</td>
                      <td>{lente.INDICE}</td>
                      <td>{lente.DURAVISION_PLATINUM}</td>
                      <td>{lente.DURAVISION_SILVER}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {id === 5 && (
              <table className="">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Marca Variant</th>
                    <th>Produto</th>
                    <th>Preço par</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLentes.map((lente, key) => (
                    <tr key={key}>
                      <td>{lente.MARCA}</td>
                      <td>{lente.MARCA_VARIANT}</td>
                      <td>{lente.PRODUTO}</td>
                      <td>{lente.PRECO_PAR}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {id === 6 && (
              <table className="">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Marca Variant</th>
                    <th>Produto</th>
                    <th>Preço par</th>
                    <th>Esférico</th>
                    <th>Com AR</th>
                    <th>Sem AR</th>
                    <th>Adição</th>
                    <th>Altura</th>
                    <th>IR</th>
                    <th>CIL</th>
                    <th>Blue UV</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLentes.map((lente, key) => (
                    <tr key={key}>
                      <td>{lente.MARCA}</td>
                      <td>{lente.MARCA_VARIANT}</td>
                      <td>{lente.PRODUTO}</td>
                      <td>{lente.PRECO_PAR}</td>
                      <td>{lente.ESFERICO}</td>
                      <td>{lente.COM_AR}</td>
                      <td>{lente.SEM_AR}</td>
                      <td>{lente.ADICAO}</td>
                      <td>{lente.ALTURA}</td>
                      <td>{lente.IR}</td>
                      <td>{lente.CIL}</td>
                      <td>{lente.BLUE_UV}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {id === 7 && (
              <table className="">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Marca Variant</th>
                    <th>Produto</th>
                    <th>Preço par</th>
                    <th>Esférico</th>

                    <th>Crizal Prevencia</th>
                    <th>Crizal Rock</th>
                    <th>Crizal Easy Pro</th>
                    <th>Crizal Sapphire HR</th>

                    <th>Optifog</th>
                    <th>Trio Easy Clean</th>
                    <th>No Reflex</th>
                    <th>Verniz Hc INC</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLentes.map((lente, key) => (
                    <tr key={key}>
                      <td>{lente.MARCA}</td>
                      <td>{lente.MARCA_VARIANT}</td>
                      <td>{lente.PRODUTO}</td>
                      <td>{lente.PRECO_PAR}</td>
                      <td>{lente.ESFERICO}</td>

                      <td>{lente.CRIZAL_PREVENCIA}</td>
                      <td>{lente.CRIZAL_ROCK}</td>
                      <td>{lente.CRIZAL_EASY_PRO}</td>
                      <td>{lente.CRIZAL_SAPPHIRE_HR}</td>

                      <td>{lente.OPTIFOG}</td>
                      <td>{lente.TRIO_EASY_CLEAN}</td>
                      <td>{lente.NO_REFLEX}</td>
                      <td>{lente.VERNIZ_HC_INC}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {id === 8 && (
              <table className="">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Marca Variant</th>
                    <th>Produto</th>
                    <th>Esférico</th>

                    <th>BLUE UV</th>

                    <th>Crizal Prevencia</th>
                    <th>Crizal Rock</th>
                    <th>Crizal Easy Pro</th>
                    <th>Crizal Sapphire</th>

                    <th>Optifog</th>
                    <th>Colaração simples</th>
                    <th>Colaração Degrade</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLentes.map((lente, key) => (
                    <tr key={key}>
                      <td>{lente.MARCA}</td>
                      <td>{lente.MARCA_VARIANT}</td>
                      <td>{lente.PRODUTO}</td>
                      <td>{lente.ESFERICO}</td>

                      <td>{lente.BLUE_UV}</td>

                      <td>{lente.CRIZAL_PREVENCIA}</td>
                      <td>{lente.CRIZAL_ROCK}</td>
                      <td>{lente.CRIZAL_EASY_PRO}</td>
                      <td>{lente.CRIZAL_SAPPHIRE}</td>

                      <td>{lente.OPTIFOG}</td>
                      <td>{lente.COLORACAO_SIMPLES}</td>
                      <td>{lente.COLORACAO_DEGRADE}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {id === 9 && (
              <table className="">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Marca Variant</th>
                    <th>Produto</th>
                    <th>Esférico</th>

                    <th>BLUE UV</th>

                    <th>Crizal Prevencia</th>
                    <th>Crizal Rock</th>
                    <th>Crizal Easy Pro</th>
                    <th>Crizal Sapphire</th>

                    <th>Optifog</th>
                    <th>Trio Easy Clean</th>
                    <th>Incolor</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLentes.map((lente, key) => (
                    <tr key={key}>
                      <td>{lente.MARCA}</td>
                      <td>{lente.MARCA_VARIANT}</td>
                      <td>{lente.PRODUTO}</td>
                      <td>{lente.ESFERICO}</td>

                      <td>{lente.BLUE_UV}</td>

                      <td>{lente.CRIZAL_PREVENCIA}</td>
                      <td>{lente.CRIZAL_ROCK}</td>
                      <td>{lente.CRIZAL_EASY_PRO}</td>
                      <td>{lente.CRIZAL_SAPPHIRE}</td>

                      <td>{lente.OPTIFOG}</td>
                      <td>{lente.TRIO_EASY_CLEAN}</td>
                      <td>{lente.INCOLOR}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {id === 10 && (
              <table className="">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Marca Variant</th>
                    <th>Produto</th>
                    <th>Esférico</th>

                    <th>BLUE UV</th>

                    <th>Crizal Prevencia</th>
                    <th>Crizal Rock</th>
                    <th>Crizal Easy Pro</th>
                    <th>Crizal Sapphire hr</th>

                    <th>Optifog</th>
                    <th>Trio Easy Clean</th>
                    <th>Incolor</th>

                    <th>No Reflex</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLentes.map((lente, key) => (
                    <tr key={key}>
                      <td>{lente.MARCA}</td>
                      <td>{lente.MARCA_VARIANT}</td>
                      <td>{lente.PRODUTO}</td>
                      <td>{lente.ESFERICO}</td>

                      <td>{lente.BLUE_UV}</td>

                      <td>{lente.CRIZAL_PREVENCIA}</td>
                      <td>{lente.CRIZAL_ROCK}</td>
                      <td>{lente.CRIZAL_EASY_PRO}</td>
                      <td>{lente.CRIZAL_SAPPHIRE_HR}</td>

                      <td>{lente.OPTIFOG}</td>
                      <td>{lente.TRIO_EASY_CLEAN}</td>
                      <td>{lente.INCOLOR}</td>

                      <td>{lente.NO_REFLEX}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {id === 11 && (
              <table className="">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Marca Variant</th>
                    <th>Produto</th>
                    <th>Esférico</th>

                    <th>BLUE UV</th>

                    <th>Crizal Prevencia</th>
                    <th>Crizal Rock</th>
                    <th>Crizal Easy Pro</th>
                    <th>Crizal Sapphire</th>
                    <th>Crizal Sapphire hr</th>

                    <th>Optifog</th>
                    <th>Trio Easy Clean</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLentes.map((lente, key) => (
                    <tr key={key}>
                      <td>{lente.MARCA}</td>
                      <td>{lente.MARCA_VARIANT}</td>
                      <td>{lente.PRODUTO}</td>
                      <td>{lente.ESFERICO}</td>

                      <td>{lente.BLUE_UV}</td>

                      <td>{lente.CRIZAL_PREVENCIA}</td>
                      <td>{lente.CRIZAL_ROCK}</td>
                      <td>{lente.CRIZAL_EASY_PRO}</td>
                      <td>{lente.CRIZAL_SAPPHIRE}</td>
                      <td>{lente.CRIZAL_SAPPHIRE_HR}</td>

                      <td>{lente.OPTIFOG}</td>
                      <td>{lente.TRIO_EASY_CLEAN}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default FetchLentes;
