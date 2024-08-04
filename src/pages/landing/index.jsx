import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Features2 from "./components/Features2";
const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Features2 />
      <Footer />
    </>
  );
};

export default LandingPage;
