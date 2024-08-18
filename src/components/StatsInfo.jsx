import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const StatsInfo = ({ border }) => {
  return (
    <div className="font-sans w-full">
      <div
        className={` border-b-[0.5px] py-3 ${border} font-sans flex flex-col gap-y-2`}
      >
        <div className="flex text-subheader text-sm justify-between">
          <p>Predicted next period</p>
          <InformationCircleIcon width={20} className="" />
        </div>
        <div className="flex justify-between">
          <p>26 days</p>
          <CheckCircleIcon width={20} className="text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default StatsInfo;
