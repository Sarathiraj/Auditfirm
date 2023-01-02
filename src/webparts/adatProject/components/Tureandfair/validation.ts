import * as Yup from "yup";

export const firmdetailsvalidation = Yup.object().shape({
  firmname: Yup.string().required("Please enter Firm Name"),
  registartionno: Yup.string()
    .required("please enter valid reg no")
    .max(8, "please enter valid reg no")
    .min(8, "please enter valid reg no"),
  aqmmscore: Yup.number()
    .required("Please enter aqmm score")
    .min(0, "Please enter aqmm score")
    .max(600, "Please enter aqmm score"),
});

export const headofficevaliadsation = Yup.object().shape({
  address1: Yup.string().required(),
  address2: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  country: Yup.string().required(),
  pincode: Yup.string().required(),
});

export const adminuservalidation = Yup.object().shape({
  fullname: Yup.string().required(),
  phoneno: Yup.string().required().trim().min(15).max(15),
});
