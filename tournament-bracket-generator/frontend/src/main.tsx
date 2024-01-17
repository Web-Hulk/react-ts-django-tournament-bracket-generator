import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import { Layout } from "./components/Layout/Layout.tsx";
import "./index.scss";
import { Dashboard } from "./pages/Dashboard/Dashboard.tsx";
import { Feedback } from "./pages/Feedback/Feedback.tsx";
import { GeneralTournamentPrinciples } from "./pages/GeneralTournamentPrinciples/GeneralTournamentPrinciples.tsx";
import { GeneralTournamentRules } from "./pages/GeneralTournamentRules/GeneralTournamentRules.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { Matches } from "./pages/Matches/Matches.tsx";
import { PlayersRegistration } from "./pages/PlayersRegistration/PlayersRegistration.tsx";
import { Prizes } from "./pages/Prizes/Prizes.tsx";
import { TournamentStatute } from "./pages/TournamentStatute/TournamentStatute.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      // { path: "/login", element: <Login /> },
      // { path: "/registration", element: <Registration /> },
      // { path: "/verification", element: <Verification /> },
      // { path: "/forgotpassword", element: <ForgotPassword /> },
      { path: "/dashboard", element: <Dashboard /> },
      // { path: "/create-tournament", element: <TournamentCreationForm /> },
      { path: "/players-registration", element: <PlayersRegistration /> },
      { path: "/general-principles", element: <GeneralTournamentPrinciples /> },
      { path: "/rules", element: <GeneralTournamentRules /> },
      { path: "/statute", element: <TournamentStatute /> },
      { path: "/prizes", element: <Prizes /> },
      { path: "/matches", element: <Matches /> },
      { path: "/feedback", element: <Feedback /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
