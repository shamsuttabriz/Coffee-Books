import { createBrowserRouter } from "react-router-dom";
import CoffeeCards from "../components/CoffeeCards";
import MainLayout from "../layouts/MainLayout";
import CoffeeDetails from "../pages/CoffeeDetails";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCards />,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CoffeeCards />,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees />,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
