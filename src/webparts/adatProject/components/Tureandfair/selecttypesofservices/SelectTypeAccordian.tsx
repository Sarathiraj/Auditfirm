import {
  ControlPoint,
  ExpandLess,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Collapse, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import "./selecttypeaccordian.css";

type proptype = {
  handleclick?: any;
  data: { name: string; text: string };
  index: number;
};

function SelectTypeAccordian({
  handleclick,
  data: { name, text },
  index,
}: proptype) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse in={open}>
        <div className="selecttype_services_acoordian_open_container">
          <div className="selecttype_services_acoordian_open">
            <Typography className="selecttype_services_acoordian_text">
              {name}
            </Typography>
            <IconButton onClick={() => setOpen((state) => !state)}>
              <ExpandLess />
            </IconButton>

            <IconButton onClick={handleclick}>
              <ControlPoint />
            </IconButton>
          </div>
          <Typography>{text}</Typography>
        </div>
      </Collapse>
      <Collapse in={!open}>
        <div className="selecttype_services_acoordian">
          <Typography className="selecttype_services_acoordian_text">
            {name}
          </Typography>
          <IconButton onClick={() => setOpen((state) => !state)}>
            <KeyboardArrowDown />
          </IconButton>

          <IconButton onClick={() => handleclick({ name, text }, index)}>
            <ControlPoint />
          </IconButton>
        </div>
      </Collapse>
    </>
  );
}

export default SelectTypeAccordian;
