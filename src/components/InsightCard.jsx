import React from "react";
import {
  ArrowRight,
  ArrowLeft,
  LocalFireDepartment,
} from "@mui/icons-material";
import { Droplet, SmileIcon } from "lucide-react";
import { CalendarDateRangeIcon } from "@heroicons/react/20/solid";

import LogSymptomModal from "../pages/user/components/LogSymptomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons/faVenusMars";

const InsightCard = () => {
  return (
    <div className="">
      <div className="w-96 h-[352px] bg-white rounded-lg shadow-md flex flex-col p-6">
        <h1 className="font-sans font-semibold mb-4">
          Today's mood or symptoms
        </h1>
        <div className="flex flex-col gap-3">
          <p className=" text-fuchsia-600 text-sm">
            <FontAwesomeIcon
              icon={faVenusMars}
              size="1x"
              color="#c026d3"
              // width={20}
              className="text-fuchsia-600 inline bg-fuchsia-200 rounded-[100%] p-1 mr-3"
            />
            Sex and sex drive
          </p>
          <p className="text-deepPink text-sm">
            <SmileIcon
              // width={20}
              className="text-deepPink inline bg-pink rounded-[100%] p-1 mr-3"
            />
            Mood
          </p>
          <p className="text-coral text-sm">
            <CalendarDateRangeIcon
              width={25}
              className="text-coral inline bg-coral/50 rounded-[100%] p-1 mr-3"
            />
            Symptoms
          </p>
          <p className="text-coral text-sm">
            <CalendarDateRangeIcon
              width={25}
              className="text-coral inline bg-coral/50 rounded-[100%] p-1 mr-3"
            />
            Vaginal Discharge
          </p>
          <p className="text-coral text-sm">
            <CalendarDateRangeIcon
              width={25}
              className="text-coral inline bg-coral/50 rounded-[100%] p-1 mr-3"
            />
            Pregnancy test
          </p>
        </div>
        {/* Heading above the icon */}
        <h3 className="text-center"></h3>
        {/* <LogSymptomModal /> */}
      </div>
    </div>
  );
};

export default InsightCard;
