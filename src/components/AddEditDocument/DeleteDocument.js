import React from "react";
import { Spiner } from "components/Spiner/Spiner";
import { useGetSolicitudesQuery } from "api/api.slice";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
//proptypes
import PropTypes from "prop-types";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function DeleteDocument({ openBool, handleAceptarCerrar, deleteById }) {
  const { data: dt, isLoading } = useGetSolicitudesQuery();

  if (isLoading) {
    return <Spiner />;
  }

  if (!dt) {
    return <div>No data available.</div>;
  }

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleAceptarCerrar}
        aria-labelledby="customized-dialog-title"
        open={openBool}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          ¿Eliminar Documento?
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleAceptarCerrar}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            La eliminación de este documento en la base de datos es una operación delicada que
            requiere extrema precaución.
          </Typography>
          <Typography gutterBottom>
            Cada eliminación representa un potencial riesgo de pérdida de datos irreparables y
            desajustes en la integridad del sistema. Antes de proceder, es fundamental verificar
            meticulosamente la identidad del documento a eliminar, evitando así acciones
            irreversibles.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAceptarCerrar}>
            Eliminar definitivamente
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default DeleteDocument;

DeleteDocument.propTypes = {
  openBool: PropTypes.bool.isRequired,
  handleAceptarCerrar: PropTypes.func,
  deleteById: PropTypes.object,
};
