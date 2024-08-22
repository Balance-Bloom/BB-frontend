import React from "react";
import "../../../App.css";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../../assets/images/new-uterus.jpeg";
import RotatedText from "../../../components/RotatedText";
import { FaPlay } from "react-icons/fa";
// import HeroImage2 from "../../../assets/images/cervical-cancer.avif";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div
          className="bg-no-repeat lg:absolute bg-center bg-fixed w-full top-0 h-full"
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: "cover", // Ensure the background image covers the element
            backgroundPosition: "center", // Center the background image
          }}
        >
          <div>
            {/* <img
              src={HeroImage}
              alt=""
              className="lg:block hidden absolute top-0 right-0"
            /> */}
            {/* <img
              src={HeroImage2}
              alt=""
              className="lg:block hidden absolute bottom-0 left-0"
            /> */}
          </div>
          <div className="max-w-[1200px] mx-auto xl:px-0 lg:mt-60 px-6 pt-12 lg:flex items-center">
            <div
              className="relative lg:w-1/2 z-100" /* Ensure text color is visible */
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h6 className="text-deepPink font-semibold mb-4">
                Bloom and Balance
              </h6>
              <h2 className="uppercase mb-4 lg:text-[35px] font-semibold lg:leading-[50px]">
                "Embrace your journey, find your balance, bloom through every
                stage"
              </h2>
              <button
                onClick={() => navigate("sign-up")}
                className="text-xs font-semibold text-white bg-deepPink py-4 px-12 transition-bg hover:bg-pink"
              >
                GET STARTED
              </button>
            </div>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            {/* <div className="absolute z-10 left-0 right-0 bottom-0 lg:block flex items-center justify-center ">
              <div className="bg-white rounded-full relative flex items-center justify-center w-[173px] main-slider-three_left_text">
                <RotatedText />
                <div className="bg-deepPink text-white rounded-full flex items-center justify-center absolute w-[95px] h-[95px]">
                  <FaPlay size={24} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
