import React from "react";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import SymptomTile from "../../../components/SymptomTile";

import MaterialCalendar from "../../../components/MaterialCalendar";

import SexDrive from "../../../components/SexDrive";
import Moods from "../../../components/Moods";
import Feelings from "../../../components/Feelings";
import VaginalDischarge from "../../../components/VaginalDischarge";

const Sypmtoms = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="flex flex-row justify-center">
        <div className="py-14 flex flex-col gap-4">
          <h1 className="text-xl">Categories</h1>
          <SexDrive />
          <Moods />
          <Feelings />
          <VaginalDischarge />
        </div>
      </div>
    </>
  );
};

export default Sypmtoms;
