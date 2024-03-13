// src/components/AgendaGrid.js
import React from 'react';
import { Grid, Paper } from '@mui/material';

const AgendaGrid = () => {
  return (
    <Grid container spacing={2}>
      {/* Implemente a lógica para listar as agendas aqui */}
      <Grid item xs={12}>
        <Paper>
          {"agenda"}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AgendaGrid;
