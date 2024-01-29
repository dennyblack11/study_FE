import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register";
import { AuthLayout } from "../components/static/AuthLayout";
import { PrivateRouter } from "./privateRouter";
import { DashLayout } from "../components/static/DashLayout";
import { Home } from "../pages/Home";
import { Study } from "../pages/dashboard/Study";
import { Lesson } from "../pages/dashboard/Lesson";
import { Rank } from "../pages/dashboard/Rank";
import { History } from "../pages/dashboard/History";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashLayout />
      </PrivateRouter>
    ),
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "study",
        element: <Study />,
      },
      {
        path: "study/:id",
        element: <Study />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "rank",
        element: <Rank />,
      },
      {
        path: "lesson/:id",
        element: <Lesson />,
      },
    ],
  },
]);
