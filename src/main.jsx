import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import AuthProvider from "./Provider/AuthProvider";
import AllTouristsSpot from "./Pages/AllTouristsSpot";
import AddTouristsSpot from "./Pages/AddTouristsSpot";

import Error from "./Components/Error";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import List from "./Pages/List";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/addspot"),
      },
      {
        path: "/allspot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch("http://localhost:5000/addspot"),
      },
      {
        path: "/addspot",
        element: (
          <ProtectedRoute>
            <AddTouristsSpot></AddTouristsSpot>
          </ProtectedRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <ProtectedRoute>
            <List></List>
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
