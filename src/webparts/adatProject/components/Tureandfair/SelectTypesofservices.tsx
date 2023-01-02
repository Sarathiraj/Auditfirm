import { ArrowBackIos } from "@mui/icons-material";
import { Collapse, Grid, Link, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import Selcttyperemove from "./selecttypesofservices/Selcttyperemove";
import SelectTypeAccordian from "./selecttypesofservices/SelectTypeAccordian";

const servicelist = [
  {
    name: "Adat",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quaerat voluptate. Consequatur, officia laborum quis cupiditate expedita laudantium voluptatum in quia, illo consectetur recusandae esse corporis dolorum amet fuga accusantium!",
  },
  {
    name: "Quality Policy and Audit methodology",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quaerat voluptate. Consequatur, officia laborum quis cupiditate expedita laudantium voluptatum in quia, illo consectetur recusandae esse corporis dolorum amet fuga accusantium!",
  },
  {
    name: "Technical Guidence",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quaerat voluptate. Consequatur, officia laborum quis cupiditate expedita laudantium voluptatum in quia, illo consectetur recusandae esse corporis dolorum amet fuga accusantium!",
  },
  {
    name: "Monitoring",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quaerat voluptate. Consequatur, officia laborum quis cupiditate expedita laudantium voluptatum in quia, illo consectetur recusandae esse corporis dolorum amet fuga accusantium!",
  },
];

type proptype = {
  setStepper: React.Dispatch<React.SetStateAction<number>>;
};

type preference = {
  name: string;
  text: string;
};

function SelectTypesofservices({ setStepper }: proptype) {
  const [serviceList, setServiceList] = useState(servicelist);
  const [preference, setPreference] = useState<Array<preference>>([]);

  const addpreference = (data: any, ind: number) => {
    setServiceList((state) =>
      state.filter((servicelist, indx) => ind !== indx)
    );
    setPreference((state) => [...state, { ...data }]);
  };

  const removepreference = (data: any, ind: number) => {
    setPreference((state: any) =>
      state.filter((servicelist: preference, indx: number) => ind !== indx)
    );
    setServiceList((state: any) => [...state, { ...data }]);
  };

  return (
    <>
      <div className="trueandfair_stepper_firm_details">
        <Typography color="primary" variant="h3">
          <b>Select types of services </b>
        </Typography>
        <Typography variant="h6">
          Click plus/minus icon to add/remove service
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
      <Grid container sx={{ width: "90%" }}>
        <Grid item lg={4} md={4} sm={4}>
          <Typography variant="h4" className="service_list_heading">
            Service List
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={4}>
          <Typography variant="h4" className="service_list_heading">
            Preference
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={4}>
          <Typography variant="h4" className="service_list_heading">
            Service Start Date
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ width: "90%" }}>
        <Grid item lg={4} md={4} sm={4}>
          <TransitionGroup>
            {serviceList.map((servicelist, ind) => (
              <Collapse key={`serviselist${ind}`} unmountOnExit>
                <SelectTypeAccordian
                  data={servicelist}
                  index={ind}
                  handleclick={addpreference}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </Grid>
        <Grid item lg={8} md={8} sm={8}>
          <TransitionGroup>
            {preference.map((pref, ind) => (
              <Collapse key={`preference${ind}`}>
                <Selcttyperemove
                  data={pref}
                  handlechange={removepreference}
                  index={ind}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </Grid>
      </Grid>

      <br />
      <br />
      <br />
      <Button
        variant="contained"
        onClick={() => setStepper((state) => state + 1)}
      >
        Next
      </Button>
    </>
  );
}

export default SelectTypesofservices;
