import React from "react";
import ForumCards from "../../../components/ForumCards";
import { Avatar } from "@mui/material";
import "../../../App.css";

const ForumFirstSec = () => {
  return (
    <div className="flex flex-col gap-9 items-center py-24">
      <ForumCards
        avatar={<Avatar />}
        headerText="Weight Journey"
        children={
          <p className="text-lg text-white ">
            Intermittent Fasting: Share your experience
          </p>
        }
      />
      <ForumCards />
      <ForumCards />
      <ForumCards />
    </div>
  );
};

export default ForumFirstSec;
