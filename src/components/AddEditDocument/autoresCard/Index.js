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

const Index = () => {
  const { newDocument } = newDocumentStore();
  const [individualChecked, setIndividualChecked] = React.useState(false);
  const [coAutoriaChecked, setCoAutoriaChecked] = React.useState(false);

  const handleChangeField = (field, event) => {
    const newValue = event.target.value;
    newDocument.setField(field, newValue);
  };

  const handleIndividualChange = (field, event) => {
    const autoriaCheck = event.target.checked;
    const autoriaValue = event.target.value;
    setIndividualChecked(autoriaCheck);
    newDocument.setField(field, autoriaValue);
    if (event.target.checked) {
      setCoAutoriaChecked(false);
    }
  };

  const handleCoAutoriaChange = (field, event) => {
    const autoriaCheck = event.target.checked;
    const autoriaValue = event.target.value;
    setCoAutoriaChecked(autoriaCheck);
    newDocument.setField(field, autoriaValue);
    if (event.target.checked) {
      setIndividualChecked(false);
    }
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
          onChange={(e) => handleIndividualChange(["Tipo de Autoría"], e)}
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
          onChange={(e) => handleCoAutoriaChange(["Tipo de Autoría"], e)}
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
              onChange={(e) => handleChangeField("Autores", e)}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Compilador/Editor/Coordinador/Libro"
              value={newDocument["Compilador/Editor/Coordinador/Libro"]}
              onChange={(e) => handleChangeField("Compilador/Editor/Coordinador/Libro", e)}
              fullWidth
            />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default React.memo(Index);
