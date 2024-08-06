import React from "react";
import NotesPreview from "./NotesPreview";
import DashedNote from "./DashedNote";
import Notes from "./Notes";

const NotesContainer = () => {
  return (
    <div className="bg-bgColor w-4/5 h-screen rounded-l-lg">
      <div className="ml-6">
        <h1 className="text-2xl">Recent Folders</h1>
        <div className="flex gap-8">
          <p className="text-subheader">Todays</p>
          <p className="text-subheader">This week</p>
          <p className="text-subheader">This Month</p>
        </div>
        <div className="flex gap-5 items-center ">
          <NotesPreview color="bg-coral/50" />
          <NotesPreview color="bg-fuschia/50" />
          <NotesPreview color="bg-lilac/50" />
          <DashedNote />
        </div>
        <div>
          <h1>My Notes</h1>
          <div className="flex gap-8">
            <p className="text-subheader">Todays</p>
            <p className="text-subheader">This week</p>
            <p className="text-subheader">This Month</p>
          </div>
          <div>
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesContainer;
