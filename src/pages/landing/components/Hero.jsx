import React from "react";
import "../../../App.css";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../../assets/images/new-uterus-r.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import RotatedText from "../../../components/RotatedText";
import { FaPlay } from "react-icons/fa";
// import HeroImage2 from "../../../assets/images/cervical-cancer.avif";
import {motion} from 'framer-motion'
import { fadeIn } from "../../../utils/animation";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="bg-heroBg text-white flex items-center pt-28 md:h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center p-8 overflow-y-hidden gap-8 h-full">
        <motion.div 
        variants={fadeIn('down',0.2)} initial='hidden'
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        className=" ml-20 md: w-1/2">
        <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">Embrace your journey, find your balance, bloom through every stage</h1>
        <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
          <a href="" className="flex gap-1 items-center"><span>Sign up</span> <FaArrowAltCircleRight /></a>
        </button>
        </motion.div>


        <motion.div 
        variants={fadeIn('left',0.2)} initial='hidden'
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
        className=" mr-20 md: w-1/2 h-full">
        <img src={HeroImage} alt="" className="w-full object-cover" />
        </motion.div>
      </div>

    </section>
    // <div>
    //   <div>
    //     <div
    //       className="bg-no-repeat lg:absolute bg-cover bg-center w-full top-0"
    //       style={{ backgroundImage: `url(${HeroImage})` }}
    //     >
    //       <div>
    //         <img
    //           src={HeroImage}
    //           alt=""
    //           className="lg:block hidden absolute top-0 right-0"
    //         />
    //         {/* <img
    //           src={HeroImage2}
    //           alt=""
    //           className="lg:block hidden absolute bottom-0 left-0"
    //         /> */}
    //       </div>
    //       <div className="max-w-[1200px] mx-auto xl:px-0 lg:mt-60 px-6 pt-16 lg:flex items-center">
    //         <div
    //           className="relative lg:w-1/2 z-100 " /* Ensure text color is visible */
    //           data-aos="fade-right"
    //           data-aos-delay="300"
    //         >
    //           <h6 className="text-deepPink font-semibold mb-4">
    //             Bloom and Balance
    //           </h6>
    //           <h2 className="uppercase mb-9 lg:text-[35px] font-semibold lg:leading-[50px]">
    //             "Embrace your journey, find your balance, bloom through every
    //             stage"
    //           </h2>
    //           <button className="text-xs font-semibold text-white bg-deepPink py-4 px-12 transition-bg hover:bg-pink">
    //             GET STARTED
    //           </button>
    //         </div>
    //         <div>
    //           <img src="" alt="" />
    //           <img src="" alt="" />
    //           <img src="" alt="" />
    //         </div>
    //         <div className="absolute z-10 left-0 right-0 bottom-0 lg:block flex items-center justify-center ">
    //           <div className="bg-white rounded-full relative flex items-center justify-center w-[173px] main-slider-three_left_text">
    //             <RotatedText />
    //             <div className="bg-deepPink text-white rounded-full flex items-center justify-center absolute w-[95px] h-[95px]">
    //               <FaPlay size={24} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
};

export default Hero;
