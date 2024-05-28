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
//Add-Edit-Document
import AddEditDocument from "components/AddEditDocument/AddEditDocument";
import DeleteDocument from "components/AddEditDocument/DeleteDocument";
function Documentos() {
  const { data: dt, isLoading, isFetching, refetch } = useGetDocumentsQuery();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  let emptyInfo = {
    _id: 0,
    Autor: "",
    Título: "",
    Email: "",
    Status: "",
    ApprovalStatus: "",
    Link: "",
  };

  if (isLoading || isFetching) {
    return <Spiner showspiner />;
  }

  if (!dt) {
    return <div>No data available.</div>;
  }

  const handleClickActualizar = () => {
    refetch();
  };

  const handleAceptarClick = () => {
    setIsDialogOpen(true);
  };
  const handleAceptarCerrar = () => {
    setIsDialogOpen(false);
  };

  const handleAceptardeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };
  const handleAceptarCerrardelete = () => {
    setIsDeleteDialogOpen(false);
  };

  const { columns, rows, newOrEdit, selectedId } = documentosTableData(
    dt,
    handleAceptarClick,
    handleAceptardeleteClick
  );
  const objetoEncontrado = { ...dt.find((objeto) => objeto._id === selectedId) };

  if (objetoEncontrado !== undefined) {
    objetoEncontrado.NewDocument = newOrEdit;
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
          <MDButton color={"success"} variant={"contained"} onClick={handleAceptarClick}>
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
          <MDButton color={"warning"} variant={"contained"} onClick={handleClickActualizar}>
            <MDTypography component="a" variant="caption" color="white" fontWeight="medium">
              Actualizar Documentos
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
      <AddEditDocument
        openBool={isDialogOpen}
        handleAceptarCerrar={handleAceptarCerrar}
        objeto={objetoEncontrado === undefined ? emptyInfo : objetoEncontrado}
      />
      <DeleteDocument
        openBool={isDeleteDialogOpen}
        handleAceptarCerrar={handleAceptarCerrardelete}
        deleteById={selectedId.id}
      />
    </>
  );
}

export default Documentos;
