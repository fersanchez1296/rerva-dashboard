import React from "react";
//store
import { newDocumentStore } from "../../../zustand/newDocumentStore.ts";
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

const Index = () => {
  const { newDocument } = newDocumentStore();
  const [individualChecked, setIndividualChecked] = React.useState(false);
  const [coAutoriaChecked, setCoAutoriaChecked] = React.useState(false);
  const [autores, setAutores] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleIndividualChange = (event) => {
    const autoriaCheck = event.target.checked;
    const autoriaValue = event.target.value;
    setIndividualChecked(autoriaCheck);
    newDocument.setAutoria(autoriaValue);
    if (event.target.checked) {
      setCoAutoriaChecked(false);
    }
  };

  const handleCoAutoriaChange = (event) => {
    const autoriaCheck = event.target.checked;
    const autoriaValue = event.target.value;
    setCoAutoriaChecked(autoriaCheck);
    newDocument.setAutoria(autoriaValue);
    if (event.target.checked) {
      setIndividualChecked(false);
    }
  };

  const handleAutoresChange = (event) => {
    const autoresValue = event.target.value;
    setAutores(autoresValue);
    setNewDocumentBody((prevBody) => ({
      ...prevBody,
      Autores: autoresValue,
    }));
  };
  return (
    <Card>
      <MDBox
        variant="gradient"
        bgColor="primary"
        borderRadius="lg"
        coloredShadow="info"
        mx={2}
        mt={-3}
        p={2}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          Datos del Autor (es)
        </MDTypography>
      </MDBox>
      <MDBox display="flex" alignItems="center" justifyContent="center" mt={1}>
        <Checkbox
          value={"Individual"}
          checked={individualChecked}
          onChange={handleIndividualChange}
        />
        <MDTypography
          variant="button"
          fontWeight="regular"
          color="text"
          sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
        >
          Individual
        </MDTypography>
        <Checkbox
          value={"Co-autoría"}
          checked={coAutoriaChecked}
          onChange={handleCoAutoriaChange}
        />
        <MDTypography
          variant="button"
          fontWeight="regular"
          color="text"
          sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
        >
          Co-Autoria
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3} px={3}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Nombre(s)"
              value={newDocument.Autores}
              //onChange={(e) => handleAutoresChange(e)}
              fullWidth
            />
          </MDBox>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              sx={{ minHeight: "3rem" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //value={age}
              label="Age"
              //onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default Index;
