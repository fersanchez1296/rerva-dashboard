import React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
//mui library components
import Card from "@mui/material/Card";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Unstable_Grid2";
//store
import { useDocumentStore } from "layouts/solicitudes/context/index.ts";

const Index = () => {
  const autores = useDocumentStore((state) => state.autores);
  const autoria = useDocumentStore((state) => state.autoria);
  const editor = useDocumentStore((state) => state.editor);
  const setAutores = useDocumentStore((state) => state.setDocumentFields);
  const setEditor = useDocumentStore((state) => state.setDocumentFields);
  const setAutoria = useDocumentStore((state) => state.setDocumentFields);

  return (
    <Grid container spacing={1} sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Grid xs={8}>
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
            <FormControl>
              {/* <FormLabel id="demo-controlled-radio-buttons-group">Autoria</FormLabel> */}
              <RadioGroup
                row
                required
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={autoria}
                onChange={(e) => setAutoria("autoria", e.target.value)}
              >
                <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
                <FormControlLabel value="Co-autoria" control={<Radio />} label="Co-autoria" />
              </RadioGroup>
            </FormControl>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form" role="form">
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Nombre(s)"
                  value={autores}
                  onChange={(e) => setAutores("autores", e.target.value)}
                  fullWidth
                  required
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="text"
                  label="Compilador/Editor/Coordinador/Libro"
                  value={editor}
                  onChange={(e) => setEditor("editor", e.target.value)}
                  fullWidth
                  required
                />
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </Grid>
    </Grid>
  );
};

export default React.memo(Index);
