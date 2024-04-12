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
import MDBadge from "components/MDBadge";

export default function data(dt, onAceptarClick, setDocumentNote) {
  const handleAceptarClick = (value) => {
    setDocumentNote(value);
    onAceptarClick();
  };
  const renderButtonIfNotas = (value) => {
    if (value === "Sin Notas") {
      return (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Sin Notas
        </MDTypography>
      );
    } else {
      return (
        <MDButton
          color={"info"}
          variant={"contained"}
          onClick={() => {
            handleAceptarClick(value);
          }}
        >
          <MDTypography component="a" variant="caption" color="white" fontWeight="medium">
            Ver Notas
          </MDTypography>
        </MDButton>
      );
    }
  };
  return {
    columns: [
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Solicitud creada", accessor: "solicitud_creada", align: "center" },
      { Header: "Solicitud terminada", accessor: "solicitud_terminada", align: "center" },
      { Header: "ID", accessor: "id", width: "35%", align: "left" },
      { Header: "Autor", accessor: "autor", width: "35%", align: "left" },
      { Header: "Título documento", accessor: "titulo_documento", align: "left" },
      { Header: "Email", accessor: "email", align: "center" },
      { Header: "Link", accessor: "link", align: "center" },
      { Header: "Notas", accessor: "notas", align: "center" },
    ],

    rows: dt.map((el) => ({
      status: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent={el.ApprovalStatus}
            color={el.ApprovalStatus === "Solicitud Aprovada" ? "success" : "error"}
            variant="gradient"
            size="sm"
          />
        </MDBox>
      ),
      solicitud_creada: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el.CreatedAt}
        </MDTypography>
      ),
      solicitud_terminada: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el.EndedAt}
        </MDTypography>
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
      titulo_documento: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el["Título"]}
        </MDTypography>
      ),
      email: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {el.Email}
        </MDTypography>
      ),
      link: (
        <MDTypography
          component="a"
          href={el.Link}
          variant="caption"
          color="info"
          fontWeight="medium"
        >
          {el.Link}
        </MDTypography>
      ),
      notas: renderButtonIfNotas(el.Notas),
    })),
  };
}
