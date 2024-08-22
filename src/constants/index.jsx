import {
  CalendarIcon,
  CreditCardIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { GraduationCapIcon, Medal } from "lucide-react";
import { GiPadlock } from "react-icons/gi";
import { GiPadlockOpen } from "react-icons/gi";
import { IoMdHeartDislike } from "react-icons/io";
const D = {
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
  SEXDRIVE: [
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: " Protected sex",
    },
    {
      icon: (
        <GiPadlockOpen
          size={25}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: "Unprotected sex",
    },
    {
      icon: (
        <IoMdHeartDislike
          size={25}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: "Didn't have sex ",
    },
    {
      icon: (
        <IoMdHeartDislike
          size={25}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: "Oral sex ",
    },
    {
      icon: (
        <IoMdHeartDislike
          size={25}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: " Anal sex",
    },

    {
      icon: (
        <IoMdHeartDislike
          size={25}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: "Masturbation",
    },
    {
      icon: (
        <IoMdHeartDislike
          size={25}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: "Sensual touch",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: "Sex toys",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: "Orgasm",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: "High sex drive",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: "Neutral sex drive",
    },
    {
      icon: (
        <GiPadlock
          size={30}
          className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
        />
      ),
      text: "Low sex drive",
    },
  ],
};

export default D;
