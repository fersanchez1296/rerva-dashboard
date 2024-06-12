import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
//API
import { useDeleteSolicitudMutation } from "api/api.slice";
//store
import { useSolicitudStore, useDialogStore } from "layouts/solicitudes/context/index.ts";
//store snackbar
import { useSnackbarStore } from "../../../../zustand/snackbarStore.ts";

function Delete() {
  const isAlertOpen = useDialogStore((state) => state.isAlertOpen);
  const closeAlert = useDialogStore((state) => state.closeAlert);
  const id = useSolicitudStore((state) => state.id);
  const resetValues = useSolicitudStore((state) => state.resetValues);
  const { openSuccessSB, openErrorSB } = useSnackbarStore();
  const [deleteSolicitud] = useDeleteSolicitudMutation();

  const dropSolicitud = async (e) => {
    e.preventDefault();
    try {
      const result = await deleteSolicitud({ id });
      if (result.data && result.data.status === 200) {
        openSuccessSB(result.data.message, `Status: ${result.data.status}`);
      } else {
        openErrorSB(result.error.data.message, `Status: ${result.error.data.status}`);
      }
    } catch (error) {
      openErrorSB(error, `Status: 500`);
      console.log(error);
    } finally {
      closeAlert();
      resetValues();
    }
  };

  return (
    <React.Fragment>
      <Dialog open={isAlertOpen} onClose={() => closeAlert()}>
        <DialogTitle>¿Eliminar Solicitud?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            La eliminación de esta solicitud en la base de datos es una operación delicada que
            requiere extrema precaución.Cada eliminación representa un potencial riesgo de pérdida
            de datos irreparables y desajustes en la integridad del sistema. Antes de proceder, es
            fundamental verificar meticulosamente la identidad de la solicitud a eliminar, evitando
            así acciones irreperables.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeAlert()}>Cancelar</Button>
          <Button type="submit" onClick={(e) => dropSolicitud(e)}>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Delete;
