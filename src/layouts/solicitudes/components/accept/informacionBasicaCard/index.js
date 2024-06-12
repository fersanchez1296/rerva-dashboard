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
import idiomas from "assets/json/idiomas.json";
import tipoDocumentos from "assets/json/tipoDocumento.json";
const Index = () => {
  const titulo = useDocumentStore((state) => state.titulo);
  const anio = useDocumentStore((state) => state.anio);
  const tipoDocumento = useDocumentStore((state) => state.tipoDocumento);
  const idioma = useDocumentStore((state) => state.idioma);
  const setAnio = useDocumentStore((state) => state.setDocumentFields);
  const setTipoDocumento = useDocumentStore((state) => state.setDocumentFields);
  const setIdioma = useDocumentStore((state) => state.setDocumentFields);
  const setTitulo = useDocumentStore((state) => state.setDocumentFields);

  return (
    <Grid container spacing={1} sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Grid xs={8}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor="success"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Información Básica
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <Grid container spacing={4}>
                <Grid xs={12}>
                  <MDBox mb={0}>
                    <MDInput
                      onChange={(e) => setTitulo("titulo", e.target.value)}
                      type="text"
                      label="Título"
                      value={titulo}
                      fullWidth
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <MDInput
                      onChange={(e) => setAnio("anio", e.target.value)}
                      type="text"
                      value={anio}
                      label="Año de publicación"
                      fullWidth
                    />
                  </MDBox>
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Tipo de documento</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tipoDocumento}
                        label="Tipo de documento"
                        onChange={(e) => setTipoDocumento("tipoDocumento", e.target.value)}
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
                </Grid>
                <Grid xs={4}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Idioma</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={idioma}
                        label="Idioma"
                        onChange={(e) => setIdioma("idioma", e.target.value)}
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
