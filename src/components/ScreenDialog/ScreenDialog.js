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
  let mensajeAceptado = `Estimado ${
    objeto.Autor ? objeto.Autor.toUpperCase() : objeto.Autor
  } nos complace informarle que tras una exaustiva revición
de su informacion, el documento titulado " ${
    objeto["Título"] ? objeto["Título"].toUpperCase() : objeto["Título"]
  } ", escrito por ${objeto.Autor ? objeto.Autor.toUpperCase() : objeto.Autor} ha sido ACEPTADO y 
partir de este momento forma parte de nuestro catalago.
¡Gracias por contribuir con nosotros!
Atentamente: El equipo de RERVA- CUValles`;

  let mensajeRechazado = `Estimado ${
    objeto.Autor ? objeto.Autor.toUpperCase() : objeto.Autor
  } nos damos a la lamentable tarea informarle que tras una exaustiva revición
de su informacion, el documento titulado ${
    objeto["Título"] ? objeto["Título"].toUpperCase() : objeto["Título"]
  }, escrito por ${objeto.Autor ? objeto.Autor.toUpperCase() : objeto.Autor} ha sido RECHAZADO.
¡Esperemos que tras corregir los puntos expuestos,muy pronto tu trabajo se encuentre en nuestra base de datos!
Atentamente: El equipo de RERVA- CUValles`;

  const mensaje = objeto.ApprovalStatus === "Aprovada" ? mensajeAceptado : mensajeRechazado;

  const handleEnviar = () => {
    const solicitud = JSON.parse(JSON.stringify(objeto));
    solicitud.EndedAt = new Date();
    solicitud.DocumentStatus = "Finalizada";
    (async () => {
      const result = await updateSolicitud({ data: solicitud, id: solicitud._id });
      console.log(result);
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
            <ListItemText primary="Mensaje:" />
          </ListItemButton>
          <TextField
            id="outlined-multiline-static"
            label="Escribe el mensaje"
            multiline
            rows={12}
            defaultValue={objeto.ApprovalStatus === "Aprovada" ? mensajeAceptado : mensajeRechazado}
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
