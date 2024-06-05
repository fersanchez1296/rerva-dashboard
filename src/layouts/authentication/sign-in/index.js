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
//react
import React from "react";

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
//api
import { useLoginMutation } from "api/api.slice";
//Store
import { useAuthStore } from "../../../zustand/authStore.ts";
// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Store } from "@mui/icons-material";

function Basic() {
  const [login, { isLoading, error }] = useLoginMutation();
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const setIsAuth = useAuthStore((state) => state.setisAuth);

  const handleChange = (input, value) => {
    input === "user" ? setUser(value) : setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ user, password });
      setToken(data.token);
      setIsAuth(true);
      navigate("/dashboard");
    } catch (err) {
      console.error("Failed to login", err);
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Usuario"
                fullWidth
                onChange={(e) => handleChange("user", e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
