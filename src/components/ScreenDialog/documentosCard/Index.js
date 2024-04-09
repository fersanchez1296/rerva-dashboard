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
const Index = () => {
  const { newDocument } = newDocumentStore();
  const [titulo, setTitulo] = React.useState("");
  const [year, setYear] = React.useState("");
  const [revista, setRevista] = React.useState("");
  const [editorial, setEditorial] = React.useState("");
  const [link, setLink] = React.useState("");
  const [doi, setDoi] = React.useState("");
  const [paginas, setPaginas] = React.useState("");
  const [palabras, setPalabras] = React.useState("");
  const [pais, setPais] = React.useState("");
  const [idioma, setIdioma] = React.useState("");
  const [municipio, setMunicipio] = React.useState("");
  const [tipoDocumento, setTipoDocumento] = React.useState("");
  const [clasificacion, setClasificacion] = React.useState("");
  const [consulta, setConsulta] = React.useState("");
  const [disponibilidad, setDisponibilidad] = React.useState("");

  const handleTituloChange = (event) => {
    const tituloValue = event.target.value;
    setTitulo(tituloValue);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      Título: tituloValue,
    }));
  };

  const handleYearChange = (event) => {
    const yearValue = event.target.value;
    setYear(yearValue);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      Año: yearValue,
    }));
  };

  const handleRevistaChange = (event) => {
    const revistaValue = event.target.value;
    setRevista(revistaValue);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      "Nombre de la revista/libro": revistaValue,
    }));
  };

  const handleEditorialChange = (event) => {
    const editorial = event.target.value;
    setEditorial(editorial);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      "Libros/Editorial": editorial,
    }));
  };

  const handleLinkChange = (event) => {
    const linkValue = event.target.value;
    setLink(linkValue);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      "Link de acceso": linkValue,
    }));
  };

  const handleDoiChange = (event) => {
    const doiValue = event.target.value;
    setDoi(doiValue);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      DOI: doiValue,
    }));
  };

  const handlePaginasChange = (event) => {
    const paginasValue = event.target.value;
    setPaginas(paginasValue);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      "Número de páginas": paginasValue,
    }));
  };

  const handlePalabrasChange = (event) => {
    const palabrasValue = event.target.value;
    setPalabras(palabrasValue);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      "Palabras Clave": palabrasValue,
    }));
  };

  const handlePaisChange = (event) => {
    const newPais = event.target.value;
    setPais(newPais);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      "País de la Publicación": newPais,
    }));
  };

  const handleMunicipioChange = (event) => {
    const newMunicipio = event.target.value;
    setMunicipio(newMunicipio);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      "Municipios de estudio": newMunicipio,
    }));
  };

  const handleIdiomaChange = (event) => {
    const newIdioma = event.target.value;
    setIdioma(newIdioma);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      Idioma: newIdioma,
    }));
  };

  const handleTipoDocumentoChange = (event) => {
    const newTipo = event.target.value;
    setTipoDocumento(newTipo);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      "Tipo de documento": newTipo,
    }));
  };

  const handleClasificacionChange = (event) => {
    const newClasificacion = event.target.value;
    setClasificacion(newClasificacion);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      Clasificación: newClasificacion,
    }));
  };

  const handleConsultaChange = (event) => {
    const newConsulta = event.target.value;
    setConsulta(newConsulta);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      "Tipo de consulta": newConsulta,
    }));
  };

  const handleDisponibilidadChange = (event) => {
    const newDisponibilidad = event.target.value;
    setDisponibilidad(newDisponibilidad);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      Disponibilidad: newDisponibilidad,
    }));
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
                value={pais}
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
                value={municipio}
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
                value={tipoDocumento}
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
              <InputLabel id="demo-simple-select-label">Clasificación</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={clasificacion}
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
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              onChange={(e) => handleEditorialChange(e)}
              type="text"
              label="Editorial"
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
                value={consulta}
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
                value={idioma}
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
                value={disponibilidad}
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
              fullWidth
            />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default Index;
