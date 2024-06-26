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
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
let newOrEdit = "";
let selectedId = "";
export default function data(dt, onAceptarClick, onAceptarDeleteClick) {
  return {
    columns: [
      { Header: "Acción 1", accessor: "accion_1", align: "center" },
      { Header: "Acción 2", accessor: "accion_2", align: "center" },
      { Header: "ID", accessor: "id", width: "35%", align: "left" },
      { Header: "Autor", accessor: "autor", width: "35%", align: "left" },
      { Header: "ADS", accessor: "ads", width: "35%", align: "left" },
      { Header: "INST", accessor: "inst", width: "35%", align: "left" },
      { Header: "CLASS", accessor: "class", width: "35%", align: "left" },
      { Header: "Género", accessor: "genero", width: "35%", align: "left" },
      { Header: "País", accessor: "pais", width: "35%", align: "left" },
    ],

    rows: dt.map((el) => ({
      accion_1: (
        <MDButton
          color={"info"}
          variant={"contained"}
          onClick={() => {
            selectedId = el._id;
            newOrEdit = "Editar";
            onAceptarClick();
          }}
        >
          <MDTypography component="a" href="#" variant="caption" color="white" fontWeight="medium">
            Editar
          </MDTypography>
        </MDButton>
      ),
      accion_2: (
        <MDButton
          color={"error"}
          variant={"contained"}
          onClick={() => {
            newOrEdit = "Eliminar";
            selectedId = el._id;
            onAceptarDeleteClick();
          }}
        >
          <MDTypography component="a" href="#" variant="caption" color="white" fontWeight="medium">
            Eliminar
          </MDTypography>
        </MDButton>
      ),
      id: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el._id}
        </MDTypography>
      ),
      autor: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el.Autor}
        </MDTypography>
      ),
      ads: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el["ADS"]}
        </MDTypography>
      ),
      inst: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el["INST"]}
        </MDTypography>
      ),
      class: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el["CLASS"]}
        </MDTypography>
      ),
      genero: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el["Género"]}
        </MDTypography>
      ),
      pais: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el["País"]}
        </MDTypography>
      ),
    })),
    newOrEdit: newOrEdit,
    selectedId: selectedId,
  };
}
