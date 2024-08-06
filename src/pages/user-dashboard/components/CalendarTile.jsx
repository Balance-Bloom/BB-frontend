import React from "react";
import DashboardTile from "./DashboardTile";
import {
  ArrowRight,
  ArrowLeft,
  LocalFireDepartment,
} from "@mui/icons-material";
import { Droplet } from "lucide-react";
import { CalendarDateRangeIcon } from "@heroicons/react/20/solid";

const CalendarTile = () => {
  return (
    <DashboardTile
      styles=" w-44 rounded-l-[6px] shadow-xl bg-white shadow-lg"
      children={
        <div className="flex flex-col justify-center items-center gap-7 pt-3 ">
          <p>
            <ArrowLeft />
            February 2018
            <ArrowRight />
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-red-600 text-sm">
              <Droplet
                // width={20}
                className="text-red-600 inline bg-red-200 rounded-[100%] p-1 mr-3"
              />
              Menstruation
            </p>
            <p className="text-green-600 text-sm">
              <LocalFireDepartment
                // width={20}
                className="text-green-600 inline bg-green-200 rounded-[100%] p-1 mr-3"
              />
              Ovulation
            </p>
            <p className="text-blue-600 text-sm">
              <CalendarDateRangeIcon
                width={25}
                className="text-blue-600 inline bg-blue-200 rounded-[100%] p-1 mr-3"
              />
              New cycle
            </p>
          </div>
        </div>
      }
    />
  );
};

export default CalendarTile;
