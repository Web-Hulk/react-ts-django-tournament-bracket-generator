import { Table, TableBody, TableContainer } from "@mui/material";
import { Groups } from "../../types";
import { GroupTableHeader } from "./GroupTableHeader";
import { GroupTableRow } from "./GroupTableRow";

type GroupTableProps = {
  groupsData: Groups[];
  groupName: string;
};

export const GroupTable = ({ groupsData, groupName }: GroupTableProps) => {
  return (
    <TableContainer className="group-container">
      <h2>Group {groupName}</h2>

      <Table size="medium">
        <GroupTableHeader />

        <TableBody>
          {groupsData.map((group, index) => (
            <GroupTableRow
              key={`Group ${groupName}-${index + 1}`}
              position={index + 1}
              group={group}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
