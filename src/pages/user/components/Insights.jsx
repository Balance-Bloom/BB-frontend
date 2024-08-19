import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineCalendar } from "react-icons/ai";
import { IoMdHappy, IoMdSad } from "react-icons/io";
import LogSymptomModal from "../../../components/LogSymptomModal"; // Ensure this component is correctly implemented
import CardOfInsights from "./CardOfInsights";
import SectionOfInsights from "../../../components/SectionOfInsights";
import InsightCard from "../../../components/InsightCard";

const Insights = () => {
  return (
    <div className=" p-6 bg-gray-50">
      {/* Heading Section */}
      <div className="heading flex w-full justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Period Insights</h1>
      </div>

      {/* Insights Container */}
      <div className="gap-6">
        {/* Insight Item: Mood Tracking */}
        <SectionOfInsights />
      </div>
    </div>
  );
};

export default Insights;
