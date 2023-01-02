import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
  name: "tnfreducer",
  initialState: {
    stepper: 0,
    firmdetails: {
      firmname: "",
      registartionno: "",
      aqmmscore: "",
    },
    headofficeaddress: {
      address1: "",
      address2: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
    },
    adminusers: [
      {
        fullname: "",
        phoneno: "",
      },
      {
        fullname: "",
        phoneno: "",
      },
      {
        fullname: "",
        phoneno: "",
      },
    ],
  },
  reducers: {
    setfirmdetails(state, { payload }) {
      state.firmdetails = payload;
    },
    setheadofficeaddress(state, { payload }) {
      state.headofficeaddress = payload;
    },
    setadminusers(state, { payload }) {
      state.adminusers = payload;
    },
    settnfdata(state, { payload }) {
      return { ...state, payload };
    },
    nextstep(state) {
      state.stepper = state.stepper + 1;
    },
    prevstep(state) {
      state.stepper = state.stepper - 1;
    },
    gotostep(state, { payload }) {
      state.stepper = payload;
    },
  },
});

export const {
  setfirmdetails,
  gotostep,
  nextstep,
  prevstep,
  setheadofficeaddress,
  setadminusers,
} = counterslice.actions;
export default counterslice.reducer;
