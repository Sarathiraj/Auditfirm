import { ArrowBackIos } from "@mui/icons-material";
import { Button, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../AdatProject";
import { setadminusers } from "../../../../globalcomponents/redux/tnfreducer";
import AdminTable from "./Admintable/AdminTable";
import { adminuservalidation } from "./validation";

type proptype = {
  setStepper: React.Dispatch<React.SetStateAction<number>>;
};

function AdminUsers({ setStepper }: proptype) {
  // const [adminusers, setAdminusers] = useState();
  const adminusers = useAppSelector((state) => state.tnfreducer.adminusers);
  const dispatch = useAppDispatch();

  const submit = () => {
    adminuservalidation.isValid(adminusers[0]).then((err) => {
      console.log(err);
      if (err) {
      }
    });

    setStepper((state) => state + 1);
  };

  const changevalues = (e: any, ind: number) => {
    const users = adminusers.map((val, indx) =>
      ind == indx
        ? { ...val, [e.target.name]: e.target.value.replace(/_/g, "") }
        : val
    );

    dispatch(setadminusers(users));
  };

  return (
    <>
      <div className="trueandfair_stepper_firm_details">
        <Typography color="primary" variant="h3">
          <b>Add Firm Level Admin Users</b>
        </Typography>
        <Typography color="error" variant="h6">
          (Minimum 1 Admin user details should be provided)
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

      <AdminTable handlechange={changevalues} adminusers={adminusers} />
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
          onClick={submit}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default AdminUsers;
