import React from "react";
import TrackerImage from "../../../assets/vectors/calendar.jpg";
import DiaryImage from "../../../assets/vectors/diary.jpg";
import HealthInsightImage from "../../../assets/vectors/heartbeat.jpg";
import SymptomImage from "../../../assets/images/symptom.jpg";
import ForumImage from "../../../assets/images/forum.jpg";

const Features2 = () => {
  return (
    <div>
      <div className="features py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature">
            <img
              src={TrackerImage}
              alt="calendar"
              className="w-1/2 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Cycle Tracking</h2>
            <p className="text-md">
              Keep track of your menstrual cycle with ease and accuracy.
            </p>
          </div>
          <div className="feature">
            <img
              src={SymptomImage}
              alt="Feature Icon"
              className="w-1/2 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Symptom Logging</h2>
            <p className="text-md">
              Log your symptoms and get personalized health insights.
            </p>
          </div>
          <div className="feature">
            <img
              src={HealthInsightImage}
              alt="Feature Icon"
              className="w-1/2 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Health Insights</h2>
            <p className="text-md">
              Receive tailored health tips based on your cycle.
            </p>
          </div>
          <div className="feature">
            <img
              src={DiaryImage}
              alt="Feature Icon"
              className="w-1/3 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Journaling</h2>
            <p className="text-md">
              Receive tailored health tips based on your cycle.
            </p>
          </div>
          <div className="feature">
            <img
              src="path/to/icon3.svg"
              alt="Feature Icon"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Gynae Consult</h2>
            <p className="text-md">
              Receive tailored health tips based on your cycle.
            </p>
          </div>
          <div className="feature">
            <img
              src={ForumImage}
              alt="Feature Icon"
              className="w-1/2 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Forum</h2>
            <p className="text-md">
              Receive tailored health tips based on your cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;
