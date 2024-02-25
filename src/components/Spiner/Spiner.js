import PropTypes from "prop-types";
import * as React from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const Spiner = ({ showspiner }) => {
  const [open, setOpen] = React.useState(showspiner || false);

  React.useEffect(() => {
    setOpen(showspiner || false);
  }, [showspiner]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

// Add prop validation
Spiner.propTypes = {
  showspiner: PropTypes.bool,
};
