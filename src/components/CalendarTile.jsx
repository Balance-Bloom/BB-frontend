import React, { useState } from "react";
import moment from "moment";
import {
  ArrowRight,
  ArrowLeft,
  LocalFireDepartment,
  Notes,
  Edit,
  Delete,
} from "@mui/icons-material";
import { Droplet } from "lucide-react";
import { CalendarDateRangeIcon } from "@heroicons/react/20/solid";
import { green, red } from "@mui/material/colors";
import { toast } from "react-toastify";
import AddPeriodModal from "./AddPeriodModal";

const CalendarTile = () => {
  const initialPeriodData = {
    "2024-08": {
      startDate: "2024-08-07",
      endDate: "2024-08-16",
      flow: "Heavy",
      symptoms: "Cramps",
      notes: "Felt tired",
      menstruationColor: "#d946ef",
      flowColor: "#ef4444",
      symptomsColor: "#f97316",
    },
    "2024-09": {
      startDate: "2024-09-10",
      endDate: "2024-09-14",
      flow: "Medium",
      symptoms: "Headache",
      notes: "Mild discomfort",
      menstruationColor: "#8b5cf6",
      flowColor: "#f87171",
      symptomsColor: "#fb923c",
    },
  };

  const [periodData, setPeriodData] = useState(initialPeriodData);
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [editing, setEditing] = useState(false);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => moment(prev).subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => moment(prev).add(1, "month"));
  };

  const monthKey = currentMonth.format("YYYY-MM");
  const periodDetails = periodData[monthKey] || {};

  const updatePeriodDetails = (data) => {
    setPeriodData((prev) => ({
      ...prev,
      [monthKey]: data,
    }));
  };

  const deleteField = (field) => {
    setPeriodData((prev) => {
      const updatedMonthData = { ...prev[monthKey] };
      const fieldExists = updatedMonthData[field] !== undefined;

      if (fieldExists) {
        delete updatedMonthData[field];

        // Notify user of success
        toast.success(
          `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } deleted successfully`
        );
      } else {
        toast.error(`Failed to delete ${field}`);
      }

      return {
        ...prev,
        [monthKey]: updatedMonthData,
      };
    });
  };

  const handleEdit = (action, field) => {
    if (action === "delete") {
      deleteField(field);
    } else {
      setEditing(true);
    }
  };

  return (
    <div className="w-full col-span-1 h-auto rounded-lg shadow-md bg-white flex flex-col items-center gap-6 p-6">
      <div className="flex justify-between items-center w-full">
        <ArrowLeft
          className="cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={handlePrevMonth}
        />
        <span className="text-lg font-semibold text-gray-800">
          {currentMonth.format("MMMM YYYY")}
        </span>
        <ArrowRight
          className="cursor-pointer text-gray-600 hover:text-gray-800"
          onClick={handleNextMonth}
        />
      </div>

      <div className="flex flex-col gap-4 text-left w-full">
        <div className="flex justify-between items-center">
          <p
            className="text-sm flex items-center font-medium"
            style={{ color: periodDetails.menstruationColor }}
          >
            <Droplet
              className="inline bg-fuchsia-200 rounded-full p-1 mr-2"
              style={{
                backgroundColor: `${periodDetails.menstruationColor}20`,
              }}
            />
            Menstruation:
            {periodDetails.startDate
              ? `${moment(periodDetails.startDate).format(
                  "Do MMMM"
                )} - ${moment(periodDetails.endDate).format("Do MMMM")}`
              : "Not logged"}
          </p>
          <div className="flex gap-2">
            <Edit
              sx={{ color: green[500] }}
              className="cursor-pointer hover:text-gray-800"
              onClick={() => handleEdit("edit", "startDate")}
            />
            <Delete
              sx={{ color: red[500] }}
              className="cursor-pointer hover:text-red-600"
              onClick={() => handleEdit("delete", "startDate")}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p
            className="text-sm flex items-center font-medium"
            style={{ color: periodDetails.flowColor }}
          >
            <LocalFireDepartment
              className="inline bg-pink-200 rounded-full p-1 mr-2"
              style={{ backgroundColor: `${periodDetails.flowColor}20` }}
            />
            Flow: {periodDetails.flow || "Not logged"}
          </p>
          <div className="flex gap-2">
            <Edit
              sx={{ color: green[500] }}
              className="cursor-pointer hover:text-gray-800"
              onClick={() => handleEdit("edit", "flow")}
            />
            <Delete
              sx={{ color: red[500] }}
              className="cursor-pointer hover:text-red-600"
              onClick={() => handleEdit("delete", "flow")}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p
            className="text-sm flex items-center font-medium"
            style={{ color: periodDetails.symptomsColor }}
          >
            <CalendarDateRangeIcon
              width={25}
              className="inline bg-coral/50 rounded-full p-1 mr-2"
              style={{ backgroundColor: `${periodDetails.symptomsColor}20` }}
            />
            Symptoms: {periodDetails.symptoms || "Not logged"}
          </p>
          <div className="flex gap-2">
            <Edit
              sx={{ color: green[500] }}
              className="cursor-pointer hover:text-gray-800"
              onClick={() => handleEdit("edit", "symptoms")}
            />
            <Delete
              sx={{ color: red[500] }}
              className="cursor-pointer hover:text-red-600"
              onClick={() => handleEdit("delete", "symptoms")}
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm flex items-center font-medium text-gray-600">
            <Notes className="inline bg-gray-200 rounded-full p-1 mr-2" />
            Notes: {periodDetails.notes || "Not logged"}
          </p>
          <div className="flex gap-2">
            <Edit
              sx={{ color: green[500] }}
              className="cursor-pointer hover:text-gray-800"
              onClick={() => handleEdit("edit", "notes")}
            />
            <Delete
              sx={{ color: red[500] }}
              className="cursor-pointer hover:text-red-600"
              onClick={() => handleEdit("delete", "notes")}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 w-full">
        <AddPeriodModal
          buttonText={editing ? "Edit period" : "Log period"}
          updatePeriodDetails={updatePeriodDetails}
          initialData={editing ? periodDetails : {}}
          closeModal={() => setEditing(false)}
        />
      </div>
    </div>
  );
};

export default CalendarTile;
