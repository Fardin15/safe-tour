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
import Details from "./Pages/Details";
import Update from "./Pages/Update";
import AllCountriesSpot from "./Components/AllCountriesSpot";
import { HelmetProvider } from "react-helmet-async";

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
        path: "/update/:id",
        element: (
          <ProtectedRoute>
            <Update></Update>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addspot/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:id",
        element: (
          <ProtectedRoute>
            <Details></Details>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addspot/${params.id}`),
      },
      {
        path: "/spots/:country",
        element: <AllCountriesSpot></AllCountriesSpot>,
        loader: () => fetch("http://localhost:5000/addspot"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
