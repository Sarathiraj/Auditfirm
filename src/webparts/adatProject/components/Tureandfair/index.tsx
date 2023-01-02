import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useAppDispatch, useAppSelector } from "../AdatProject";
import { gotostep } from "../../../../globalcomponents/redux/tnfreducer";
import AdminUsers from "./AdminUsers";
import FirmDetails from "./FirmDetails";
import Headofficeaddrs from "./Headofficeaddrs";
import SelectTypesofservices from "./SelectTypesofservices";
import TermsandCondition from "./TermsandCondition";
import Thankspage from "./Thankspage";
import "./trueandfaircontainer.css";

const StepperComponent = (
  step: number,
  setStepper: React.Dispatch<React.SetStateAction<number>>
) => {
  switch (step) {
    case 0:
      return <></>;
    case 1:
      return <FirmDetails setStepper={setStepper} />;
    case 2:
      return <Headofficeaddrs setStepper={setStepper} />;
    case 3:
      return <AdminUsers setStepper={setStepper} />;
    case 4:
      return <SelectTypesofservices setStepper={setStepper} />;
    case 5:
      return <></>;
  }
};

function TrueandFair() {
  const [stepperstepp, setStepperstep] = useState(4);
  const stepperstep = useAppSelector((state) => state.tnfreducer).stepper;
  const dispatch = useAppDispatch();
  console.log(useAppSelector((state) => state.tnfreducer));

  useEffect(() => {
    dispatch(gotostep(stepperstepp));
  }, [stepperstepp]);

  return (
    <div className="trueandfair_container_stepper">
      {stepperstep === 5 && <Thankspage />}
      {stepperstep !== 0 ? (
        stepperstep !== 5 && (
          <div className="trueandfair_container_stepper_wrapper">
            <Typography color="primary" variant="h1">
              TNF Onboarding Request Form
            </Typography>
            <br />
            <Stepper
              activeStep={stepperstep - 1}
              className="trueandfair_stepper"
            >
              <Step>
                <StepLabel>Basic details</StepLabel>
              </Step>
              <Step>
                <StepLabel>Head Office*</StepLabel>
              </Step>
              <Step>
                <StepLabel>Admin Users</StepLabel>
              </Step>
              <Step>
                <StepLabel>TNF Services*</StepLabel>
              </Step>
            </Stepper>
            <br />
            {StepperComponent(stepperstep, setStepperstep)}
          </div>
        )
      ) : (
        <TermsandCondition setStepper={setStepperstep} />
      )}
    </div>
  );
}

export default TrueandFair;
