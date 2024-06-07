/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

//api
import { useRegisterMutation } from "../../../api/api.slice";

function Cover() {
  const [register] = useRegisterMutation();
  const [name, setName] = React.useState("");
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [masterP, setMasterP] = React.useState("");

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
    <CoverLayout image={bgImage}>
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
                  handleInputChange("name", e.target.value);
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
    </CoverLayout>
  );
}

export default Cover;
