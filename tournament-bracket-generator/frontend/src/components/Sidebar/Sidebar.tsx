import { Link } from "react-router-dom";

type Links = {
  name: string;
  href: string;
};

const LINKS: Links[] = [
  { name: "Home", href: "" },
  { name: "Dashboard", href: "dashboard" },
  { name: "Matches", href: "matches" },
  { name: "Players Registration", href: "players-registration" },
  { name: "General Principles", href: "general-principles" },
  { name: "Rules", href: "rules" },
  { name: "Statute", href: "statute" },
  { name: "Prizes", href: "prizes" },
  { name: "Feedback", href: "feedback" },
  // { name: "Login", href: "login" },
  // { name: "Registration", href: "registration" },
];

export const Sidebar = () => {
  return (
    <div>
      <ul>
        {LINKS.map(({ name, href }) => (
          <li key={`Link name - ${name}`}>
            <Link to={`/${href}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
