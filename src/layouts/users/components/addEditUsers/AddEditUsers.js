import React, { useEffect, useState } from "react";
//proptypes
import PropTypes from "prop-types";
//mui library component
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
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
import MDAlert from "components/MDAlert";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
//interface
import { userFillsInterface } from "assets/interfaces/newUserFills.interface.ts";
//api
import { useRegisterMutation } from "../../../../api/api.slice";
//store
import { newUserStore } from "../../../../zustand/newUser.store.ts";
//Layout
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const AddEditUsers = ({ openBool, handleAceptarCerrar, objeto }) => {
  console.log(objeto);
  const [addUser, setAddUser] = React.useState(userFillsInterface);
  const { userStore } = newUserStore();
  const [register] = useRegisterMutation();
  const [name, setName] = React.useState("");
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [masterP, setMasterP] = React.useState("");
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xl");

  useEffect(() => {
    userStore.setName(objeto.nombre);
    userStore.setUser(objeto.user);
  }, [openBool]);

  useEffect(() => {
    setAddUser({
      ...addUser,
      nombre: userStore.nombre,
      user: userStore.user,
    });
  }, [userStore]);

  const handleInputChange = (input, value) => {
    if (input === "name") {
      setName(value);
    } else if (input === "user") {
      setUser(value);
    } else if (input === "password") {
      setPassword(value);
    } else {
      setMasterP(value);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await register({ name, user, password, masterP });
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setUser("");
      setPassword("");
      setMasterP("");
    }
  };

  return (
    <DashboardLayout>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
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
                    value={userStore.name}
                    required
                    fullWidth
                    onChange={(e) => {
                      handleInputChange("name", e.target.value);
                    }}
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="email"
                    label="Usuario"
                    variant="standard"
                    value={userStore.user}
                    required
                    fullWidth
                    onChange={(e) => {
                      handleInputChange("user", e.target.value);
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
                      handleInputChange("password", e.target.value);
                    }}
                  />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput
                    type="password"
                    label="Master-Password"
                    variant="standard"
                    value={masterP}
                    required
                    fullWidth
                    onChange={(e) => {
                      handleInputChange("masterP", e.target.value);
                    }}
                  />
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton variant="gradient" color="info" fullWidth onClick={handleRegister}>
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

export default React.memo(AddEditUsers);

AddEditUsers.propTypes = {
  openBool: PropTypes.bool.isRequired,
  handleAceptarCerrar: PropTypes.func,
  objeto: PropTypes.object,
};
