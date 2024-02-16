import { useEffect, useState } from "react";
import { getData } from "../../api/axios";
import { GroupTable } from "../../components/GroupStage/GroupTable";
import { Groups } from "../../types";
import "./GroupStage.scss";

export const GroupStage = () => {
  const [groupStagesData, setGroupStagesData] = useState<Groups[]>([]);

  useEffect(() => {
    getData("group-stages/")
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

  return <>{groups}</>;
};
