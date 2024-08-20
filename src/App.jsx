import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
import LogIn from "./pages/auth/LogIn";
import ForgotPassword from "./pages/auth/ForgotPassword";
import SignUp from "./pages/auth/SignUp";
import UserPage from "./pages/user";
import ForumPage from "./pages/forum";
import Journal from "./pages/journal";
import ViewEntries from "./components/ViewEntries";
import JournalEntryCard from "./components/JournalEntryCard";
import DashboardLayout from "./pages/user-dashboard/layouts";
import OverviewPage from "./pages/user-dashboard/pages/OverviewPage";
import WelcomeMessage from "./pages/questions/WelcomeMessage";
import FirstPage from "./pages/questions/FirstPage";
import SypmtomsPage from "./pages/user-dashboard/pages/SymptomsPage";
import PeriodHistory from "./pages/user-dashboard/pages/PeriodHistory";
import Posts from "./components/post";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/recovery",
      element: <ForgotPassword />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/user-page",
      element: <UserPage />,
    },
    {
      path: "/forum",
      element: <ForumPage />,
    },
    {
      path: "/journal",
      element: <Journal />,
    },

    {
      path: "/view",
      element: <ViewEntries />,
    },

    {
      path: "/welcome-message",
      element: <WelcomeMessage />,
    },
    {
      path: "/next",
      element: <FirstPage />,
    },
    {
      path: "/blog",
      element: < Posts/>,
    },
    {
      path: "/next",
      element: <FirstPage />,
    },
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <OverviewPage />,
        },
        {
          path: "log-symptom",
          element: <SypmtomsPage />,
        },
        {
          path: "period-history",
          element: <PeriodHistory />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
