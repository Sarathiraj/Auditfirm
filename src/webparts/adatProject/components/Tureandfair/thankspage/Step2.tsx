import { Edit } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function Step2() {
  return (
    <>
      <div className="tnf_thanks_step_container_wrapper">
        <div className="tnf_thanks_step_container">
          <div className="tnf_thanks_step_step_round">2</div>
          <Typography variant="h4" className="tnf_thanks_step_textfield">
            Head Office*
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

        <Grid container>
          <Grid
            item
            md={6}
            sm={6}
            lg={6}
            className="tnf_thanks_page_table_step2"
          >
            <Typography className="text_grey" variant="h5" gutterBottom>
              Address 1
            </Typography>
            <Typography color="primary" variant="h4">
              #23 The New Building ,1st Floor
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            lg={6}
            className="tnf_thanks_page_table_step2"
          >
            <Typography className="text_grey" variant="h5" gutterBottom>
              Address 2
            </Typography>
            <Typography color="primary" variant="h4">
              #23 The New Building ,1st Floor
            </Typography>
          </Grid>

          <Grid
            item
            md={12}
            sm={12}
            lg={12}
            className="tnf_thanks_page_table_step2 tnf_thanks_page_table_step2_box2"
          >
            <div>
              <Typography className="text_grey" variant="h5" gutterBottom>
                Pincode
              </Typography>
              <Typography color="primary" variant="h4">
                620002
              </Typography>
            </div>

            <div>
              <Typography className="text_grey" variant="h5" gutterBottom>
                City
              </Typography>
              <Typography color="primary" variant="h4">
                Bangalore
              </Typography>
            </div>

            <div>
              <Typography className="text_grey" variant="h5" gutterBottom>
                State
              </Typography>
              <Typography color="primary" variant="h4">
                Karnataka
              </Typography>
            </div>

            <div>
              <Typography className="text_grey" variant="h5" gutterBottom>
                Country
              </Typography>
              <Typography color="primary" variant="h4">
                India
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
    </>
  );
}

export default Step2;
