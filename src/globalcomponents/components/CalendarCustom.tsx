import * as React from "react";
import dayjs from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { ClickAwayListener, IconButton } from "@mui/material";

dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})(({ theme, dayIsBetween, isFirstDay, isLastDay }: any) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  }),
  ...(isLastDay && {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  }),
}));

export default function CalendarWeek({
  onchange,
  value,
  component,
  dayorweek,
}: any) {
  //   const [value, setValue] = React.useState(dayjs("2022-04-07"));
  const [calendar, setCalendar] = React.useState(false);
  const calendarref = React.useRef();

  const renderWeekPickerDay = (
    date: any,
    selectedDates: any,
    pickersDayProps: any
  ) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = value?.startOf("week");
    const end = value?.endOf("week");

    const dayIsBetween = date?.isBetween(start, end, null, "[]");
    const isFirstDay = date?.isSame(start, "day");
    const isLastDay = date?.isSame(end, "day");

    return (
      <>
        <Grow in={true}>
          <div>
            <CustomPickersDay
              {...pickersDayProps}
              disableMargin
              dayIsBetween={dayorweek == "week" && dayIsBetween}
              isFirstDay={isFirstDay}
              isLastDay={isLastDay}
            />
          </div>
        </Grow>
      </>
    );
  };

  const handleClickAway = () => {
    setCalendar(false);
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
        }}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <div style={{ marginRight: 10 }}>
            <div onClick={() => setCalendar((state) => !state)}>
              {component}
            </div>
            <Grow
              in={calendar}
              style={{
                position: "absolute",
                zIndex: 100,
                top: "70px",
                left: -150,
              }}
              ref={calendarref}
            >
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    label="Week picker"
                    value={value}
                    onChange={(e) => {
                      onchange(e);
                      setCalendar(false);
                    }}
                    renderDay={renderWeekPickerDay}
                    renderInput={(params) => <TextField {...params} />}
                    inputFormat="'Week of' MMM d"
                  />
                </LocalizationProvider>
              </div>
            </Grow>
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
}
