import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
//API
import { useDeleteUserMutation } from "api/api.slice";
//store
import { useUserStore, useDialogStore } from "layouts/users/context/index.ts";
//store snackbar
import { useSnackbarStore } from "../../../../zustand/snackbarStore.ts";

function Delete() {
  const isAlertOpen = useDialogStore((state) => state.isAlertOpen);
  const closeAlert = useDialogStore((state) => state.closeAlert);
  const selectedId = useUserStore((state) => state.selectedId);
  const masterPassword = useUserStore((state) => state.masterPassword);
  const setMasterPassword = useUserStore((state) => state.setMasterPassword);
  const resetValues = useUserStore((state) => state.resetValues);
  const { openSuccessSB, openErrorSB } = useSnackbarStore();
  const [deleteUser] = useDeleteUserMutation();

  const dropUser = async (e) => {
    e.preventDefault();
    try {
      const result = await deleteUser({ masterPassword, selectedId });
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
        <DialogTitle>¿Eliminar Usuario?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            La eliminación de este usuario en la base de datos es una operación delicada que
            requiere extrema precaución.Cada eliminación representa un potencial riesgo de pérdida
            de datos irreparables y desajustes en la integridad del sistema. Antes de proceder, es
            fundamental verificar meticulosamente la identidad del usuario a eliminar, evitando así
            acciones irreperables.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="password"
            label="Mater-Password"
            type="password"
            value={masterPassword}
            onChange={(e) => setMasterPassword(e.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeAlert()}>Cancelar</Button>
          <Button type="submit" onClick={(e) => dropUser(e)}>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Delete;
