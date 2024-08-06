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
import SypmtomsPage from "./pages/user/pages/SypmtomsPage";
import DashboardLayout from "./pages/user-dashboard/layouts";
import OverviewPage from "./pages/user-dashboard/pages/OverviewPage";
import WelcomeMessage from "./pages/questions/WelcomeMessage";
import FirstPage from "./pages/questions/FirstPage";

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
      path: "/journall",
      element: <JournalEntryCard />,
    },
    {
      path: "/view",
      element: <ViewEntries />,
    },
    {
      path: "/log-symptom",
      element: <SypmtomsPage />,
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
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <OverviewPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
