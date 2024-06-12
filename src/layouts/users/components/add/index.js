import React from "react";
//mui library component
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
//api
import { usePostUserMutation } from "../../../../api/api.slice";
//store
import { useDialogStore, useUserStore } from "layouts/users/context/index.ts";
//store snackbar
import { useSnackbarStore } from "../../../../zustand/snackbarStore.ts";
//Layout
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Add = () => {
  //API hook
  const [postUser] = usePostUserMutation();
  //store variables
  const isWindowOpen = useDialogStore((state) => state.isWindowOpen);
  const closeWindow = useDialogStore((state) => state.closeWindow);
  const name = useUserStore((state) => state.name);
  const setName = useUserStore((state) => state.setName);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const password = useUserStore((state) => state.password);
  const setPassword = useUserStore((state) => state.setPassword);
  const masterPassword = useUserStore((state) => state.masterPassword);
  const setMasterPassword = useUserStore((state) => state.setMasterPassword);
  const resetValues = useUserStore((state) => state.resetValues);
  //local states
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");
  //snackbar
  const { openSuccessSB, openErrorSB } = useSnackbarStore();

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const result = await postUser({ name, user, password, masterPassword });
      if (result.data && result.data.status === 200) {
        openSuccessSB(result.data.message, `Status: ${result.data.status}`);
      } else {
        openErrorSB(result.error.data.message, `Status: ${result.error.data.status}`);
      }
    } catch (error) {
      openErrorSB(error, `Status: 500`);
      console.log(error);
    } finally {
      resetValues();
      closeWindow();
    }
  };

  return (
    <DashboardLayout>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
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
        <Container
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Card>
            <MDBox
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="success"
              mx={2}
              mt={-3}
              p={3}
              mb={1}
              textAlign="center"
            >
              <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                Registrar nuevo usuario
              </MDTypography>
              <MDTypography display="block" variant="button" color="white" my={1}>
                Ingresa el nombre completo, email y contraseña para registrar
              </MDTypography>
            </MDBox>
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput
                    type="text"
                    label="Nombre completo"
                    variant="standard"
                    value={name}
                    required
                    fullWidth
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="email"
                    label="Usuario"
                    variant="standard"
                    value={user}
                    required
                    fullWidth
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="password"
                    label="Password"
                    variant="standard"
                    value={password}
                    required
                    fullWidth
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="password"
                    label="Master-Password"
                    variant="standard"
                    value={masterPassword}
                    required
                    fullWidth
                    onChange={(e) => {
                      setMasterPassword(e.target.value);
                    }}
                  />
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton
                    variant="gradient"
                    color="info"
                    onClick={(e) => createUser(e)}
                    fullWidth
                  >
                    Registrar
                  </MDButton>
                </MDBox>
              </MDBox>
            </MDBox>
          </Card>
        </Container>
      </Dialog>
    </DashboardLayout>
  );
};

export default React.memo(Add);
