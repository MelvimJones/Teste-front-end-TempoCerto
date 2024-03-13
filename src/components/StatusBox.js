// src/components/StatusBox.js
import React from 'react';
import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material';

const StatusBox = ({ label }) => {
  let numero = label === 'Total' || label === 'Pendentes' ? '7' : '0';

  return (
    <Box
      borderRadius={2}
      p={2}
      textAlign="left"
      position="relative"
      style={{
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
        paddingBottom: '1.2rem', // Ajustando o paddingBottom
        display: 'flex',
        flexDirection: 'column', // Ajustando para layout de coluna
        alignItems: 'flex-start', // Alinhando à esquerda
      }}
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ padding: 0, border: 'none' }}>
              {label}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ padding: 0, border: 'none' }}>
              <Box
                fontSize="1.2rem"
                color="black"
                fontWeight="bold"
                paddingLeft="0.1rem" // Ajustando o paddingLeft
              >
                {numero}
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default StatusBox;
