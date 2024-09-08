import React from "react";
import "../../../App.css";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../../assets/images/new-uterus-r.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
// import HeroImage2 from "../../../assets/images/cervical-cancer.avif";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/animation";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="bg-heroBg text-white flex items-center pt-28 md:h-screen"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-8 overflow-y-hidden gap-8 h-full">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" ml-20 md: w-1/2"
        >
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
            Embrace your journey, find your balance, bloom through every stage
          </h1>
          <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
            <a href="" className="flex gap-1 items-center">
              <span>Sign up</span> <FaArrowAltCircleRight />
            </a>
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" mr-20 md: w-1/2 h-full"
        >
          <img src={HeroImage} alt="" className="w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
