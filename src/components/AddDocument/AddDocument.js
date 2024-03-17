// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDSelect from "components/MDSelect";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import SaveIcon from "@mui/icons-material/Save";
import { useUpdateSolicitudMutation } from "api/api.slice";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AddDocument = ({ openBool, handleAceptarCerrar, objeto }) => {
  const [updateSolicitud] = useUpdateSolicitudMutation();
  const [notas, setNotas] = React.useState("Sin Notas");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeNotas = (value) => {
    setNotas(value);
  };
  const handleEnviar = () => {
    const solicitud = JSON.parse(JSON.stringify(objeto));
    solicitud.EndedAt = new Date();
    solicitud.DocumentStatus = "Finalizada";
    solicitud.Notas = notas;
    (async () => {
      const result = await updateSolicitud({ data: solicitud, id: solicitud._id });
      handleAceptarCerrar();
    })();
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
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid xs={12} md={6}>
            <Card>
              <MDBox
                variant="gradient"
                bgColor="primary"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Datos del Autor (es)
                </MDTypography>
              </MDBox>
              <MDBox display="flex" alignItems="center" justifyContent="center" mt={1}>
                <Checkbox />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  Individual
                </MDTypography>
                <Checkbox />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  Co-Autoria
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput type="text" label="Nombre(s)" fullWidth />
                  </MDBox>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      sx={{ minHeight: "3rem" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
          <Grid xs={12} md={6}>
            <Card>
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Área de estudio
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput type="text" label="Área" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Campo" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Disciplina" fullWidth />
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
          <Grid xs={12} md={12} sx={{ mt: 3 }}>
            <Card>
              <MDBox
                variant="gradient"
                bgColor="warning"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Datos del documento
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput type="text" label="Título" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Año de publicación" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="País de publicación" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Municipio de Estudio" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Tipo de documento" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Clasificación" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Revista / Libro" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Editorial" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Tipo de consulta" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Link de Acceso" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="DOI" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Número de páginas" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Idioma" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Disponibilidad" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Palabras Clave" fullWidth />
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
};

AddDocument.propTypes = {
  openBool: PropTypes.bool.isRequired,
  handleAceptarCerrar: PropTypes.func,
  objeto: PropTypes.object,
};
