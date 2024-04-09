import React, { useEffect, useState } from "react";
//proptypes
import PropTypes from "prop-types";
//store
import { newDocumentStore } from "../../zustand/newDocumentStore.ts";
//mui library component
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import WarningIcon from "@mui/icons-material/Warning";
import Grid from "@mui/material/Unstable_Grid2";
import SaveIcon from "@mui/icons-material/Save";
// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
//api hook
import { useUpdateSolicitudMutation } from "api/api.slice";
//interface newDocument
import { newDocumentFillsInterface } from "assets/interfaces/newDocumentFills.interface.ts";
//card components
import StatusCard from "./statusCard/Index";
import AutoresCard from "./autoresCard/Index";
import AreasCard from "./areasCard/Index";
import DocumentosCard from "./documentosCard/Index";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ScreenDialog = ({ openBool, handleAceptarCerrar, objeto }) => {
  const [addDocument, setAddDocument] = React.useState(newDocumentFillsInterface);
  const { statusCard, newDocument } = newDocumentStore();
  const [updateSolicitud] = useUpdateSolicitudMutation();

  useEffect(() => {
    statusCard.setDestinatario(objeto.Email);
    statusCard.setAsunto(objeto.ApprovalStatus);
    statusCard.setIdSolicitud(objeto._id);
    newDocument.setAutores(objeto.Autor);
    newDocument.setTitulo(objeto["Título"]);
    newDocument.setLink(objeto.Link);
    newDocument.setDoi(objeto.DOI);
  }, [openBool]);

  useEffect(() => {
    setAddDocument({
      ...addDocument,
      ["Tipo de autoría"]: newDocument["Tipo de Autoría"],
    });
  }, [newDocument]);

  const alertContent = () => (
    <MDTypography variant="body3" color="white">
      <WarningIcon />
      Recuerda verificar que el documento que estás por agregar a la base de datos no exista con
      anterioridad.
    </MDTypography>
  );

  const handleEnviar = async () => {
    const solicitud = {
      Destinatario: statusCard.Destinatario,
      Asunto: statusCard.Asunto,
      Id: statusCard.idSolicitud,
    };

    console.log(solicitud, addDocument);
    // const result = await updateSolicitud({ data: solicitud, id: solicitud._id });
    // handleAceptarCerrar();
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
          <ListItem sx={{ mt: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <MDAlert color="warning">{alertContent("warning")}</MDAlert>
          </ListItem>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid xs={12} md={12}>
              <StatusCard />
            </Grid>
            <Grid xs={12} md={6}>
              <AutoresCard />
            </Grid>
            <Grid xs={12} md={6}>
              <AreasCard />
            </Grid>
            <Grid xs={12} md={12} sx={{ mt: 3 }}>
              <DocumentosCard />
            </Grid>
          </Grid>
        </List>
      </Dialog>
    </React.Fragment>
  );
};

ScreenDialog.propTypes = {
  openBool: PropTypes.bool.isRequired,
  handleAceptarCerrar: PropTypes.func,
  objeto: PropTypes.object,
};
