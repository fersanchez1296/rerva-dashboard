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

  const handleTituloChange = (event) => {
    const tituloValue = event.target.value;
    newDocument.setTitulo(tituloValue);
  };

  const handleYearChange = (event) => {
    const yearValue = event.target.value;
    newDocument.setYear(yearValue);
  };

  const handleRevistaChange = (event) => {
    const revistaValue = event.target.value;
    newDocument.setRevista(revistaValue);
  };

  const handleEditorialChange = (event) => {
    const editorial = event.target.value;
    newDocument.setEditorial(editorial);
  };

  const handleLinkChange = (event) => {
    const linkValue = event.target.value;
    newDocument.setLink(linkValue);
  };

  const handleDoiChange = (event) => {
    const doiValue = event.target.value;
    newDocument.setDoi(doiValue);
  };

  const handlePaginasChange = (event) => {
    const paginasValue = event.target.value;
    newDocument.setPaginas(paginasValue);
  };

  const handlePalabrasChange = (event) => {
    const palabrasValue = event.target.value;
    newDocument.setPalabras(palabrasValue);
  };

  const handlePaisChange = (event) => {
    const newPais = event.target.value;
    newDocument.setPais(newPais);
  };

  const handleMunicipioChange = (event) => {
    const newMunicipio = event.target.value;
    newDocument.setMunicipio(newMunicipio);
  };

  const handleIdiomaChange = (event) => {
    const newIdioma = event.target.value;
    newDocument.setIdioma(newIdioma);
  };

  const handleTipoDocumentoChange = (event) => {
    const newTipo = event.target.value;
    newDocument.setTipoDocumento(newTipo);
  };

  const handleClasificacionChange = (event) => {
    const newClasificacion = event.target.value;
    newDocument.setClasificacion(newClasificacion);
  };

  const handleConsultaChange = (event) => {
    const newConsulta = event.target.value;
    newDocument.setConsulta(newConsulta);
  };

  const handleDisponibilidadChange = (event) => {
    const newDisponibilidad = event.target.value;
    newDocument.setDisponibilidad(newDisponibilidad);
  };

  const handleInstitucionChange = (event) => {
    const newInstitucion = event.target.value;
    newDocument.setInstitucion(newInstitucion);
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
              onChange={(e) => handleTituloChange(e)}
              type="text"
              label="Título"
              value={newDocument["Título"]}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleYearChange(e)}
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
                onChange={handlePaisChange}
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
                onChange={handleMunicipioChange}
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
                onChange={handleTipoDocumentoChange}
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
                onChange={handleInstitucionChange}
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
                onChange={handleClasificacionChange}
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
              onChange={(e) => handleRevistaChange(e)}
              type="text"
              label="Revista / Libro"
              value={newDocument["Nombre de la revista/libro"]}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleEditorialChange(e)}
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
                onChange={handleConsultaChange}
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
              onChange={(e) => handleLinkChange(e)}
              type="text"
              label="Link de Acceso"
              value={newDocument.Link}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleDoiChange(e)}
              type="text"
              label="DOI"
              value={newDocument.Doi}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handlePaginasChange(e)}
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
                onChange={handleIdiomaChange}
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
                onChange={handleDisponibilidadChange}
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
              onChange={(e) => handlePalabrasChange(e)}
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

export default Index;
