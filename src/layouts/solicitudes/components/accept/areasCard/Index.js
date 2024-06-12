import React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
//mui library components
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Unstable_Grid2";
//json
import areas from "assets/json/areas.json";
import campos from "assets/json/campos.json";
import disciplinas from "assets/json/disciplina.json";
//store
import { useDocumentStore } from "layouts/solicitudes/context/index.ts";
const Index = () => {
  const area = useDocumentStore((state) => state.area);
  const campo = useDocumentStore((state) => state.campo);
  const disciplina = useDocumentStore((state) => state.disciplina);
  const setArea = useDocumentStore((state) => state.setDocumentFields);
  const setCampo = useDocumentStore((state) => state.setDocumentFields);
  const setDisciplina = useDocumentStore((state) => state.setDocumentFields);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container spacing={1} sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Grid xs={8}>
        <Card>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
            mx={2}
            mt={-3}
            p={2}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Área de estudio
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">Área de estudio</InputLabel>
                  <Select
                    sx={{ minHeight: "3rem" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={area}
                    label="Área de estudio"
                    onChange={(e) => setArea("area", e.target.value)}
                  >
                    {areas.map((area) => {
                      return (
                        <MenuItem value={area.area} key={area.area}>
                          {area.area}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </MDBox>
              <MDBox mb={2}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">Campo de estudio</InputLabel>
                  <Select
                    sx={{ minHeight: "3rem" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={campo}
                    label="Campo de estudio"
                    onChange={(e) => setCampo("campo", e.target.value)}
                  >
                    {campos.map((campo) => {
                      return (
                        <MenuItem value={campo.campo} key={campo.campo}>
                          {campo.campo}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </MDBox>
              <MDBox mb={2}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">Disciplina de estudio</InputLabel>
                  <Select
                    sx={{ minHeight: "3rem" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={disciplina}
                    label="Disciplina de estudio"
                    onChange={(e) => setDisciplina("disciplina", e.target.value)}
                  >
                    {disciplinas.map((disciplina) => {
                      return (
                        <MenuItem value={disciplina.disciplina} key={disciplina.disciplina}>
                          {disciplina.disciplina}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Index;
