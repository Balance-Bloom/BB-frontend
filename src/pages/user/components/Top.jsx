import React from "react";
import Video from "../../../assets/videos/period-tracking.mp4";
import "../../../App.css";
import { Link } from "react-router-dom";
import { getDetails } from "../../../services/config";
import _ from "lodash";

const Top = () => {
  const { name } = getDetails();
  const capitalizedName = _.capitalize(name);

  return (
    <div className="topsection  flex flex-col gap-10">
      <div className="title">
        <h1 className="text-3xl text-black font-bold">
          Welcome to Bloom & Balance
        </h1>
        <p className="text-lg font-medium">
          Hello {_.capitalize(name)}, Welcome back!
        </p>
      </div>

      <div className="relative w-full h-60 flex-col justify-center flex p-10 items-center rounded-2xl overflow-hidden">
        <h1
          className="z-[100] text-xl font-medium text-white"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
        >
          Track your period with ease
        </h1>
        <p
          className="z-[100] text-white text-xl"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
        >
          Access to expert insights and articles on female reproductive health
        </p>
        <div className="gap-1 flex items-center mt-4">
          <Link
            to="/articles"
            className="shadow-none p-2 rounded-lg bg-white text-deepPink z-[100] hover:bg-pink hover:text-white"
          >
            Explore more
          </Link>
        </div>
        <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 ">
          <video
            src={Video}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover bg-center"
          ></video>

          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Top;

{
  /* <div className="leftcard flex items-center">
          <div className="relative p-2 h-52 rounded-xl main justify-between flex">
            <div className="textDiv z-[100] ">
              <h1 className="text-base pb-2 font-medium text-black">My stat</h1>

              <div className="flex gap-4 items-center">
                <span>
                  Today <br />
                  <small className="text-base block font-medium py-2">
                    No symptoms
                  </small>
                </span>
                <span>
                  This Month <br /> <small>16 symptoms</small>
                </span>
              </div>

              <span className="flex items-center link mt-4 cursor-pointer ">
                more
                <LocalFireDepartmentOutlined className="hover:translate-x-2 transition-[0.3s_ease]" />
              </span>
            </div>

            <div className="imgDiv -translate-y-5">
              {/* <img src={FemaleOrgan} alt="" className="w-52" /> */
}
{
  /* </div>
          </div>
        </div> */
}
