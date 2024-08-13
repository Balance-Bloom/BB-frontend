import React from "react";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import SymptomTile from "../../../components/SymptomTile";
import NavBar from "../../../components/NavBar";
import MaterialCalendar from "../../../components/MaterialCalendar";

const Sypmtoms = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div className="flex flex-row justify-center">
        <div className="py-14 flex flex-col gap-4">
          <h1 className="text-xl">Categories</h1>
          <SymptomTile
            headertext={<p className="">Sex and sex drive</p>}
            styles="bg-white w-52 h-36 shadow-xl rounded-xl flex flex-col items-center justify-center "
            icon={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon1={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon2={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon3={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon4={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon5={<FaceFrownIcon width={40} className="text-fuschia inline" />}
          />
          <SymptomTile
            headertext={<p className="">Mood</p>}
            styles="bg-white w-52 h-36 shadow-xl rounded-xl flex flex-col items-center justify-center "
            icon={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon1={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon2={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon3={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon4={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon5={<FaceFrownIcon width={40} className="text-fuschia inline" />}
          />
          <SymptomTile
            headertext={<p className="">Symptoms</p>}
            styles="bg-white w-52 h-36 shadow-xl rounded-xl flex flex-col items-center justify-center "
            icon={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon1={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon2={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon3={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon4={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon5={<FaceFrownIcon width={40} className="text-fuschia inline" />}
          />
          <SymptomTile
            headertext={<p className="">Vaginal discharge</p>}
            styles="bg-white w-52 h-36 shadow-xl rounded-xl flex flex-col items-center justify-center "
            icon={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon1={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon2={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon3={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon4={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon5={<FaceFrownIcon width={40} className="text-fuschia inline" />}
          />
          <SymptomTile
            headertext={<p className="">Physical activity</p>}
            styles="bg-white w-52 h-36 shadow-xl rounded-xl flex flex-col items-center justify-center "
            icon={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon1={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon2={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon3={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon4={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon5={<FaceFrownIcon width={40} className="text-fuschia inline" />}
          />
          <SymptomTile
            headertext={<p className="">Oral contraceptives</p>}
            styles="bg-white w-52 h-36 shadow-xl rounded-xl flex flex-col items-center justify-center "
            icon={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon1={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon2={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon3={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon4={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon5={<FaceFrownIcon width={40} className="text-fuschia inline" />}
          />
          <SymptomTile
            headertext={<p className="">Vaginal discharge</p>}
            styles="bg-white w-52 h-36 shadow-xl rounded-xl flex flex-col items-center justify-center "
            icon={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon1={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon2={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon3={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon4={<FaceFrownIcon width={40} className="text-fuschia inline" />}
            icon5={<FaceFrownIcon width={40} className="text-fuschia inline" />}
          />
        </div>
        <div className="">
          <MaterialCalendar />
        </div>
      </div>
    </>
  );
};

export default Sypmtoms;
