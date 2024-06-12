import React, { useMemo, useState } from "react";
import { useGetUsersQuery } from "api/api.slice";
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
import UsuariosTableData from "layouts/users/data/usuariosTableData";
//Add-Edit-Delete User
import Add from "./components/add";
import Edit from "./components/edit";
import Delete from "./components/delete";
//store
import { useDialogStore, useUserStore } from "./context/index.ts";
//snackbar
import SuccessSB from "components/SuccessSnackbar";
import ErrorSB from "components/ErrorSnackbar";
function Usuarios() {
  const openAlert = useDialogStore((state) => state.openAlert);
  const openWindow = useDialogStore((state) => state.openWindow);
  const openWindowEdit = useDialogStore((state) => state.openWindowEdit);
  const setSelectedId = useUserStore((state) => state.setSelectedId);
  const setName = useUserStore((state) => state.setName);
  const setUser = useUserStore((state) => state.setUser);
  const { data: dt, isLoading, isFetching, refetch } = useGetUsersQuery();

  if (isLoading || isFetching) {
    return <Spiner showspiner />;
  }

  if (!dt) {
    return <div>No data available.</div>;
  }

  const handleClickActualizar = () => {
    refetch();
  };

  const { columns, rows } = UsuariosTableData(
    dt,
    openWindowEdit,
    openAlert,
    setSelectedId,
    setName,
    setUser
  );
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox
          pt={6}
          pb={3}
          style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
        >
          <MDButton color={"success"} variant={"contained"} onClick={() => openWindow()}>
            <MDTypography
              component="a"
              href="#"
              variant="caption"
              color="white"
              fontWeight="medium"
            >
              Agregar Nuevo Usuario
            </MDTypography>
          </MDButton>
          <MDButton color={"warning"} variant={"contained"} onClick={handleClickActualizar}>
            <MDTypography component="a" variant="caption" color="white" fontWeight="medium">
              Actualizar Usuarios
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
                    Usuarios en la Base de Datos
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
      <Add />
      <Edit />
      <Delete />
      <SuccessSB />
      <ErrorSB />
    </>
  );
}

export default Usuarios;
