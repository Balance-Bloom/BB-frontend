import React, { useState } from "react";
import JournalEntryCard from "../components/JournalEntryCard";
import ChatNav from "./ChatNav";

const ViewEntries = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      title: "First Entry",
      date: "2024-08-01",
      content: "This is my first journal entry.",
    },
    {
      id: 2,
      title: "Second Entry",
      date: "2024-08-02",
      content: "Today was a great day! I learned a lot about React.",
    },
    // Add more entries here
  ]);

  return (
    <>
      <ChatNav />
      <div className="min-h-screen bg-daisy p-8">
        <h1 className="text-3xl font-bold mb-6">My Journal Entries</h1>
        <div className="grid grid-cols-1 gap-4">
          {entries.map((entry) => (
            <JournalEntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewEntries;
