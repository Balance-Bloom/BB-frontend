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
      name: "Bio",
      path: "bio",
      Icon: <UserIcon width={20} height={20} />,
    },
    {
      name: "Education",
      path: "education",
      Icon: <GraduationCapIcon width={20} height={20} />,
    },
    {
      name: "Licenses",
      path: "licenses",
      Icon: <CreditCardIcon width={20} height={20} />,
    },
    {
      name: "Skills",
      path: "skills",
      Icon: <HomeIcon width={20} height={20} />,
    },
    {
      name: "Experiences",
      path: "experiences",
      Icon: <CalendarIcon width={20} height={20} />,
    },
    {
      name: "Projects",
      path: "projects",
      Icon: <Medal width={20} height={20} />,
    },
    {
      name: "Achievements",
      path: "achievements",
      Icon: <Medal width={20} height={20} />,
    },
  ],
};

export default D;
