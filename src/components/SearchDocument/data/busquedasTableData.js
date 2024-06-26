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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";

let newOrEdit = "";
let selectedId = "";
export default function data(objeto, onAceptarClick, onAceptarDeleteClick) {
  console.log(objeto);
  if (objeto.length > 0) {
    return {
      columns: [
        { Header: "Editar", accessor: "edit", width: "35%", align: "left" },
        { Header: "Eliminar", accessor: "delete", width: "35%", align: "left" },
        { Header: "Título", accessor: "titulo", width: "35%", align: "left" },
        { Header: "Año", accessor: "anio", width: "35%", align: "center" },
        { Header: "Idioma", accessor: "idioma", width: "35%", align: "left" },
        { Header: "Autoría", accessor: "autoria", width: "35%", align: "center" },
        { Header: "Autores", accessor: "autores", width: "35%", align: "left" },
        { Header: "Tipo documento", accessor: "tipo_documento", width: "35%", align: "left" },
        { Header: "Clasificación", accessor: "clasificacion", width: "35%", align: "left" },
        { Header: "Revista / Libro", accessor: "revista_libro", width: "35%", align: "left" },
        { Header: "Compilador", accessor: "compilador", width: "35%", align: "left" },
        { Header: "País de la Publicación", accessor: "pais", width: "35%", align: "left" },
        { Header: "Editorial", accessor: "editorial", width: "35%", align: "left" },
        { Header: "Institución", accessor: "institucion", width: "35%", align: "left" },
        { Header: "Tipo consulta", accessor: "tipo_consulta", width: "35%", align: "left" },
        { Header: "Link", accessor: "link", width: "35%", align: "left" },
        { Header: "Área", accessor: "area", width: "35%", align: "left" },
        { Header: "Campo", accessor: "campo", width: "35%", align: "left" },
        { Header: "Disciplina", accessor: "disciplina", width: "35%", align: "left" },
        { Header: "Municipio de estudio", accessor: "municipio", width: "35%", align: "left" },
        { Header: "Palabras clave", accessor: "palabras_clave", width: "35%", align: "left" },
        { Header: "Disponibilidad", accessor: "disponibilidad", width: "35%", align: "left" },
        { Header: "Número de páginas", accessor: "numero_paginas", width: "35%", align: "left" },
      ],
      rows: objeto.map((el) => ({
        delete: (
          <MDButton
            color={"error"}
            variant={"contained"}
            onClick={() => {
              selectedId = el._id;
              onAceptarDeleteClick();
            }}
          >
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="white"
              fontWeight="medium"
            >
              <DeleteForeverIcon />
            </MDTypography>
          </MDButton>
        ),
        edit: (
          <MDButton
            color={"info"}
            variant={"contained"}
            onClick={() => {
              selectedId = el._id;
              onAceptarClick();
            }}
          >
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="white"
              fontWeight="medium"
            >
              <EditNoteIcon />
            </MDTypography>
          </MDButton>
        ),
        titulo: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Título"]}
          </MDTypography>
        ),
        anio: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Año"]}
          </MDTypography>
        ),
        idioma: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent={el.Idioma}
              color={el.Idioma == "Español" ? "success" : "info"}
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        autoria: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Tipo de autoría"]}
          </MDTypography>
        ),
        autores: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el.Autores}
          </MDTypography>
        ),
        tipo_documento: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Tipo de documento"]}
          </MDTypography>
        ),
        clasificacion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Clasificación"]}
          </MDTypography>
        ),
        revista_libro: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Nombre de la revista/libro"]}
          </MDTypography>
        ),
        compilador: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Compilador/ Editor/ Coordinador/ Libro"]}
          </MDTypography>
        ),
        pais: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["País de la Publicación"]}
          </MDTypography>
        ),
        editorial: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Libros/Editorial"]}
          </MDTypography>
        ),
        institucion: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Tesis/ Institución"]}
          </MDTypography>
        ),
        tipo_consulta: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Tipo de consulta"]}
          </MDTypography>
        ),
        link: (
          <MDTypography
            component="a"
            target="blank"
            href={el["Link de acceso"]}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            {el["Link de acceso"]}
          </MDTypography>
        ),
        area: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Área"]}
          </MDTypography>
        ),
        campo: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el.Campo}
          </MDTypography>
        ),
        disciplina: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el.Disciplina}
          </MDTypography>
        ),
        municipio: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Municipios de estudio"]}
          </MDTypography>
        ),
        palabras_clave: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Palabras Clave"]}
          </MDTypography>
        ),
        disponibilidad: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el.Disponibilidad}
          </MDTypography>
        ),
        numero_paginas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {el["Número de páginas"]}
          </MDTypography>
        ),
      })),
      newOrEdit: newOrEdit,
      selectedId: selectedId,
    };
  } else {
    return {
      columns: [],
      rows: [],
      newOrEdit: newOrEdit,
      selectedId: selectedId,
    };
  }
}
