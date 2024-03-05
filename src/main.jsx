import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/home";
import ActivitiesPage from "./pages/activities";
import TransportPage from "./pages/transport";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import StaysPage from "./pages/stays";
import StayPage from "./pages/stay";

import Header from "./components/Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "activities",
    element: (
      <>
        <Header />
        <ActivitiesPage />
        <Footer />
      </>
    ),
  },
  {
    path: "transport",
    element: (
      <>
        <Header />
        <TransportPage />
        <Footer />
      </>
    ),
  },
  {
    path: "login",
    element: (
      <>
        <Header />
        <LoginPage />
        <Footer />
      </>
    ),
  },
  {
    path: "register",
    element: (
      <>
        <Header />
        <RegisterPage />
        <Footer />
      </>
    ),
  },
  {
    path: "stays",
    element: (
      <>
        <Header />
        <StaysPage />
      </>
    ),
  },
  {
    path: "stay/:slug",
    element: (
      <>
        <Header />
        <StayPage />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
