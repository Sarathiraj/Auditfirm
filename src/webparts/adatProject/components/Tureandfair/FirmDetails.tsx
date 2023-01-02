import { Button, Grid, Link, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import React, { useState } from "react";
import InputField from "../../../../globalcomponents/components/InputField";
import { firmdetailsvalidation } from "./validation";
import "./firmdetails.css";
import { ArrowBackIos } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../AdatProject";
import {
  nextstep,
  setfirmdetails,
} from "../../../../globalcomponents/redux/tnfreducer";

type proptype = {
  setStepper: React.Dispatch<React.SetStateAction<number>>;
};

function FirmDetails({ setStepper }: proptype) {
  let firmdetails = useAppSelector((state) => state.tnfreducer.firmdetails);
  const dispatch = useAppDispatch();

  const submit = (values: Object) => {
    dispatch(nextstep());
    dispatch(setfirmdetails(values));
  };

  return (
    <>
      <div className="trueandfair_stepper_firm_details">
        <Typography color="primary" variant="h3">
          <b>Firm Details</b>
        </Typography>
        <Typography color="error" variant="h6">
          (*All fields are Mondatory)
        </Typography>
      </div>

      <Link
        className="tnf_back_btn"
        sx={{ textTransform: "none" }}
        onClick={() => setStepper((state) => state - 1)}
      >
        <ArrowBackIos sx={{ fontSize: "12px" }} /> Back
      </Link>
      <br />

      <Formik
        initialValues={firmdetails}
        validationSchema={firmdetailsvalidation}
        onSubmit={submit}
      >
        <Form>
          <Grid container spacing={4} className="firmdetails_form_wrapper">
            <Grid item sm={6} md={4} lg={4} xl={4}>
              <InputField
                name="firmname"
                customlabel="Firm Name"
                placeholder="Your Firm Name Here"
                required
              />
            </Grid>
            <Grid item sm={6} md={4} lg={4} xl={4}>
              <InputField
                name="registartionno"
                customlabel="Registration Number"
                placeholder="8 Character Authentication"
                required
                type={"number"}
                inputProps={{ maxLength: 12 }}
              />
            </Grid>

            <Grid item sm={6} md={4} lg={4} xl={4}>
              <InputField
                name="aqmmscore"
                customlabel="AQMM Score* (Numeric)"
                placeholder="0 to 600 Max"
                required
                type="number"
              />
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="Stepper_submit_btn_container">
            <Button
              variant="contained"
              type="submit"
              className="Stepper_submit_btn"
            >
              Next
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default FirmDetails;
