import axios from "axios";
import { useEffect, useState } from "react";
import { GroupTable } from "./GroupTable/GroupTable";
import { Groups } from "../../types";

export const GroupStage = () => {
  const [groupStagesData, setGroupStagesData] = useState<Groups[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/group-stages/")
      .then((response) => {
        console.log("groupStagesData: ", response.data.results);
        setGroupStagesData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const groups = ["A", "B", "C", "D"].map((groupName) => {
    const groupData = groupStagesData.filter((item) => item[groupName]);
    return (
      <GroupTable
        key={groupName}
        groupsData={groupData}
        groupName={groupName}
      />
    );
  });

  return (
    <div>
      <h1>Groups</h1>
      {groups}
    </div>
  );
};
