import { useMemo, useState } from "react";
import { GeneralTournamentPrinciples } from "../../components/GeneralTournamentPrinciples/GeneralTournamentPrinciples";
import { GeneralTournamentRules } from "../../components/GeneralTournamentRules/GeneralTournamentRules";
import { Prizes } from "../../components/Prizes/Prizes";
import { TournamentStatute } from "../../components/TournamentStatute/TournamentStatute";

const INFO_BUTTONS = [
  { name: "General Principles", value: "general-principles" },
  { name: "Rules", value: "rules" },
  { name: "Statute", value: "statute" },
  { name: "Prizes", value: "prizes" },
];

export const TournamentInfo = () => {
  const [selectedButton, setSelectedButton] = useState<string>("");

  const displayedComponent = useMemo(() => {
    switch (selectedButton) {
      case "rules":
        return <GeneralTournamentRules />;
      case "statute":
        return <TournamentStatute />;
      case "prizes":
        return <Prizes />;
      default:
        return <GeneralTournamentPrinciples />;
    }
  }, [selectedButton]);

  return (
    <div>
      <h1>Tournament Info</h1>

      {INFO_BUTTONS.map(({ name, value }) => (
        <button
          key={`Selected - ${name}`}
          type="button"
          onClick={() => setSelectedButton(value)}
        >
          {name}
        </button>
      ))}

      {displayedComponent}
    </div>
  );
};
