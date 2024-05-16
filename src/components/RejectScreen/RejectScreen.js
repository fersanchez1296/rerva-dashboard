import React, { useEffect, useState } from "react";
//store
import { newDocumentStore } from "../../zustand/newDocumentStore.ts";
//mui library
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import SaveIcon from "@mui/icons-material/Save";
import Grid from "@mui/material/Unstable_Grid2";
//api
import { useUpdateSolicitudMutation } from "api/api.slice";
//card components
import StatusCard from "./statusCard/Index";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const RejectScreen = ({ openBool, handleAceptarCerrar, objeto }) => {
  const [updateSolicitud] = useUpdateSolicitudMutation();
  const { statusCard } = newDocumentStore();

  useEffect(() => {
    statusCard.setDestinatario(objeto.Email);
    statusCard.setAsunto(objeto.ApprovalStatus);
    statusCard.setIdSolicitud(objeto._id);
    statusCard.setAutor(objeto.Autor);
    statusCard.setTitulo(objeto["Título"]);
  }, [
    openBool === true,
    objeto.Email,
    objeto.ApprovalStatus,
    objeto._id,
    objeto.Autor,
    objeto["Título"],
  ]);

  const handleEnviar = async () => {
    const solicitud = {
      Destinatario: statusCard.Destinatario,
      Asunto: statusCard.Asunto,
      Id: statusCard.idSolicitud,
      Notas: statusCard.Notas,
      Autor: statusCard.Autor,
      Titulo: statusCard.Titulo,
    };

    const result = await updateSolicitud({ data: { solicitud }, id: solicitud.Id });
    if (result.data && typeof result.data.status === "number" && result.data.status === 200) {
      statusCard.resetValues();
      handleAceptarCerrar();
    }
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={openBool}
        onClose={handleAceptarCerrar}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleAceptarCerrar}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Cerrar
            </Typography>
            <Button
              variant="contained"
              color="success"
              endIcon={<SaveIcon />}
              onClick={handleEnviar}
            >
              Guardar y Enviar
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid xs={12} md={12}>
              <StatusCard />
            </Grid>
          </Grid>
        </List>
      </Dialog>
    </React.Fragment>
  );
};

RejectScreen.propTypes = {
  openBool: PropTypes.bool.isRequired,
  handleAceptarCerrar: PropTypes.func,
  objeto: PropTypes.object,
};
