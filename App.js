// src/App.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Container,
  Link,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StorageIcon from "@mui/icons-material/Storage";
import EventIcon from "@mui/icons-material/Event";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

import AgendaGrid from "./components/AgendaGrid";
import HorariosXDocas from "./components/HorariosXDocas";
import StatusBox from "./components/StatusBox";
import ScheduleTable from "./components/ScheduleTable";

const statusLabels = [
  "Total",
  "Pendentes",
  "Veículos Presentes",
  "Em Descarga",
  "Concluídas",
  "Não Realizadas",
];

function App() {
  return (
    <Container
      style={{
        padding: 0,
        margin: 0,
        width: "100%",
        maxWidth: "100vw",
        backgroundColor: "rgb(237, 235, 235)",
      }}
    >
      <AppBar
        position="static"
        style={{
          margin: 0,
          borderRadius: 0,
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <Typography
                variant="h6"
                style={{ fontSize: "1rem", marginRight: "8px" }}
              >
                Painel de Recebimento
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">/</Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                style={{ fontSize: "1rem", margin: "0 8px" }}
              >
                Local: Centro de Distribuição
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">/</Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                style={{ fontSize: "1rem", marginLeft: "8px" }}
              >
                Dia: 24/06/2022
              </Typography>
            </Grid>
          </Grid>
          <IconButton color="inherit">
            <CalendarTodayIcon />
          </IconButton>
          <IconButton color="inherit">
            <StorageIcon />
          </IconButton>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit">
            <EventIcon />
          </IconButton>
          <Link
            href="#"
            underline="none"
            style={{ display: "flex", alignItems: "center", color: "black" }}
          >
            <IconButton color="primary">
              <SettingsIcon />
            </IconButton>
            <Typography
              variant="subtitle1"
              style={{ fontSize: "1rem", color: "blue" }}
            >
              CONFIGURAÇÕES
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box p={2}>
        <Grid container spacing={2}>
          {statusLabels.map((label, index) => (
            <Grid item xs={2} key={index}>
              <StatusBox label={label} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box p={2}>
        <ScheduleTable />
      </Box>
    </Container>
  );
}

export default App;
