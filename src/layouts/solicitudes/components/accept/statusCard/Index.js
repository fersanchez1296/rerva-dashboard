import React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
//mui library components
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
//store
import { useSolicitudStore } from "layouts/solicitudes/context/index.ts";

const Index = () => {
  const autor = useSolicitudStore((state) => state.autor);
  const email = useSolicitudStore((state) => state.email);
  const status = useSolicitudStore((state) => state.status);
  const id = useSolicitudStore((state) => state.id);
  const notas = useSolicitudStore((state) => state.notas);
  const setNotas = useSolicitudStore((state) => state.setSolicitudFields);
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
              Status solicitud
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={6} px={3}>
            <MDBox component="form" role="form">
              <Grid container spacing={2}>
                <Grid
                  xs={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <MDBox mb={2}>
                    <MDInput label={"Destinatario"} type="text" value={autor} disabled fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput label={"Email"} type="text" value={email} disabled fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput label={"Asunto"} type="text" value={status} disabled fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput label={"ID Solicitud"} type="text" value={id} disabled fullWidth />
                  </MDBox>
                </Grid>
                <Grid xs={8}>
                  <MDBox mb={2}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Notas al destinatario"
                      multiline
                      rows={12}
                      value={notas}
                      onChange={(e) => setNotas("notas", e.target.value)}
                      defaultValue={notas}
                      sx={{ width: "100%" }}
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
