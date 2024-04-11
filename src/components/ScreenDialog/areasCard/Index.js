import React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
//mui library components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
//json
import areas from "assets/json/areas.json";
import campos from "assets/json/campos.json";
import disciplinas from "assets/json/disciplina.json";
//store
import { newDocumentStore } from "../../../zustand/newDocumentStore.ts";

const Index = () => {
  const [newAreaChecked, setNewAreaChecked] = React.useState(false);
  const [newCampoChecked, setNewCampoChecked] = React.useState(false);
  const [newDisciplinaChecked, setNewDisciplinaChecked] = React.useState(false);
  const [area, setArea] = React.useState("");
  const [newArea, setNewArea] = React.useState("");
  const [campo, setCampo] = React.useState("");
  const [newCampo, setNewCampo] = React.useState("");
  const [disciplina, setDisciplina] = React.useState("");
  const [newDisciplina, setNewDisciplina] = React.useState("");
  const { newDocument } = newDocumentStore();

  const handleChangeAreaSelect = (event) => {
    setNewArea("");
    const newArea = event.target.value;
    setArea(newArea);
    newDocument.setArea(newArea);
  };

  const handleChangeNewAreaInput = (event) => {
    const newArea = event.target.value;
    setNewArea(newArea);
    newDocument.setArea(newArea);
  };

  const handleChangeNewAreaChecked = (event) => {
    setArea("");
    setNewArea("");
    setNewAreaChecked(event.target.checked);
  };

  const handleChangeCampoSelect = (event) => {
    setNewCampo("");
    const newCampo = event.target.value;
    setCampo(newCampo);
    newDocument.setCampo(newCampo);
  };

  const handleChangeNewCampoInput = (event) => {
    const newCampo = event.target.value;
    setNewCampo(newCampo);
    newDocument.setCampo(newCampo);
  };

  const handleChangeNewCampoChecked = (event) => {
    setCampo("");
    setNewCampo("");
    setNewCampoChecked(event.target.checked);
  };

  const handleChangeDisciplinaSelect = (event) => {
    setNewDisciplina("");
    const newDisciplina = event.target.value;
    setDisciplina(newDisciplina);
    newDocument.setDisciplina(newDisciplina);
  };

  const handleChangeNewDisciplinaInput = (event) => {
    const newDisciplina = event.target.value;
    setNewDisciplina(newDisciplina);
    newDocument.setDisciplina(newDisciplina);
  };

  const handleChangeNewDisciplinaChecked = (event) => {
    setDisciplina("");
    setNewDisciplina("");
    setNewDisciplinaChecked(event.target.checked);
  };
  return (
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
            <FormControl style={{ width: "45%" }}>
              <InputLabel id="demo-simple-select-label">Área de estudio</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={area}
                label="Área de estudio"
                disabled={newAreaChecked ? true : false}
                onChange={handleChangeAreaSelect}
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
            <Checkbox checked={newAreaChecked} onChange={handleChangeNewAreaChecked} />
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ cursor: "pointer", userSelect: "none", ml: -1, mr: 2 }}
            >
              Nueva Area
            </MDTypography>
            <MDInput
              type="text"
              label="Nueva Área"
              disabled={!newAreaChecked ? true : false}
              style={{ width: "41%" }}
              value={newArea}
              onChange={(e) => handleChangeNewAreaInput(e)}
            />
          </MDBox>
          <MDBox mb={2}>
            <FormControl style={{ width: "45%" }}>
              <InputLabel id="demo-simple-select-label">Campo de estudio</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={campo}
                label="Campo de estudio"
                disabled={newCampoChecked ? true : false}
                onChange={handleChangeCampoSelect}
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
            <Checkbox checked={newCampoChecked} onChange={handleChangeNewCampoChecked} />
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ cursor: "pointer", userSelect: "none", ml: -1, mr: 2 }}
            >
              Nuevo Campo
            </MDTypography>
            <MDInput
              type="text"
              label="Nuevo campo de estudio"
              value={newCampo}
              disabled={!newCampoChecked ? true : false}
              style={{ width: "39%" }}
              onChange={(e) => handleChangeNewCampoInput(e)}
            />
          </MDBox>
          <MDBox mb={2}>
            <FormControl style={{ width: "45%" }}>
              <InputLabel id="demo-simple-select-label">Disciplina de estudio</InputLabel>
              <Select
                sx={{ minHeight: "3rem" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={disciplina}
                label="Disciplina de estudio"
                disabled={newDisciplinaChecked ? true : false}
                onChange={handleChangeDisciplinaSelect}
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
            <Checkbox checked={newDisciplinaChecked} onChange={handleChangeNewDisciplinaChecked} />
            <MDTypography
              variant="button"
              fontWeight="regular"
              color="text"
              sx={{ cursor: "pointer", userSelect: "none", ml: -1, mr: 2 }}
            >
              Nueva Disciplina
            </MDTypography>
            <MDInput
              type="text"
              label="Nueva Disciplina"
              value={newDisciplina}
              disabled={!newDisciplinaChecked ? true : false}
              style={{ width: "37%" }}
              onChange={(e) => handleChangeNewDisciplinaInput(e)}
            />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default Index;
