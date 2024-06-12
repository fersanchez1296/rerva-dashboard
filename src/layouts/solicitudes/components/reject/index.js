import React from "react";
//mui library component
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
//api hook
import { useRechazarSolicitudMutation } from "api/api.slice";
//card components
import StatusCard from "./statusCard/Index";
//store
import {
  useDialogStore,
  useSolicitudStore,
  useDocumentStore,
} from "layouts/solicitudes/context/index.ts";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const steps = ["Datos de solicitud"];

const Reject = () => {
  const isWindowRejectOpen = useDialogStore((state) => state.isWindowRejectOpen);
  const closeWindowReject = useDialogStore((state) => state.closeWindowReject);
  const solicitudState = useSolicitudStore();
  const documentState = useDocumentStore();
  const [rechazarSolicitud] = useRechazarSolicitudMutation();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <StatusCard />;
      default:
        return "Unknown step";
    }
  }

  const updateSolicitud = async () => {
    const solicitud = { ...solicitudState };
    const result = await rechazarSolicitud({
      data: solicitud,
      id: solicitud.id,
    });
    if (result.data && typeof result.data.status === "number" && result.data.status === 200) {
      solicitudState.resetValues();
      closeWindowReject();
      handleReset();
    }
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={isWindowRejectOpen}
        onClose={() => {
          handleReset();
          solicitudState.resetValues();
          documentState.resetValues();
          closeWindowReject();
        }}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                handleReset();
                solicitudState.resetValues();
                documentState.resetValues();
                closeWindowReject();
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Cerrar
            </Typography>
            <Button
              variant="contained"
              color="success"
              endIcon={<SaveIcon />}
              onClick={updateSolicitud}
            >
              Guardar y Enviar
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep !== steps.length && (
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            )}
          </Box>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
          )}
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

export default React.memo(Reject);
