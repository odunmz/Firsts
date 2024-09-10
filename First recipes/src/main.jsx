import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import SignUpForm from "./user-form.jsx";
import Login from "./login-form.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nutrition from "./nutrition.jsx";
import Digestion from "./digestion.jsx";
import SeeMore from "./seemore.jsx";
import Privacy from "./privacy.jsx";
import Terms from "./terms.jsx";
import Dashboard from "./Dashboard/dashboard";
import About from "./about.jsx";

import AddRecipe from "./add-recipes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/signup",
    element: <SignUpForm />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/nutrition",
    element: <Nutrition />,
  },

  {
    path: "/digestion",
    element: <Digestion />,
  },

  {
    path: "/seemore/:id",
    element: <SeeMore />,
  },

  {
    path: "/add-recipe",
    element: <AddRecipe />,
  },

  {
    path: "/privacy",
    element: <Privacy />,
  },

  {
    path: "/terms",
    element: <Terms />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
