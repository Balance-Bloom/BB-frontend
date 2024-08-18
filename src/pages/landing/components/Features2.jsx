import React from "react";
import TrackerImage from "../../../assets/images/calendar-removebg-preview.png";
import DiaryImage from "../../../assets/images/diary-removebg-preview.png";
import HealthInsightImage from "../../../assets/images/heartbeat-removebg-preview.png";
import SymptomImage from "../../../assets/images/symptom-removebg.png";
import ForumImage from "../../../assets/images/forum-removebg-preview.png";
import GynaeImage from "../../../assets/images/gynae.jpg";

const Features2 = () => {
  return (
    <div>
      <div className="features py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-center items-center">
            <img
              src={TrackerImage}
              alt="calendar"
              className="w-1/3 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Cycle Tracking</h2>
            <p className="text-md text-center">
              Keep track of your menstrual cycle with ease and accuracy.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={SymptomImage}
              alt="Feature Icon"
              className="w-1/3 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Symptom Logging</h2>
            <p className="text-md text-center">
              Log your symptoms and get personalized health insights.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={HealthInsightImage}
              alt="Feature Icon"
              className="w-1/3 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Health Insights</h2>
            <p className="text-md text-center">
              Receive tailored health tips based on your cycle.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={DiaryImage}
              alt="Feature Icon"
              className="w-1/3 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Journaling</h2>
            <p className="text-md text-center">
              Journal your experiences for better insights and reflections.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={GynaeImage}
              alt="Feature Icon"
              className="w-1/3 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Gynae Consult</h2>
            <p className="text-md text-center">
              Consult with a gynecologist for expert advice.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={ForumImage}
              alt="Feature Icon"
              className="w-1/3 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Forum</h2>
            <p className="text-md text-center">
              Join the community and share your experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;
