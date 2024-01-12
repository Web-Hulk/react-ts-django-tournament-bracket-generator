import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import "./index.scss";
import { Dashboard } from "./pages/Dashboard/Dashboard.tsx";
import { ForgotPassword } from "./pages/ForgotPassword/ForgotPassword.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Registration } from "./pages/Registration/Registration.tsx";
import { TournamentCreationForm } from "./pages/TournamentCreationForm/TournamentCreationForm.tsx";
import { Verification } from "./pages/Verification/Verification.tsx";
import { PlayersRegistration } from "./pages/PlayersRegistration/PlayersRegistration.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },
  { path: "/verification", element: <Verification /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/create-tournament", element: <TournamentCreationForm /> },
  { path: "/players-registration", element: <PlayersRegistration /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
