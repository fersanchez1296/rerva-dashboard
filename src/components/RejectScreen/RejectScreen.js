import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import { useUpdateSolicitudMutation } from "api/api.slice";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const RejectScreen = ({ openBool, handleAceptarCerrar, objeto }) => {
  const [updateSolicitud] = useUpdateSolicitudMutation();
  const [notas, setNotas] = React.useState("Sin Notas");
  const [age, setAge] = React.useState("");

  const handleChangeNotas = (value) => {
    setNotas(value);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
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
              Guardar y Enviar
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid xs={12} md={12}>
              <Card>
                <MDBox
                  variant="gradient"
                  bgColor="success"
                  borderRadius="lg"
                  coloredShadow="info"
                  mx={2}
                  mt={-3}
                  p={2}
                  mb={1}
                  textAlign="center"
                >
                  <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                    Status solicitud
                  </MDTypography>
                </MDBox>
                <MDBox pt={4} pb={6} px={3}>
                  <MDBox component="form" role="form">
                    <MDBox mb={2}>
                      <MDInput type="text" value={objeto.Email} disabled fullWidth />
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput type="text" value={objeto.ApprovalStatus} disabled fullWidth />
                    </MDBox>
                    <MDBox mb={2}>
                      <MDInput type="text" value={objeto._id} disabled fullWidth />
                    </MDBox>
                    <MDBox mb={2}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Escribe el mensaje"
                        multiline
                        rows={12}
                        value={notas}
                        onChange={(e) => handleChangeNotas(e.target.value.toUpperCase())}
                        defaultValue={notas}
                        sx={{ width: "100%" }}
                      />
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
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
