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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
