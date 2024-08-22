import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Features from "./components/Features";
import Features2 from "./components/Features2";
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    AOS.refresh(); // Optional, but can help
  }, []);

  return (

    <div className="font-primary overflow-x-hidden">
      <Navigation />
      <Hero/>
      <Services/>
      <Blog/>
      <Testimonials/>
    </div>

  );
};

export default LandingPage;
