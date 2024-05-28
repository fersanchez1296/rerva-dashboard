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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// Images
let statusSolicitud = {};
export default function data(
  dt,
  onAceptarClick,
  handleAceptarClickRechazar,
  handleAceptardeleteClick
) {
  return {
    columns: [
      { Header: "Eliminar", accessor: "delete", width: "35%", align: "left" },
      { Header: "ID", accessor: "id", width: "35%", align: "left" },
      { Header: "Autor", accessor: "autor", width: "35%", align: "left" },
      { Header: "Título documento", accessor: "titulo_documento", align: "left" },
      { Header: "Email", accessor: "email", align: "center" },
      { Header: "Link", accessor: "link", align: "center" },
      { Header: "DOI", accessor: "doi", align: "center" },
      { Header: "Acción 1", accessor: "accion_1", align: "center" },
      { Header: "Acción 2", accessor: "accion_2", align: "center" },
    ],

    rows: dt.map((el) => ({
      delete: (
        <MDButton
          color={"error"}
          variant={"contained"}
          onClick={() => {
            statusSolicitud.id = el._id;
            handleAceptardeleteClick();
          }}
        >
          <MDTypography component="a" href="#" variant="caption" color="white" fontWeight="medium">
            <DeleteForeverIcon />
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
      doi: (
        <MDTypography component="div" href={el.DOI} variant="caption" fontWeight="medium">
          {el.DOI}
        </MDTypography>
      ),
      accion_1: (
        <MDButton
          color={"success"}
          variant={"contained"}
          onClick={() => {
            statusSolicitud.id = el._id;
            statusSolicitud.status = "Solicitud Aprovada";
            onAceptarClick();
          }}
        >
          <MDTypography component="a" href="#" variant="caption" color="white" fontWeight="medium">
            Aceptar
          </MDTypography>
        </MDButton>
      ),
      accion_2: (
        <MDButton
          color={"error"}
          variant={"contained"}
          onClick={() => {
            statusSolicitud.id = el._id;
            statusSolicitud.status = "Solicitud Rechazada";
            handleAceptarClickRechazar();
          }}
        >
          <MDTypography component="a" href="#" variant="caption" color="white" fontWeight="medium">
            Rechazar
          </MDTypography>
        </MDButton>
      ),
    })),

    solicitudStatus: statusSolicitud,
  };
}
