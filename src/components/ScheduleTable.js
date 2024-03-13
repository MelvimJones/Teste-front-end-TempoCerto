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
    { name: 'BRF S.A', hour: "08:30 – 09:00", dock: "Doca 1", status: 'finished'  },
    { name: 'CEREALISTA GRAO EM GRAO LTDA - EPP', hour: "08:30 – 09:00", dock: "Doca 2", status: 'finished'  },
    { name: 'BLUEPACK COMERCIO DE EMBALAGENS LTDA', hour: "10:00 – 10:30", dock: "Doca 1", status: 'finished'  },
    { name: 'EXPRESSO RENOVACAO', hour: "10:00 – 10:30", dock: "Doca 2", status: 'pending'  },
    { name: 'MENGUE EXPRESS EIRELI EPP', hour: "10:00 – 10:30", dock: "Doca 3" , status: 'pending' },
    { name: 'MENGUE EXPRESS EIRELI EPP', hour: "10:30 – 11:00", dock: "Doca 3" , status: 'pending' },
    { name: 'MENGUE EXPRESS EIRELI EPP', hour: "11:00 – 11:30", dock: "Doca 3" , status: 'pending' },
    { name: 'TAF ATACADO', hour: "12:00 – 12:30", dock: "Doca 1" , status: 'finished' },
    { name: 'TAF ATACADO', hour: "12:30 – 13:00", dock: "Doca 1" , status: 'finished' },
    { name: 'P A INDUSTRIA E COMERCIO DE ALIMENTOS LTDA - EPP', hour: "12:30 – 13:00", dock: "Doca 2" , status: 'pending' },
  ];

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
                };

                if (person) {
                  cellStyle.backgroundColor =
                    person.status === "finished" ? "#fdf8e5" : "#f5dede";
                  cellStyle.color = "black";
                } else {
                  cellStyle.backgroundColor = "#ddefda";
                  cellStyle.color = "white";
                }

                return (
                  <td
                    key={colIndex}
                    className={`cell-${String.fromCharCode(65 + colIndex)}${
                      rowIndex + 1
                    }`}
                    style={cellStyle}
                  >
                    {person ? person.name : ''}
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
