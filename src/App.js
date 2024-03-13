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
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import StoreIcon from "@mui/icons-material/Store";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SettingsIcon from "@mui/icons-material/Settings";
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
          <IconButton
            color="inherit"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.5)", // Borda cinza
              width: "40px", // Largura quadrada
              height: "40px", // Altura quadrada
              borderRadius: "5px", // Bordas arredondadas (opcional)
            }}
          >
            <FormatListBulletedOutlinedIcon
              style={{
                color: "rgba(0, 0, 0, 0.7)", // Torna o ícone mais cinza
              }}
            />
          </IconButton>

          <IconButton
            color="inherit"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)", // Fundo escuro
              width: "40px", // Largura quadrada
              height: "40px", // Altura quadrada
              borderRadius: "5px", // Bordas arredondadas (opcional)
            }}
          >
            <BallotOutlinedIcon
              style={{
                fontSize: "24px", // Tamanho do ícone
                color: "white", // Cor do ícone (branco)
                filter: "brightness(0.5)", // Diminui o brilho para torná-lo cinza
              }}
            />
          </IconButton>

          <IconButton color="inherit">
            <DateRangeIcon />
          </IconButton>
          <IconButton color="inherit">
            <StoreIcon />
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
