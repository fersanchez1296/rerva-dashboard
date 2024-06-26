import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Unstable_Grid2";
import DataTable from "examples/Tables/DataTable";
import busquedasTableData from "components/SearchDocument/data/busquedasTableData";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

//Add-Edit-Document
import AddEditDocument from "components/AddEditDocument/AddEditDocument";
import DeleteDocument from "components/AddEditDocument/DeleteDocument";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const SearchDocument = ({ openBool, handleAceptarCerrar, objeto }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const handleAceptarClick = () => {
    setIsDialogOpen(true);
  };
  const handleAceptarCerrarDialogo = () => {
    setIsDialogOpen(false);
  };

  const handleAceptardeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };
  const handleAceptarCerrardelete = () => {
    setIsDeleteDialogOpen(false);
  };

  const { columns, rows, selectedId } = busquedasTableData(
    objeto,
    handleAceptarClick,
    handleAceptardeleteClick
  );
  const objetoEncontrado = { ...objeto.find((obj) => obj._id === selectedId) };
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={openBool}
        onClose={handleAceptarCerrar}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleAceptarCerrar}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Cerrar
            </Typography>
          </Toolbar>
        </AppBar>
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
                    Documentos relacionados con la búsqueda
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
      </Dialog>
      <AddEditDocument
        openBool={isDialogOpen}
        handleAceptarCerrar={handleAceptarCerrarDialogo}
        objeto={objetoEncontrado === undefined ? emptyInfo : objetoEncontrado}
      />
      <DeleteDocument
        openBool={isDeleteDialogOpen}
        handleAceptarCerrar={handleAceptarCerrardelete}
        deleteById={selectedId.id}
      />
    </React.Fragment>
  );
};

SearchDocument.propTypes = {
  openBool: PropTypes.bool.isRequired,
  handleAceptarCerrar: PropTypes.func,
  objeto: PropTypes.object,
};
