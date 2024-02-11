import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import { Layout } from "./components/Layout/Layout.tsx";
import "./index.scss";
import { Feedback } from "./pages/Feedback/Feedback.tsx";
import { GroupStage } from "./pages/GroupStage/GroupStage.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { KnockoutStage } from "./pages/KnockoutStage/KnockoutStage.tsx";
import { Matches } from "./pages/Matches/Matches.tsx";
import { PlayerDetails } from "./pages/PlayerDetails/PlayerDetails.tsx";
import { PlayersRegistration } from "./pages/PlayersRegistration/PlayersRegistration.tsx";
import { TournamentInfo } from "./pages/TournamentInfo/TournamentInfo.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      { path: "/players-registration", element: <PlayersRegistration /> },
      { path: "/fixtures", element: <Matches /> },
      { path: "/group-stage", element: <GroupStage /> },
      { path: "/knockout-stage", element: <KnockoutStage /> },
      { path: "/tournament-info", element: <TournamentInfo /> },
      { path: "/feedback", element: <Feedback /> },
      { path: "/player-details/:id", element: <PlayerDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
