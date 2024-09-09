import React from "react";
import FilterBar from "./components/FilterBar";
import "../../App.css";
import ForumHero from "../../assets/images/bg-2.png";
import ForumFirstSec from "./components/ForumFirstSec";

const ForumPage = () => {
  return (
    <div>
      <FilterBar />
      <div className="">
        {/* <img src={ForumHero} alt="color splash" className="h-1/5 w-full" /> */}
        <ForumFirstSec className="" />
      </div>
    </div>
  );
};

export default ForumPage;
