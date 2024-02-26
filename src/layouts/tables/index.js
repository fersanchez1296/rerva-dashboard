import React, { useMemo, useState } from "react";
import { useGetSolicitudesQuery } from "api/api.slice";
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
import authorsTableData from "layouts/tables/data/authorsTableData";
//socket Io
import io from "socket.io-client";
//screen dialog
import { ScreenDialog } from "components/ScreenDialog/ScreenDialog";
//conexión Socket Io
const socket = io("http://localhost:4001");
function Tables() {
  let dt = [{}];
  const { data, isLoading } = useGetSolicitudesQuery();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  React.useEffect(() => {
    // Manejar eventos de actualización desde el servidor
    socket.on("datosActualizados", (newData) => {
      dt = newData;
      console.log(newData);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
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

  if (!data) {
    return <div>No data available.</div>;
  }
  dt = data;
  const handleClickActualizar = () => {
    socket.emit("actualizarDatos");
  };
  const handleAceptarClick = () => {
    setIsDialogOpen(true);
  };
  const handleAceptarCerrar = () => {
    setIsDialogOpen(false);
  };

  const { columns, rows, solicitudStatus } = authorsTableData(dt, handleAceptarClick);
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
          <MDButton color={"warning"} variant={"contained"} onClick={handleClickActualizar}>
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="white"
              fontWeight="medium"
            >
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
                    Solicitudes
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

export default Tables;
