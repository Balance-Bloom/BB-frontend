import {
  CalendarIcon,
  CreditCardIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { GiPadlock } from "react-icons/gi";
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
  VAGINALDISCHARGE: [
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4]"
        />
      ),
      text: "No discharge",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4]"
        />
      ),
      text: "Creamy",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4]"
        />
      ),
      text: "Watery",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4]"
        />
      ),
      text: "Sticky",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4]"
        />
      ),
      text: "Egg white",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4]"
        />
      ),
      text: "Spotting",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4]"
        />
      ),
      text: "Unusual",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4]"
        />
      ),
      text: "Clumpy white",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Gray",
    },
  ],
  FEELINGS: [
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Everything is fine",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Cramps",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Tender breasts",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Headache",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Acne",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Backache",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Fatigue",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Cravings",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Insomnia",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Abdominal pain",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Vaginal itching",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#8f69e1]  p-1 rounded-full bg-[#DED3F4] "
        />
      ),
      text: "Vaginal dryness",
    },
  ],
};

export default D;
