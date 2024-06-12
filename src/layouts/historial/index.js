import React from "react";
import { useGetHistorialQuery } from "api/api.slice";
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
import historialTableData from "layouts/historial/data/historialTableData";
//store
import { useDialogStore, useHistorialStore } from "./context/index.ts";
//Notas component
import Notas from "./components/notas";
function Historial() {
  const openWindow = useDialogStore((state) => state.openWindow);
  const setNotas = useHistorialStore((state) => state.setNotas);
  const { data: dt, isLoading, isFetching, refetch } = useGetHistorialQuery();

  if (isLoading || isFetching) {
    return <Spiner showspiner />;
  }

  if (!dt) {
    return <div>No data available.</div>;
  }

  const handleClickActualizar = () => {
    refetch();
  };

  const { columns, rows } = historialTableData(dt, openWindow, setNotas);
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox
          pt={6}
          pb={3}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MDButton color={"warning"} variant={"contained"} onClick={handleClickActualizar}>
            <MDTypography component="a" variant="caption" color="white" fontWeight="medium">
              Actualizar Solicitudes
            </MDTypography>
          </MDButton>
          <MDBox>
            <MDTypography component="div" variant="caption" color="dark" fontWeight="medium">
              Última vez actualizado
            </MDTypography>
            <MDTypography component="div" variant="caption" color="dark" fontWeight="medium">
              {Date()}
            </MDTypography>
          </MDBox>
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
                    Historial de Solicitudes
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
      <Notas />
    </>
  );
}

export default Historial;
