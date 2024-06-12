import React from "react";
//store
import { useDocumentStore } from "layouts/solicitudes/context/index.ts";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
//mui library components
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
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
  const clasificacion = useDocumentStore((state) => state.clasificacion);
  const setClasificacion = useDocumentStore((state) => state.setDocumentFields);
  const tipoConsulta = useDocumentStore((state) => state.tipoConsulta);
  const setTipoConsulta = useDocumentStore((state) => state.setDocumentFields);
  const link = useDocumentStore((state) => state.link);
  const setLink = useDocumentStore((state) => state.setDocumentFields);
  const doi = useDocumentStore((state) => state.doi);
  const setDoi = useDocumentStore((state) => state.setDocumentFields);
  const numeroPaginas = useDocumentStore((state) => state.numeroPaginas);
  const setNumeroPaginas = useDocumentStore((state) => state.setDocumentFields);
  const disponibilidad = useDocumentStore((state) => state.disponibilidad);
  const setDisponibilidad = useDocumentStore((state) => state.setDocumentFields);
  const palabrasClave = useDocumentStore((state) => state.palabrasClave);
  const setPalabrasClave = useDocumentStore((state) => state.setDocumentFields);

  return (
    <Grid container spacing={1} sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Grid xs={8}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor="warning"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Detalles adicionales
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Clasificación</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={clasificacion}
                        label="Clasificación"
                        onChange={(e) => setClasificacion("clasificacion", e.target.value)}
                      >
                        {clasificaciones.map((clasificacion) => {
                          return (
                            <MenuItem
                              value={clasificacion.clasificacion}
                              key={clasificacion.clasificacion}
                            >
                              {clasificacion.clasificacion}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Tipo consulta</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tipoConsulta}
                        label="Tipo consulta"
                        onChange={(e) => setTipoConsulta("tipoConsulta", e.target.value)}
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
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      onChange={(e) => setLink("link", e.target.value)}
                      type="text"
                      label="Link de Acceso"
                      value={link}
                      fullWidth
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      onChange={(e) => setDoi("doi", e.target.value)}
                      type="text"
                      label="DOI"
                      value={doi}
                      fullWidth
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      onChange={(e) => setNumeroPaginas("numeroPaginas", e.target.value)}
                      type="text"
                      label="Número de páginas"
                      value={numeroPaginas}
                      fullWidth
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Disponibilidad</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={disponibilidad}
                        label="Disponibilidad"
                        onChange={(e) => setDisponibilidad("disponibilidad", e.target.value)}
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
                </Grid>
                <Grid xs={12}>
                  <MDBox mb={2}>
                    <MDInput
                      onChange={(e) => setPalabrasClave("palabrasClave", e.target.value)}
                      type="text"
                      label="Palabras Clave"
                      value={palabrasClave}
                      fullWidth
                    />
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
    </Grid>
  );
};

export default React.memo(Index);
