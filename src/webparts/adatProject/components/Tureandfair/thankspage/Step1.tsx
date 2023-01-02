import { Edit } from "@mui/icons-material";
import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import "./step.css";

function Step1() {
  return (
    <div className="tnf_thanks_step_container_wrapper">
      <div className="tnf_thanks_step_container">
        <div className="tnf_thanks_step_step_round">1</div>
        <Typography variant="h4" className="tnf_thanks_step_textfield">
          <b>Basic Details</b>
        </Typography>

        <Button variant="contained" startIcon={<Edit />}>
          Edit
        </Button>
      </div>
      <br />
      <Divider flexItem />
      <br />

      <div className="tnf_thanks_step_container">
        <div className="tnf_thanks_step_fields">
          <Typography className="text_grey" variant="h5" gutterBottom>
            Firm Name
          </Typography>
          <Typography className="text_grey2" variant="h3">
            <b>Delloite</b>
          </Typography>
        </div>

        <div className="tnf_thanks_step_fields">
          <Typography color="primary" variant="h5" gutterBottom>
            Registration Number
          </Typography>
          <Typography className="text_grey2" variant="h3">
            <b>88654214</b>
          </Typography>
        </div>

        <div className="tnf_thanks_step_fields">
          <Typography className="text_grey" variant="h5" gutterBottom>
            AQMM Score
          </Typography>
          <Typography className="text_grey2" variant="h3">
            <b>80</b>
          </Typography>
        </div>
      </div>
      <br />
      <Divider flexItem />

      <br />
    </div>
  );
}

export default Step1;
