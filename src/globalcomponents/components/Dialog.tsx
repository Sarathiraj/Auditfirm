import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import cancelbtn from "../icons/closebtn.svg";
import { Slide, Typography, Zoom } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

type dialogtype = {
  open: boolean;
  handleClose: any;
  component: React.ReactElement;
  closeButton?: boolean;
  title?: React.ReactNode | String;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox(props: dialogtype) {
  const { open, title, handleClose, component, closeButton = false } = props;

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        hideBackdrop={true}
        TransitionComponent={Transition}
      >
        <DialogTitle id="alert-dialog-title">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <Typography variant="h2">
              <b>{title}</b>
            </Typography>
            {closeButton && (
              <IconButton onClick={handleClose}>
                {/* <img src={cancelbtn} /> */}
              </IconButton>
            )}
          </div>
        </DialogTitle>
        <DialogContent style={{ margin: "0px 20px" }}>
          <div style={{ minWidth: "350px", padding: "0px  0px 20px 0px" }}>
            {component}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
