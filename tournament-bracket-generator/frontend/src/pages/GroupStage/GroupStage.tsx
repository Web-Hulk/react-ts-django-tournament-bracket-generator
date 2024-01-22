// import axios from "axios";
// import { useEffect, useState } from "react";
import { GroupTable } from "./GroupTable/GroupTable";
import { groupsData } from "./data/groups";

export const GroupStage = () => {
  // const [groupStagesData, setGroupStagesData] = useState<Group[]>([]);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/group-stages/")
  //     .then((response) => {
  //       console.log("Group Stages: ", response.data.results);
  //       setGroupStagesData(response.data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const groups = ["A", "B", "C", "D"].map((groupName) => (
    <GroupTable
      key={`Group ${groupName}`}
      groupsData={groupsData}
      groupName={`Group ${groupName}`}
    />
  ));

  // Different implementation
  // const groups = ['A', 'B', 'C', 'D'].map(groupName => {
  //   const groupData = groupStagesData.filter(stage => stage.group_name === groupName);
  //   return <GroupTable key={groupName} groupData={groupData} />;
  // });

  return <div>{groups}</div>;
};
