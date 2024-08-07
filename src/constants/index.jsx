import {
  CalendarIcon,
  CreditCardIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { GraduationCapIcon, Medal } from "lucide-react";

const D = {
  DASHBOARDLINKS: [
    {
      name: "Overview",
      path: "",
      Icon: <UserIcon width={20} height={20} />,
    },
    {
      name: "Mood and symptoms",
      path: "log-symptom",
      Icon: <UserIcon width={20} height={20} />,
    },
    {
      name: "Period history",
      path: "period-history",
      Icon: <GraduationCapIcon width={20} height={20} />,
    },
    {
      name: "Track pregnancy",
      path: "licenses",
      Icon: <CreditCardIcon width={20} height={20} />,
    },
  ],
};

export default D;
