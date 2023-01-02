import {
  Button,
  Checkbox,
  Divider,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// import logo from "../../../../globalcomponents/icons/t&f/t&flogo.png";

import "./termsandcondition.css";

type proptype = {
  setStepper: React.Dispatch<React.SetStateAction<number>>;
};

function TermsandCondition({ setStepper }: proptype) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="termsandcondition_container">
      <div className="tnf_logo_wrap">
        {/* <img src={logo} className="tnf_logo" /> */}
      </div>

      <Typography variant="h1" color="primary">
        Welcome to True and Fair
      </Typography>
      <br />

      <div className="terms_and_condition_h2">
        <Typography variant="h3">Lorem ipsum</Typography>
      </div>

      <br />
      <br />

      <div className="termsandcondition_faq_container">
        <Paper elevation={2} className="termsandcondition_checkbox_container">
          <Checkbox
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setChecked(e.target.checked)
            }
          />
          <Link>
            <Typography variant="h4" style={{ fontFamily: "Poppins" }}>
              Terms and conditions
            </Typography>
          </Link>
        </Paper>

        <Link className="termsandcondition_faq">
          <Typography variant="h4">FAQs</Typography>
        </Link>
      </div>

      <Button
        variant="contained"
        sx={{ textTransform: "none", width: "200px" }}
        disabled={!checked}
        onClick={() => setStepper((state) => state + 1)}
      >
        Next
      </Button>
    </div>
  );
}

export default TermsandCondition;
