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
import TextField from "@mui/material/TextField";
//store
import { useDialogStore, useHistorialStore } from "../../context/index.ts";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Notas = () => {
  const isWindowOpen = useDialogStore((state) => state.isWindowOpen);
  const closeWindow = useDialogStore((state) => state.closeWindow);
  const notas = useHistorialStore((state) => state.notas);
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={isWindowOpen}
        onClose={() => closeWindow()}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => closeWindow()}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Cerrar
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <TextField
            id="outlined-multiline-static"
            label="Notas"
            disabled={true}
            multiline
            rows={12}
            value={notas}
            sx={{ width: "100%" }}
          />
        </List>
      </Dialog>
    </React.Fragment>
  );
};

export default React.memo(Notas);
