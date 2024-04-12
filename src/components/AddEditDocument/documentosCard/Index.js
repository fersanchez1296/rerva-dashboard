import React from "react";
//store
import { newDocumentStore } from "../../../zustand/newDocumentStore.ts";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
//mui library components
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
//json
import paises from "assets/json/paises.json";
import idiomas from "assets/json/idiomas.json";
import municipios from "assets/json/municipios.json";
import tipoDocumentos from "assets/json/tipoDocumento.json";
import clasificaciones from "assets/json/clasificacion.json";
import consultas from "assets/json/consulta.json";
import disponibilidades from "assets/json/disponibilidad.json";
import instituciones from "assets/json/instituciones.json";
const Index = () => {
  const { newDocument } = newDocumentStore();

  const handleChangeField = (field, event) => {
    const newValue = event.target.value;
    newDocument.setField(field, newValue);
  };

  return (
    <Card>
      <MDBox
        variant="gradient"
        bgColor="dark"
        borderRadius="lg"
        coloredShadow="info"
        mx={2}
        mt={-3}
        p={2}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          Datos del documento
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleChangeField("Título", e)}
              type="text"
              label="Título"
              value={newDocument["Título"]}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleChangeField("Año", e)}
              type="text"
              value={newDocument["Año"]}
              label="Año de publicación"
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">País de publicación</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newDocument["País de la Publicación"]}
                label="País de publicación"
                onChange={(e) => handleChangeField("País de la Publicación", e)}
              >
                {paises.map((pais) => {
                  return (
                    <MenuItem value={pais.es_name} key={pais.es_name}>
                      {pais.es_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Municipio de estudio</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newDocument["Municipios de estudio"]}
                label="Municipio de estudio"
                onChange={(e) => handleChangeField("Municipios de estudio", e)}
              >
                {municipios.map((municipio) => {
                  return (
                    <MenuItem value={municipio.name} key={municipio.name}>
                      {municipio.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipo de documento</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newDocument["Tipo de documento"]}
                label="Tipo de documento"
                onChange={(e) => handleChangeField("Tipo de documento", e)}
              >
                {tipoDocumentos.map((documento) => {
                  return (
                    <MenuItem value={documento.tipo} key={documento.tipo}>
                      {documento.tipo}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Institución</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newDocument["Tesis/Institución"]}
                label="Institución"
                onChange={(e) => handleChangeField("Tesis/Institución", e)}
              >
                {instituciones.map((inst) => {
                  return (
                    <MenuItem value={inst.Institucion} key={inst.Institucion}>
                      {inst.Institucion}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Clasificación</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newDocument["Clasificación"]}
                label="Clasificación"
                onChange={(e) => handleChangeField("Clasificación", e)}
              >
                {clasificaciones.map((clasificacion) => {
                  return (
                    <MenuItem value={clasificacion.clasificacion} key={clasificacion.clasificacion}>
                      {clasificacion.clasificacion}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleChangeField("Nombre de la revista/libro", e)}
              type="text"
              label="Revista / Libro"
              value={newDocument["Nombre de la revista/libro"]}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleChangeField("Libros/Editorial", e)}
              type="text"
              label="Editorial"
              value={newDocument["Libros/Editorial"]}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipo consulta</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newDocument["Tipo de consulta"]}
                label="Tipo consulta"
                onChange={(e) => handleChangeField("Tipo de consulta", e)}
              >
                {consultas.map((consulta) => {
                  return (
                    <MenuItem value={consulta.consulta} key={consulta.consulta}>
                      {consulta.consulta}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleChangeField("Link", e)}
              type="text"
              label="Link de Acceso"
              value={newDocument.Link}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleChangeField("Doi", e)}
              type="text"
              label="DOI"
              value={newDocument.Doi}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleChangeField("Número de páginas", e)}
              type="text"
              label="Número de páginas"
              value={newDocument["Número de páginas"]}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Idioma</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newDocument.Idioma}
                label="Idioma"
                onChange={(e) => handleChangeField("Idioma", e)}
              >
                {idiomas.map((idioma) => {
                  return (
                    <MenuItem value={idioma.nombre} key={idioma.nombre}>
                      {idioma.nombre}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Disponibilidad</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newDocument.Disponibilidad}
                label="Disponibilidad"
                onChange={(e) => handleChangeField("Disponibilidad", e)}
              >
                {disponibilidades.map((disponibilidad) => {
                  return (
                    <MenuItem
                      value={disponibilidad.disponibilidad}
                      key={disponibilidad.disponibilidad}
                    >
                      {disponibilidad.disponibilidad}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleChangeField("Palabras Clave", e)}
              type="text"
              label="Palabras Clave"
              value={newDocument["Palabras Clave"]}
              fullWidth
            />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default React.memo(Index);
