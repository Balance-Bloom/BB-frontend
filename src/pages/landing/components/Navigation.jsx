import React, { useEffect } from "react";
import "../../../App.css";
import logo from "../../../assets/logo/logo.png";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const sections = ["home", "services", "about", "blog", "testimonial"];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetParent;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behaviour: "smooth",
      });
    }
  };
  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{ Scale: 1.1 }}
          whileTop={{ Scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("home");
          }}
          href="#home"
          className={`text-white ${activeSection === "home" ? "isActive" : ""}`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ Scale: 1.1 }}
          whileTop={{ Scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("services");
          }}
          href="#services"
          className={`text-white ${
            activeSection === "services" ? "isActive" : ""
          }`}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ Scale: 1.1 }}
          whileTop={{ Scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("about");
          }}
          href="#about"
          className={`text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          About Us
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ Scale: 1.1 }}
          whileTop={{ Scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("blog");
          }}
          href="#blog"
          className={`text-white ${activeSection === "blog" ? "isActive" : ""}`}
        >
          Blog
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ Scale: 1.1 }}
          whileTop={{ Scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("testimonial");
          }}
          href="#testimonial"
          className={`text-white ${
            activeSection === "testimonial" ? "isActive" : ""
          }`}
        >
          Testimonial
        </motion.a>
      </li>
    </ul>
  );
  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <div className="text-white font-semibold flex justify-between items-center">
          <a href="/" className="logo flex gap-1 items-center">
            <img src={logo} alt="logo" />
            <h3>Bloom & Balance</h3>
          </a>
        </div>
        {/* navitems */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>
        {/* button */}
        <div className="hidden md:block">
          <a
            href=""
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Login
          </a>
        </div>
        <div>
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : ""
            } `}
          >
            <HiMenuAlt3 className="size-6" />
          </button>
        </div>
      </div>
      {/* mobile navitems */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.props.children}
          </ul>
          <li className="py-2">
            <a
              href=""
              className="text-white bg-primary hover:bg-primary/90 px-2 py-2 rounded"
              onClick={(e) => {
                e.preventDefault();
                handleCloseMenu();
              }}
            >
              Login
            </a>
          </li>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
