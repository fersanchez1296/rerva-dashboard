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
import AutoresCard from "./autoresCard/Index";
import AreasCard from "./areasCard/Index";
import DocumentosCard from "./documentosCard/Index";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddEditDocument = ({ openBool, handleAceptarCerrar, objeto }) => {
  console.log(objeto);
  const [addDocument, setAddDocument] = React.useState(newDocumentFillsInterface);
  const { newDocument } = newDocumentStore();
  const [updateSolicitud] = useUpdateSolicitudMutation();

  useEffect(() => {
    newDocument.setField("Autores", objeto.Autores);
    newDocument.setField("Título", objeto["Título"]);
    newDocument.setField("Link", objeto["Link de acceso"]);
    newDocument.setField("Doi", objeto.DOI);
    newDocument.setField("Área", objeto["Área"]);
    newDocument.setField("Campo", objeto.Campo);
    newDocument.setField("Disciplina", objeto.Disciplina);
    newDocument.setField("Año", objeto["Año"]);
    newDocument.setField("País de la Publicación", objeto["País de la Publicación"]);
    newDocument.setField("Municipios de estudio", objeto["Municipios de estudio"]);
    newDocument.setField("Tipo de documento", objeto["Tipo de documento"]);
    newDocument.setField("Tesis/Institución", objeto["Tesis/ Institución"]);
    newDocument.setField("Autoría", objeto["Tipo de autoría"]);
    newDocument.setField("Clasificación", objeto["Clasificación"]);
    newDocument.setField("Nombre de la revista/libro", objeto["Nombre de la revista/libro"]);
    newDocument.setField("Libros/Editorial", objeto["Libros/Editorial"]);
    newDocument.setField("Tipo de consulta", objeto["Tipo de consulta"]);
    newDocument.setField("Número de páginas", objeto["Número de páginas"]);
    newDocument.setField("Idioma", objeto["Idioma"]);
    newDocument.setField("Disponibilidad", objeto["Disponibilidad"]);
    newDocument.setField("Palabras Clave", objeto["Palabras Clave"]);
    newDocument.setField(
      "Compilador/Editor/Coordinador/Libro",
      objeto["Compilador/ Editor/ Coordinador/ Libro"]
    );
  }, [openBool]);

  useEffect(() => {
    setAddDocument({
      ...addDocument,
      ["Tipo de autoría"]: newDocument["Tipo de Autoría"],
      Autores: newDocument.Autores,
      ["Área"]: newDocument["Área"],
      Campo: newDocument.Campo,
      Disciplina: newDocument.Disciplina,
      ["Título"]: newDocument["Título"],
      ["Año"]: newDocument["Año"],
      ["País de la Publicación"]: newDocument["País de la Publicación"],
      ["Municipios de estudio"]: newDocument["Municipios de estudio"],
      ["Tipo de documento"]: newDocument["Tipo de documento"],
      ["Clasificación"]: newDocument["Clasificación"],
      ["Nombre de la revista/libro"]: newDocument["Nombre de la revista/libro"],
      ["Libros/Editorial"]: newDocument["Libros/Editorial"],
      ["Tipo de consulta"]: newDocument["Tipo de consulta"],
      ["Link de acceso"]: newDocument.Link,
      DOI: newDocument.Doi,
      ["Número de páginas"]: newDocument["Número de páginas"],
      Idioma: newDocument.Idioma,
      Disponibilidad: newDocument.Disponibilidad,
      ["Palabras Clave"]: newDocument["Palabras Clave"],
      ["Tesis/Institución"]: newDocument["Tesis/Institución"],
      ["Compilador/Editor/Coordinador/Libro"]: newDocument["Compilador/Editor/Coordinador/Libro"],
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
    console.log(addDocument);
    // const result = await updateSolicitud({ data: addDocument, id: solicitud.Id });
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
              Guardar
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem sx={{ mt: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <MDAlert color="warning">{alertContent("warning")}</MDAlert>
          </ListItem>
          <Grid container spacing={2} sx={{ mt: 5 }}>
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

export default React.memo(AddEditDocument);

AddEditDocument.propTypes = {
  openBool: PropTypes.bool.isRequired,
  handleAceptarCerrar: PropTypes.func,
  objeto: PropTypes.object,
};
