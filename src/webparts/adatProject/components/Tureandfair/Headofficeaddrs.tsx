import { ArrowBackIos } from "@mui/icons-material";
import { Button, Grid, Link, Typography } from "@mui/material";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../AdatProject";
import { getMethod } from "../../../../globalcomponents/axios/api";
import { endPoints } from "../../../../globalcomponents/axios/endPoints";
import DropDown from "../../../../globalcomponents/components/Dropdown";
import InputField from "../../../../globalcomponents/components/InputField";
import {
  prevstep,
  setheadofficeaddress,
} from "../../../../globalcomponents/redux/tnfreducer";
import { headofficevaliadsation } from "./validation";

type proptype = {
  setStepper: React.Dispatch<React.SetStateAction<number>>;
};

function Headofficeaddrs({ setStepper }: proptype) {
  const headofficeaddress = useAppSelector(
    (state) => state.tnfreducer.headofficeaddress
  );
  const dispatch = useAppDispatch();
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const submit = (value: object) => {
    dispatch(setheadofficeaddress(value));
    setStepper((state) => state + 1);
  };

  const back = (value: object) => {
    dispatch(setheadofficeaddress(value));
    dispatch(prevstep());
  };
  const getcountry = async () => {
    try {
      const data = await getMethod(endPoints.getCountry);
      setCountry(data.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const getstatebycountry = async (val: number) => {
    try {
      const data = await getMethod(endPoints.getStatebyCountry(val));
      setState(data.data.result);
    } catch (error) {}
  };

  const getcitybystate = async (val: number) => {
    try {
      const data: any = await getMethod(endPoints.getCitybyState(val));
      console.log(data);
      setCity(data.data.result);
    } catch (error) {}
  };

  const countrycb = (val: any) => {
    if (val) {
      getstatebycountry(val);
    }
  };

  useEffect(() => {
    getcountry();
  }, []);

  const statecb = (val: number) => {
    if (val) {
      getcitybystate(val);
    }
  };

  return (
    <>
      <div className="trueandfair_stepper_firm_details">
        <Typography color="primary" variant="h3">
          <b>Head Office Full Address</b>
        </Typography>
      </div>

      <br />
      <Formik
        initialValues={headofficeaddress}
        validationSchema={headofficevaliadsation}
        onSubmit={submit}
      >
        {({ values }: FormikProps<any>) => (
          <Form>
            <>
              <Link
                className="tnf_back_btn"
                sx={{ textTransform: "none" }}
                onClick={() => back(values)}
              >
                <ArrowBackIos sx={{ fontSize: "12px" }} /> Back
              </Link>
              <Grid container spacing={4} className="firmdetails_form_wrapper">
                <Grid item sm={12} md={6} lg={6} xl={6}>
                  <InputField
                    name="address1"
                    customlabel="Address 1"
                    placeholder="Type Here"
                  />
                </Grid>

                <Grid item sm={12} md={6} lg={6} xl={6}>
                  <InputField
                    name="address2"
                    customlabel="Address 2"
                    placeholder="Type Here"
                  />
                </Grid>

                <Grid item sm={12} md={6} lg={6} xl={6}>
                  <Grid container spacing={3}>
                    <Grid item sm={12} md={6} lg={6} xl={6}>
                      <InputField
                        name="pincode"
                        customlabel="Pin Code"
                        placeholder="-------"
                      />
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} xl={6}>
                      <DropDown
                        options={country}
                        name="country"
                        customlabel="Country"
                        placeholder="Select"
                        valuefield="id"
                        labelfield="countryName"
                        selectedfieldcb={countrycb}
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sm={12} md={6} lg={6} xl={6}>
                  <Grid container spacing={3}>
                    <Grid item sm={12} md={6} lg={6} xl={6}>
                      <DropDown
                        options={state}
                        name="state"
                        customlabel="State"
                        placeholder="Select"
                        valuefield="id"
                        labelfield="stateName"
                        selectedfieldcb={statecb}
                      />
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} xl={6}>
                      <DropDown
                        options={city}
                        name="city"
                        customlabel="City"
                        placeholder="Select"
                        valuefield="id"
                        labelfield="cityName"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
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
            </>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Headofficeaddrs;
