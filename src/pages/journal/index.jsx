import React from "react";
import "../../App.css";
import NavBar from "../../components/NavBar";
import NotesContainer from "./components/NotesContainer";
import Sidebar from "./components/Sidebar";

const Journal = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-between">
        <Sidebar />
        <NotesContainer />
      </div>
    </>
  );
};

export default Journal;
