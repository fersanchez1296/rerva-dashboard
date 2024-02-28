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
import { useUpdateSolicitudMutation } from "api/api.slice";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ScreenDialog = ({ openBool, handleAceptarCerrar, objeto }) => {
  const [updateSolicitud, { data: updateResult }] = useUpdateSolicitudMutation();

  const handleEnviar = () => {
    const solicitud = JSON.parse(JSON.stringify(objeto));
    solicitud.EndedAt = new Date();
    solicitud.DocumentStatus = "Finalizada";
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
            <Button autoFocus color="inherit" onClick={handleEnviar}>
              Guardar y enviar
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Destinatario" secondary={objeto.Email} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Asunto" secondary={`Solicitud ${objeto.ApprovalStatus}`} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="ID Solicitud:" secondary={objeto._id} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Notas:" />
          </ListItemButton>
          <TextField
            id="outlined-multiline-static"
            label="Escribe el mensaje"
            multiline
            rows={12}
            defaultValue="Notas al Autor"
            sx={{ width: "100%" }}
          />
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
