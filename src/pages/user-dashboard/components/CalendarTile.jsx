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
      styles=" w-56 h-[400px] rounded-l-[6px] shadow-md bg-white shadow-lg flex flex-col items-center gap-7 pt-3 "
      children={
        <div className="">
          <p>
            <ArrowLeft />
            February 2018
            <ArrowRight />
          </p>
          <div className="flex flex-col gap-3">
            <p className="w-text-fuchsia-600 text-sm">
              <Droplet
                // width={20}
                className="text-fuchsia-600 inline bg-fuchsia-200 rounded-[100%] p-1 mr-3"
              />
              Menstruation
            </p>
            <p className="text-deepPink text-sm">
              <LocalFireDepartment
                // width={20}
                className="text-deepPink inline bg-pink rounded-[100%] p-1 mr-3"
              />
              Ovulation
            </p>
            <p className="text-coral text-sm">
              <CalendarDateRangeIcon
                width={25}
                className="text-coral inline bg-coral/50 rounded-[100%] p-1 mr-3"
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
