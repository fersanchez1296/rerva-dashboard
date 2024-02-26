import React, { useMemo, useState } from "react";
import { useGetDocumentsQuery } from "api/api.slice";
import { Spiner } from "components/Spiner/Spiner";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import documentosTableData from "layouts/documentos/data/documentosTableData";
//screen dialog
import { ScreenDialog } from "components/ScreenDialog/ScreenDialog";
function Documentos() {
  const { data: dt, isLoading } = useGetDocumentsQuery();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  let emptyInfo = {
    _id: 0,
    Autor: "",
    Título: "",
    Email: "",
    Status: "",
    ApprovalStatus: "",
    Link: "",
  };

  if (isLoading) {
    return <Spiner />;
  }

  if (!dt) {
    return <div>No data available.</div>;
  }

  const handleAceptarClick = () => {
    setIsDialogOpen(true);
  };
  const handleAceptarCerrar = () => {
    setIsDialogOpen(false);
  };

  const { columns, rows, solicitudStatus } = documentosTableData(dt, handleAceptarClick);
  const objetoEncontrado = { ...dt.find((objeto) => objeto._id === solicitudStatus.id) };
  if (objetoEncontrado !== undefined) {
    objetoEncontrado.ApprovalStatus = solicitudStatus.status;
  } else {
    objetoEncontrado = emptyInfo;
  }
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox
          pt={6}
          pb={3}
          style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
        >
          <MDButton
            color={"success"}
            variant={"contained"}
            onClick={() => {
              statusSolicitud.id = el._id;
              statusSolicitud.status = "Rechazada";
              onAceptarClick();
            }}
          >
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="white"
              fontWeight="medium"
            >
              Agregar Nuevo Documento
            </MDTypography>
          </MDButton>
          <MDButton
            color={"warning"}
            variant={"contained"}
            onClick={() => {
              statusSolicitud.id = el._id;
              statusSolicitud.status = "Rechazada";
              onAceptarClick();
            }}
          >
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="white"
              fontWeight="medium"
            >
              Actualizar Documentos
            </MDTypography>
          </MDButton>
        </MDBox>
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Documentos en la Base de Datos
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                    onAceptarClick={handleAceptarClick}
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
      <ScreenDialog
        openBool={isDialogOpen}
        handleAceptarCerrar={handleAceptarCerrar}
        objeto={objetoEncontrado === undefined ? emptyInfo : objetoEncontrado}
      />
    </>
  );
}

export default Documentos;
