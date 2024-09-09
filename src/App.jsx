import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
import LogIn from "./pages/auth/LogIn";
import ForgotPassword from "./pages/auth/ForgotPassword";
import SignUp from "./pages/auth/SignUp";
import UserPage from "./pages/user";
import Journal from "./pages/journal";
import ForumPage from "./pages/forum";
import ViewEntries from "./components/ViewEntries";
import WelcomeMessage from "./pages/questions/WelcomeMessage";
import FirstPage from "./pages/questions/FirstPage";
import Sypmtoms from "./pages/user/components/Sypmtoms";
import ArticlesMain from "./pages/articles/ArticlesMain";
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
      path: "/forum-page",
      element: <ForumPage />,
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
