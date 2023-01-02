import React from "react";
import { Edit } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";

function Step3() {
  return (
    <>
      <div className="tnf_thanks_step_container_wrapper">
        <div className="tnf_thanks_step_container">
          <div className="tnf_thanks_step_step_round">3</div>
          <Typography variant="h4" className="tnf_thanks_step_textfield">
            Admin Users
          </Typography>

          <Button
            variant="contained"
            startIcon={<Edit />}
            // className="tnf_edit_success"
            disableElevation
          >
            Edit
          </Button>
        </div>
        <br />
        <Typography
          className="color_grey2"
          variant="h2"
          sx={{ alignSelf: "flex-start" }}
        >
          Service Type
        </Typography>

        <br />
        <table className="tnf_adminLevel_table tnf_adminLevel_table_final">
          <thead>
            <tr>
              <th>
                <Typography variant="h3" className="text_grey2">
                  Full Name
                </Typography>
              </th>
              <th>
                <Typography variant="h3" className="text_grey2">
                  E-mail ID
                </Typography>
              </th>
              <th>
                <Typography variant="h3" className="text_grey2">
                  Mobile No.
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 1, 1].map((va, ind) => (
              <tr key={`tablerow${ind}`}>
                <td>
                  <Typography variant="h4" className="text_grey2">
                    asd
                  </Typography>
                </td>
                <td>
                  <Typography variant="h4" className="text_grey2">
                    Lorem@ipsum.com
                  </Typography>
                </td>
                <td>
                  <Typography variant="h4" className="text_grey2">
                    asd
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
    </>
  );
}

export default Step3;
