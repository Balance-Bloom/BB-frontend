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
  SYMPTOMS: {
    MOOD: [
      {
        id: 1,
        emoji: "🤒",
        name: "Fever",
      },
      {
        id: 2,
        emoji: "🤕",
        name: "Headache",
      },
      {
        id: 3,
        emoji: "🤧",
        name: "Sneezing",
      },
      {
        id: 4,
        emoji: "😴",
        name: "Fatigue",
      },
    ],
  },
  INSIGHTS: [
    {
      title: "Cervical Cancer",
    },
    {
      title: "Cervical Cancer",
    },
    {
      title: "Cervical Cancer",
    },
    {
      title: "Cervical Cancer",
    },
  ],
  INSIGHTLINKS: [
    {
      linkName: "Discover",
    },
    {
      linkName: "Reproductive health",
    },
    {
      linkName: "Birth Control",
    },
    {
      linkName: "Relationships",
    },
    {
      linkName: "Sex and intimacy",
    },
    {
      linkName: "Intimacy",
    },
    {
      linkName: "Relationships",
    },
    {
      linkName: "Mental health",
    },
  ],
  ARTICLESMAIN: [
    {
      sectionName: "Reproductive Health",
    },
    {
      sectionName: "Reproductive Health",
    },
    {
      sectionName: "Reproductive Health",
    },
    {
      sectionName: "Reproductive Health",
    },
    {
      sectionName: "Reproductive Health",
    },
    {
      sectionName: "Reproductive Health",
    },
    {
      sectionName: "Reproductive Health",
    },
  ],
};

export default D;
