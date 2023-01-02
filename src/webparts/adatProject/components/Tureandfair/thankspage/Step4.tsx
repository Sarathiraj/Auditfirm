import { Edit } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import React from "react";

function Step4() {
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
                  Service type
                </Typography>
              </th>
              <th>
                <Typography variant="h3" className="text_grey2">
                  Start Date
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 1].map((va, ind) => (
              <tr key={`tablerow${ind}`}>
                <td>
                  <Typography variant="h4" className="text_grey2">
                    asd
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

        <br />
        <br />
        <br />
        <Typography
          color="primary"
          variant="h2"
          sx={{ alignSelf: "flex-start" }}
        >
          Please Share Your comments if any{" "}
          <span style={{ color: "#878f9a" }}>(Optional)</span>
        </Typography>

        <br />
        <TextField
          multiline
          rows={4}
          fullWidth
          placeholder="Please Enter Your Comments Here"
        />
      </div>
    </>
  );
}

export default Step4;
