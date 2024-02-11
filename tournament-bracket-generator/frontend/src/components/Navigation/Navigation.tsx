import { Box } from "@mui/material";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getData } from "../../api/axios";
import "./Navigation.scss";

type Links = {
  name: string;
  href: string;
};

const LINKS: Links[] = [
  { name: "Home", href: "/" },
  { name: "Registration", href: "/players-registration" },
  { name: "Fixtures", href: "/fixtures" },
  { name: "Group Stage", href: "/group-stage" },
  { name: "Knockout Stage", href: "/knockout-stage" },
  { name: "Tournament Info", href: "/tournament-info" },
  { name: "Feedback", href: "/feedback" },
];

export const Navigation = () => {
  const [isRegistrationOpened, setIsRegistrationOpened] =
    useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    const getDataAboutRegistrationStatus = () => {
      getData("registration-status/").then((response) => {
        setIsRegistrationOpened(response.data.results[0].status);
      });
    };

    getDataAboutRegistrationStatus();
  }, []);

  return (
    <Box className="navigation-container">
      <h1 className="navigation-container__title">
        <Link to={"/"}>FC24 Victory Cup</Link>
      </h1>

      <ul className="navigation-container__list">
        {LINKS.map(({ name, href }) => {
          if (
            isRegistrationOpened &&
            (name === "Group Stage" ||
              name === "Matches" ||
              name === "Feedback")
          ) {
            return null;
          } else {
            return (
              <li
                key={`Link name - ${name}`}
                className="navigation-container__list-item"
              >
                <Link
                  to={`${href}`}
                  className={classNames(
                    "navigation-container__list-item__link",
                    {
                      active: location.pathname === href,
                    }
                  )}
                >
                  {name}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </Box>
  );
};
