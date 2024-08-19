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
import DashboardLayout from "./pages/user-dashboard/layouts";
import OverviewPage from "./pages/user-dashboard/pages/OverviewPage";
import WelcomeMessage from "./pages/questions/WelcomeMessage";
import FirstPage from "./pages/questions/FirstPage";
import PeriodHistory from "./pages/user-dashboard/pages/PeriodHistory";
import ArticlesMain from "./pages/user/pages/ArticlesMain";
import Sypmtoms from "./pages/user/components/Sypmtoms";
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
      path: "/articles",
      element: <ArticlesMain />,
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
      path: "log-symptom",
      element: <Sypmtoms />,
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
          path: "period-history",
          element: <PeriodHistory />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
