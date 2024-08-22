import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Features2 from "./components/Features2";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh(); // Optional, but can help
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <div className="bg-gradient-to-b from-pink to-[#FAFAFA]">
        <Features />
        <Features2 />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
