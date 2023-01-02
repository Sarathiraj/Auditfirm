import { CalendarMonth, RemoveCircleOutline } from "@mui/icons-material";
import { IconButton, Typography, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import dayjs from "dayjs";
import CalendarWeek from "../../../../../globalcomponents/components/CalendarCustom";
import { Box } from "@mui/system";

type proptype = {
  data: { name: string; text: string };
  handlechange?: any;
  index: number;
};

function Selcttyperemove({ data, handlechange, index }: proptype) {
  const [value, setValue] = useState<any>(dayjs().format());

  return (
    <div style={{ display: "flex" }}>
      <div className="selecttype_services_acoordian" style={{ margin: 0 }}>
        <Typography className="selecttype_services_acoordian_text">
          {data.name}
        </Typography>

        <IconButton color="error" onClick={() => handlechange(data, index)}>
          <RemoveCircleOutline />
        </IconButton>
      </div>

      <div className="selecttype_services_acoordian" style={{ margin: 0 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            inputFormat="DD MMM YYYY"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={({ inputRef, inputProps, InputProps }) => (
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <input
                  ref={inputRef}
                  {...inputProps}
                  className="calendarinput"
                />
                <div>{InputProps?.endAdornment}</div>
              </Box>
            )}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}

export default Selcttyperemove;
