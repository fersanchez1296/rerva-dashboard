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
import municipios from "assets/json/municipios.json";
import instituciones from "assets/json/instituciones.json";
const Index = () => {
  const pais = useDocumentStore((state) => state.pais);
  const setPais = useDocumentStore((state) => state.setDocumentFields);
  const municipio = useDocumentStore((state) => state.municipios);
  const setMunicipio = useDocumentStore((state) => state.setDocumentFields);
  const tesis = useDocumentStore((state) => state.tesis);
  const setTesis = useDocumentStore((state) => state.setDocumentFields);
  const revista = useDocumentStore((state) => state.revista);
  const setRevista = useDocumentStore((state) => state.setDocumentFields);
  const editorial = useDocumentStore((state) => state.editorial);
  const setEditorial = useDocumentStore((state) => state.setDocumentFields);

  return (
    <Grid container spacing={1} sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Grid xs={8}>
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
              <Grid container spacing={4} sx={{ gridAutoFlow: "dense" }}>
                <Grid item xs={3}>
                  <MDBox>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">País de publicación</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pais}
                        label="País de publicación"
                        onChange={(e) => setPais("pais", e.target.value)}
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
                </Grid>
                <Grid item xs={3}>
                  <MDBox mb={2}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Institución</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tesis}
                        label="Institución"
                        onChange={(e) => setTesis("tesis", e.target.value)}
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
                </Grid>
                <Grid item xs={6}>
                  <MDBox mb={2} sx={{ height: "100%" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Municipio de estudio</InputLabel>
                      <Select
                        sx={{ minHeight: "3rem" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={municipio}
                        label="Municipio de estudio"
                        onChange={(e) => setMunicipio("municipios", e.target.value)}
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
                </Grid>
                <Grid item xs={3}>
                  <MDBox mb={2}>
                    <MDInput
                      onChange={(e) => setRevista("revista", e.target.value)}
                      type="text"
                      label="Revista / Libro"
                      value={revista}
                      fullWidth
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={3}>
                  <MDBox mb={2}>
                    <MDInput
                      onChange={(e) => setEditorial("editorial", e.target.value)}
                      type="text"
                      label="Editorial"
                      value={editorial}
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
