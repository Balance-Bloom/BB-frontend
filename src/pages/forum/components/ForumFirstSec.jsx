import React from "react";
import ForumCards from "../../../components/ForumCards";
import { Avatar } from "@mui/material";
import "../../../App.css";

const ForumFirstSec = () => {
  return (
    <div className="flex flex-col gap-9 items-center py-24">
      <ForumCards
        avatar={<Avatar />}
        headerText="Family Planning"
        postHeading="Contraceptive use: Share your experience"
        likes={<p className="text-sm">3.7K</p>}
        comments={<p className="text-sm">2.8K</p>}
        saves={<p className="text-sm">1.2K</p>}
      />
      <ForumCards />
      <ForumCards />
      <ForumCards />
    </div>
  );
};

export default ForumFirstSec;
