import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import "./thankspage.css";
import Step1 from "./thankspage/Step1";
import Step2 from "./thankspage/Step2";
import Step3 from "./thankspage/Step3";
import Step4 from "./thankspage/Step4";

function Thankspage() {
  return (
    <div className="tnf_thankspage">
      <Typography variant="h1" color="primary">
        <b>Thanks Message</b>
      </Typography>
      <br />
      <Typography variant="h3" color="primary" className="text_grey">
        <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
      </Typography>
      <br />
      <div className="tnf_request_formsummary">
        <Typography color="primary" variant="h1">
          <b>Request Form Summary</b>
        </Typography>
        <br />
        <Divider flexItem />
        <br />

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++  Steps ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <br />
        <br />
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
}

export default Thankspage;
