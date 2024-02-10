import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Links = {
  name: string;
  href: string;
};

const LINKS: Links[] = [
  { name: "Home", href: "" },
  // { name: "Dashboard", href: "dashboard" },
  { name: "Group Stage", href: "group-stage" },
  { name: "Matches", href: "matches" },
  { name: "Players Registration", href: "players-registration" },
  { name: "Tournament Info", href: "tournament-info" },
  { name: "Feedback", href: "feedback" },

  // { name: "Login", href: "login" },
  // { name: "Registration", href: "registration" },
];

export const Sidebar = () => {
  const [isRegistrationOpened, setIsRegistrationOpened] =
    useState<boolean>(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/registration-status/").then((response) => {
      setIsRegistrationOpened(response.data.results[0].status);
    });
  }, []);

  return (
    <div>
      <div>
        ING <span style={{ color: "#ff6200" }}>Hubs</span> Poland
      </div>

      <ul>
        {LINKS.map(({ name, href }) => {
          if (
            isRegistrationOpened &&
            (name === "Group Stage" ||
              name === "Matches" ||
              name === "Feedback")
          ) {
            null;
          } else {
            return (
              <li key={`Link name - ${name}`}>
                <Link to={`/${href}`}>{name}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
