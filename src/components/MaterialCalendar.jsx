import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import React from "react";

const MaterialCalendar = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar"]}>
          <DateCalendar
            referenceDate={dayjs("2022-04-17")}
            views={["year", "month", "day"]}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default MaterialCalendar;
