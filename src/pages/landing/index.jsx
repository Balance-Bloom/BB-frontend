import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Hero from "./components/Hero";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
};

export default LandingPage;
