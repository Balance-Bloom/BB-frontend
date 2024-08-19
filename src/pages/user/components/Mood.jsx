import React from "react";
import { useNavigate } from "react-router-dom";
import Cramps from "../../../assets/images/cramps1.jpeg";
import Cravings from "../../../assets/images/cravings.jpg";
import MoodSwings from "../../../assets/images/mood-swings.webp";
import { BsArrowRightShort } from "react-icons/bs";
import BigButton from "../../../components/BigButton";

const Mood = () => {
  const navigate = useNavigate();

  const handleLogSymptom = () => {
    navigate("/log-symptom");
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center shadow-lg p-8 rounded-lg bg-white">
        <div className="w-full text-center pb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Menstrual Cycle Insights
          </h2>
          <p className="mb-6 text-md text-gray-600">
            Understanding your symptoms can help you manage your menstrual cycle
            more effectively. Track your symptoms, and we'll provide insights to
            help you better understand your body.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={Cramps}
                  alt="Cramps"
                  className="rounded-lg hover:shadow-lg transition-all"
                />
                <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-t-lg">
                  Cramps
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={MoodSwings}
                  alt="Mood Swings"
                  className="rounded-lg hover:shadow-lg transition-all"
                />
                <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-t-lg">
                  Mood swings
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={Cravings}
                  alt="Cravings"
                  className="rounded-lg hover:shadow-lg transition-all"
                />
                <span className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-t-lg">
                  Cravings
                </span>
              </div>
              <button
                className="flex items-center text-deepPink border border-transparent hover:border-deepPink transition-all px-4 py-2 rounded-lg hover:shadow-lg mt-2"
                aria-label="See all insights"
              >
                See All Insights <BsArrowRightShort className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <BigButton onClick={handleLogSymptom} buttonText="Log symptom" />
        </div>
      </div>
    </div>
  );
};

export default Mood;
