import React from "react";
import RingImage from "../assets/svg/ring.svg";
import EllipseImage from "../assets/svg/ellipse.svg";

const JournalTile = () => {
  return (
    <div className="relative border w-[750px] h-60 bg-daisy shadow-md rounded-2xl ">
      {/* <div className="absolute top-6 -left-2">
        <img src={RingImage} alt="" />
        <img src={RingImage} alt="" />
        <img src={RingImage} alt="" />
      </div>
      <div className="absolute flex flex-col top-7 left-2 gap-1">
        <img src={EllipseImage} alt="" />
        <img src={EllipseImage} alt="" className="" />
        <img src={EllipseImage} alt="" className="mt-1" />
      </div> */}
      <div className="ml-8">
        <p className="text-2xl mt-3">I got an STI</p>
        <p className="">20th August, 1994</p>
        <p className="">
          Lorem ipsum dolor sit amet. Aut pariatur dolores eum quod dolores est
          molestias earum. Qui quasi Quis sit voluptas accusamus id iure sequi.
          Nam maiores explicabo cum sunt sint sed officiis voluptatum ut galisum
          cupiditate ea sint...
        </p>
      </div>
    </div>
  );
};

export default JournalTile;
