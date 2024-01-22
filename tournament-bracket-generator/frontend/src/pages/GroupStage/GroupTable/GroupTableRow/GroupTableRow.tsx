import { Groups } from "../../../../types";

type GroupTableRowProps = {
  group: Groups;
};

export const GroupTableRow = ({ group }: GroupTableRowProps) => {
  const {
    player,
    position,
    matches_played,
    wins,
    draws,
    loses,
    goals_for,
    goals_against,
    goals_difference,
    points,
    qualified,
  } = Object.values(group)[0];

  return (
    <tr>
      <td>{position}</td>
      <td>{player}</td>
      <td>{matches_played}</td>
      <td>{wins}</td>
      <td>{draws}</td>
      <td>{loses}</td>
      <td>{goals_for}</td>
      <td>{goals_against}</td>
      <td>{goals_difference}</td>
      <td>{points}</td>
      <td>{qualified.toString()}</td>
    </tr>
  );
};
