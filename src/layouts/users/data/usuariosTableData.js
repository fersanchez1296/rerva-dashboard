/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
// Material Dashboard 2 React components
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
export default function data(dt, openWindow, openAlert, setSelectedId, setName, setUser) {
  return {
    columns: [
      { Header: "Acción 2", accessor: "accion_2", align: "center" },
      { Header: "Acción 1", accessor: "accion_1", align: "center" },
      { Header: "ID", accessor: "id", width: "35%", align: "left" },
      { Header: "Nombre", accessor: "nombre", width: "35%", align: "left" },
      { Header: "usuario", accessor: "usuario", width: "35%", align: "center" },
      { Header: "password", accessor: "password", width: "35%", align: "left" },
    ],

    rows: dt.map((el) => ({
      accion_1: (
        <MDButton
          color={"error"}
          variant={"contained"}
          onClick={() => {
            setSelectedId(el._id);
            openAlert();
          }}
        >
          <MDTypography component="a" href="#" variant="caption" color="white" fontWeight="medium">
            Eliminar
          </MDTypography>
        </MDButton>
      ),
      accion_2: (
        <MDButton
          color={"info"}
          variant={"contained"}
          onClick={() => {
            setSelectedId(el._id);
            setName(el.nombre);
            setUser(el.user);
            openWindow();
          }}
        >
          <MDTypography component="a" href="#" variant="caption" color="white" fontWeight="medium">
            Editar
          </MDTypography>
        </MDButton>
      ),
      id: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el._id}
        </MDTypography>
      ),
      nombre: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el["nombre"]}
        </MDTypography>
      ),
      usuario: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el["user"]}
        </MDTypography>
      ),
      password: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el["password"]}
        </MDTypography>
      ),
    })),
  };
}
