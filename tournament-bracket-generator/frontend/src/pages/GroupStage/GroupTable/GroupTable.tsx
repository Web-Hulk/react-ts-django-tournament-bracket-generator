import { Groups } from "../../../types";

type GroupTableProps = {
  groupsData: Groups[];
  groupName: string;
};

export const GroupTable = ({ groupsData, groupName }: GroupTableProps) => {
  return (
    <div>
      <h2>{groupName}</h2>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Player</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
            <th>Qualified</th>
          </tr>
        </thead>
        <tbody>
          {groupsData.map((groupData) => {
            const {
              group_name,
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
            } = Object.values(groupData)[0];
            return (
              <tr key={`Group ${group_name} - ${player}`}>
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
          })}
        </tbody>
      </table>
    </div>
  );
};
