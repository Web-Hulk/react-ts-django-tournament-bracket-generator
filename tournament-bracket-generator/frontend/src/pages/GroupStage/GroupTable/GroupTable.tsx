import { Groups } from "../../../types";
import { GroupTableRow } from "./GroupTableRow/GroupTableRow";

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
          {groupsData.map((group, index) => (
            <GroupTableRow
              key={`Group ${groupName}-${index + 1}`}
              group={group}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
