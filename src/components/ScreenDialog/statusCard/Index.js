import React from "react";
//store
import { newDocumentStore } from "../../../zustand/newDocumentStore.ts";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
//mui library components
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

const Index = () => {
  const { statusCard } = newDocumentStore();

  const handleChangeNotas = (value) => {
    const notas = event.target.value;
    statusCard.setNotas(notas);
  };

  return (
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
          <MDBox mb={2}>
            <MDInput
              label={"Destinatario"}
              type="text"
              value={statusCard.Destinatario}
              disabled
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput label={"Asunto"} type="text" value={statusCard.Asunto} disabled fullWidth />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              label={"ID Solicitud"}
              type="text"
              value={statusCard.idSolicitud}
              disabled
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              id="outlined-multiline-static"
              label="Notas al destinatario"
              multiline
              rows={12}
              value={statusCard.Notas}
              onChange={(e) => handleChangeNotas(e.target.value.toUpperCase())}
              defaultValue={statusCard.Notas}
              sx={{ width: "100%" }}
            />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default React.memo(Index);
