import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const PeriodStats = () => {
  return (
    <div className="bg-white rounded-lg shadow-md w-96 p-4">
      <div className="font-sans">
        <div className=" border-b-[0.5px] p-3 font-sans">
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
      <div className="font-sans">
        <div className=" border-b-[0.5px] p-3 font-sans">
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
      <div className="font-sans">
        <div className=" border-b-[0.5px] p-3 font-sans">
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
      <div className="font-sans">
        <div className=" border-b-[0.5px] p-3 font-sans">
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
      <div className="font-sans">
        <div className=" p-3 font-sans">
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
    </div>
  );
};

export default PeriodStats;
