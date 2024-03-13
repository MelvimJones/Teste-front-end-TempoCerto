// src/components/ScheduleTable.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";

const ScheduleTable = () => {
  const hours = [
    "08:30 – 09:00",
    "09:00 – 09:30",
    "09:30 – 10:00",
    "10:00 – 10:30",
    "10:30 – 11:00",
    "11:00 – 11:30",
    "11:30 – 12:00",
    "12:00 – 12:30",
    "12:30 – 13:00",
  ];

  const docks = ["-", "Doca 1", "Doca 2", "Doca 3"];

  const peopleSchedule = [
    {
      name: "BRF S.A",
      hour: "08:30 – 09:00",
      dock: "Doca 1",
      status: "finished",
    },
    {
      name: "CEREALISTA GRAO EM GRAO LTDA - EPP",
      hour: "08:30 – 09:00",
      dock: "Doca 2",
      status: "finished",
    },
    {
      name: "BLUEPACK COMERCIO DE EMBALAGENS LTDA",
      hour: "10:00 – 10:30",
      dock: "Doca 1",
      status: "finished",
    },
    {
      name: "EXPRESSO RENOVACAO",
      hour: "10:00 – 10:30",
      dock: "Doca 2",
      status: "pending",
    },
    {
      name: "MENGUE EXPRESS EIRELI EPP",
      hour: "10:00 – 10:30",
      dock: "Doca 3",
      status: "pending",
    },
    {
      name: "MENGUE EXPRESS EIRELI EPP",
      hour: "10:30 – 11:00",
      dock: "Doca 3",
      status: "pending",
    },
    {
      name: "MENGUE EXPRESS EIRELI EPP",
      hour: "11:00 – 11:30",
      dock: "Doca 3",
      status: "pending",
    },
    {
      name: "TAF ATACADO",
      hour: "12:00 – 12:30",
      dock: "Doca 1",
      status: "finished",
    },
    {
      name: "TAF ATACADO",
      hour: "12:30 – 13:00",
      dock: "Doca 1",
      status: "finished",
    },
    {
      name: "P A INDUSTRIA E COMERCIO DE ALIMENTOS LTDA - EPP",
      hour: "12:30 – 13:00",
      dock: "Doca 2",
      status: "pending",
    },
  ];

  // Função para obter informações adicionais com base no nome e status
  const getAdditionalInfo = (name, status) => {
    switch (name) {
      case "EXPRESSO RENOVACAO":
        return status === "pending" ? { VN: 5, SKUs: 1 } : {};
      case "MENGUE EXPRESS EIRELI EPP":
        return status === "pending" ? { VN: 12, SKUs: 3 } : {};
      case "P A INDUSTRIA E COMERCIO DE ALIMENTOS LTDA - EPP":
        return status === "pending" ? { VN: 25, SKUs: 5 } : {};
      default:
        return {};
    }
  };
  

  return (
    <TableContainer
      component={Paper}
      style={{ left: 0, width: "50%", height: "50%" }}
    >
      <Table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {docks.map((dock, index) => (
              <th
                key={index}
                style={{
                  border: "1px solid black",
                  fontWeight: index !== 0 ? "bold" : "normal",
                  textAlign: "center",
                  width: index === 0 ? "1%" : "5%",
                  height: index === 0 ? "1%" : "auto",
                }}
              >
                {dock}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, rowIndex) => (
            <tr key={rowIndex}>
              <td
                style={{
                  border: "1px solid black",
                  fontWeight: "normal",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  width: "1%",
                }}
              >
                {hour}
              </td>
              {docks.slice(1).map((dock, colIndex) => {
                const person = peopleSchedule.find(
                  (p) => p.hour === hour && p.dock === dock
                );
                let cellStyle = {
                  border: "1px solid black",
                  fontWeight: dock === "Doca" ? "bold" : "normal",
                  textAlign: "center",
                  width: "5%",
                  fontSize: "16px",
                  position: "relative",
                };

                if (person) {
                  cellStyle.backgroundColor =
                    person.status === "finished" ? "#fdf8e5" : "#f5dede";
                  cellStyle.color = "black";
                } else {
                  cellStyle.backgroundColor = "#ddefda";
                  cellStyle.color = "white";
                }

                const additionalInfo = getAdditionalInfo(
                  person?.name,
                  person?.status
                );

                
                return (
                  <td
                    key={colIndex}
                    className={`cell-${String.fromCharCode(65 + colIndex)}${
                      rowIndex + 1
                    }`}
                    style={{
                      ...cellStyle,
                      position: 'relative', // Adicionado para permitir posicionamento absoluto dentro da célula
                    }}
                  >
                    {person && (
                      <>
                        <div>{person.name}</div>
                        {person.status === 'pending' && (
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'flex-end', // Adicionado para alinhar à direita
                              padding: '2px',
                              // position: 'absolute', // Removido para permitir que a linha fique na célula
                              bottom: '0',           // Adicionado para alinhar no canto inferior
                              right: '0',            // Adicionado para alinhar no canto direito
                            }}
                          >
                            <div
                              style={{
                                border: "1px solid black",
                                borderRadius: "5px",
                                background: "transparent",
                                fontSize: "10px",
                                textAlign: 'center',
                                marginRight: '2px',
                              }}
                            >
                              VN: {additionalInfo.VN}
                            </div>
                            <div
                              style={{
                                border: "1px solid black",
                                borderRadius: "5px",
                                background: "transparent",
                                fontSize: "10px",
                                textAlign: 'center',
                                marginRight: '2px',
                              }}
                            >
                              SKUs: {additionalInfo.SKUs}
                            </div>
                            <DepartureBoardIcon
                              style={{
                                fontSize: "16px",
                                color: "green",
                              }}
                            />
                          </div>
                        )}
                        {person.status === 'finished' && (
                          <div
                            style={{
                              height: '16px', // Adiciona espaço na última linha
                              display: 'flex', // Adiciona display flex para alinhar horizontalmente
                              alignItems: 'center', // Alinha verticalmente ao centro
                              justifyContent: 'flex-end', // Alinha à direita
                            }}
                          >
                            {/* Aqui você pode adicionar mais elementos se necessário */}
                            <DepartureBoardIcon
                              style={{
                                fontSize: '16px',
                                color: 'green',
                                marginLeft: '5px', // Adiciona um espaçamento à esquerda, se necessário
                              }}
                            />
                          </div>
                        )}
                        
                        
                      </>
                    )}
                  </td>
                );
                
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
