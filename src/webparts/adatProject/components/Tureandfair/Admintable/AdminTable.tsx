import { InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./adminleveltable.css";
import InputMask from "react-input-mask";

function AdminTable({
  handlechange,
  adminusers,
}: {
  handlechange: any;
  adminusers: any;
}) {
  const [touchedadminusers, setTouchedadminusers] = useState([
    { fullname: false, phoneno: false },
    { fullname: false, phoneno: false },
    { fullname: false, phoneno: false },
  ]);

  const touchedfields = (ind: any) => {
    setTouchedadminusers((state) =>
      state.map((item, indx) =>
        ind == indx ? { fullname: true, phoneno: true } : item
      )
    );
  };

  return (
    <>
      <table className="tnf_adminLevel_table">
        <thead>
          <tr>
            <th>
              <Typography variant="h4" className="text_grey2">
                Full Name
              </Typography>
            </th>
            <th>
              <Typography variant="h4" className="text_grey2">
                E-mail ID
              </Typography>
            </th>
            <th>
              <Typography variant="h4" className="text_grey2">
                Mobile No.
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 1, 1].map((va, ind) => (
            <tr key={`admintablerow${ind}`}>
              <td>
                {/* <TextField variant="standard" placeholder="Type Name Here" /> */}
                <input
                  type="text"
                  name="fullname"
                  className="tnf_admin_phone_no"
                  // className={`tnf_admin_phone_no ${
                  //   (adminusers[ind].checkempty() ||
                  //     (adminusers[ind].checkempty() &&
                  //       touchedadminusers[ind].fullname) &&
                  //   adminusers[ind].phoneno.fullname &&
                  //   "error"
                  // }`}
                  placeholder="Type Name Here"
                  onChange={(e) => {
                    handlechange(e, ind);
                  }}
                />
              </td>
              <td>Lorem@ipsum.com</td>
              <td>
                <InputMask
                  name="phoneno"
                  mask="+\9\1 99999 99999"
                  disabled={false}
                  maskChar=" "
                  placeholder="+91 ----- -----"
                  className="tnf_admin_phone_no"
                  // className={`tnf_admin_phone_no ${
                  //   (adminusers[ind].checkempty() ||
                  //     (adminusers[ind].checkempty() &&
                  //       adminusers[ind].phoneno.length < 10)) &&
                  //   "error"
                  // }`}
                  onBlur={() => touchedfields(ind)}
                  onChange={(e) => handlechange(e, ind)}
                >
                  {/* {() => <TextField />} */}
                </InputMask>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AdminTable;
