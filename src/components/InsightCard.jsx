import React from "react";
import { SmileIcon } from "lucide-react";
import { CalendarDateRangeIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons/faVenusMars";
import { BsArrowRightShort } from "react-icons/bs";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import LogSymptomModal from "./LogSymptomModal";

const InsightCard = () => {
  return (
    <div className="secContainer grid items-center flex-basis mt-8">
      <div className="w-full justify-center rounded-lg flex flex-col pb-6 px-6">
        {/* <h1 className="font-sans font-semibold mb-4">
          Today's mood or symptoms
        </h1> */}
        <div className="grid items-center secContainer gap-2 ">
          <div className="single customer items-center justify-between text-fuchsia-600 text-sm flex">
            <div>
              <FontAwesomeIcon
                icon={faVenusMars}
                size="2x"
                color="#c026d3"
                // width={20}
                className="text-fuchsia-600 inline bg-fuchsia-200 rounded-[50%] p-3 mr-3 "
              />
            </div>
            <div className=" customerDetails flex justify-between flex-1">
              <span className="text-base font-semibold block">
                Sex and sex drive
              </span>
              <div className="duration font-medium">
                <LogSymptomModal />
              </div>
            </div>
          </div>
          <div className="text-deepPink text-sm single customer items-center justify-between flex">
            <div>
              <SmileIcon
                size={60}
                className="text-deepPink inline bg-pink  rounded-[50%] p-3 mr-3 "
              />
            </div>
            <div className=" customerDetails flex justify-between flex-1">
              <span className="text-base font-semibold block">Mood</span>
              <div className="duration font-medium">
                <LogSymptomModal />
              </div>
            </div>
          </div>
          <div className="text-coral text-sm single customer items-center justify-between flex">
            <div>
              <CalendarDateRangeIcon
                width={60}
                className="text-coral inline bg-coral/50  rounded-[50%] p-3 mr-3"
              />
            </div>
            <div className=" customerDetails flex justify-between flex-1">
              <span className="text-base font-semibold block">Symptoms</span>
              <div className="duration font-medium">
                <LogSymptomModal />
              </div>
            </div>
          </div>
          <div className="text-coral text-sm single customer items-center justify-between flex">
            <div>
              <CalendarDateRangeIcon
                width={60}
                className="text-coral inline bg-coral/50  rounded-[50%] p-3 mr-3"
              />
            </div>
            <div className=" customerDetails flex justify-between flex-1">
              <span className="text-base font-semibold block">Symptoms</span>
              <div className="duration font-medium">
                <LogSymptomModal />
              </div>
            </div>
          </div>
          <div className="text-coral text-sm single customer items-center justify-between flex">
            <div>
              <CalendarDateRangeIcon
                width={60}
                className="text-coral inline bg-coral/50  rounded-[50%] p-3 mr-3"
              />
            </div>
            <div className=" customerDetails flex justify-between flex-1">
              <span className="text-base font-semibold block">Symptoms</span>
              <div className="duration font-medium">
                <LogSymptomModal />
              </div>
            </div>
          </div>
          <div className="text-coral text-sm single customer items-center justify-between flex">
            <div>
              <CalendarDateRangeIcon
                width={60}
                className="text-coral inline bg-coral/50  rounded-[50%] p-3 mr-3"
              />
            </div>
            <div className=" customerDetails flex justify-between flex-1">
              <span className="text-base font-semibold block">Symptoms</span>
              <div className="duration font-medium">
                <LogSymptomModal />
              </div>
            </div>
          </div>
          <div className="text-coral text-sm single customer items-center justify-between flex">
            <div>
              <CalendarDateRangeIcon
                width={60}
                className="text-coral inline bg-coral/50  rounded-[50%] p-3 mr-3"
              />
            </div>
            <div className=" customerDetails flex justify-between flex-1">
              <span className="text-base font-semibold block">Symptoms</span>
              <div className="duration font-medium">
                <LogSymptomModal />
              </div>
            </div>
          </div>
          {/* <div className="text-coral text-sm">
            <CalendarDateRangeIcon
              width={25}
              className="text-coral inline bg-coral/50 rounded-[100%] p-1 mr-3"
            />
            Vaginal Discharge
          </div>
          <div className="text-coral text-sm">
            <CalendarDateRangeIcon
              width={25}
              className="text-coral inline bg-coral/50 rounded-[100%] p-1 mr-3"
            />
            Pregnancy test
          </div> */}
        </div>
        {/* Heading above the icon */}
        <h3 className="text-center"></h3>
        {/* <LogSymptomModal /> */}
      </div>
    </div>
  );
};

export default InsightCard;
