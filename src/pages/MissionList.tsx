import graphql from "babel-plugin-relay/macro";
import { loadQuery, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { useLoaderData } from "react-router-dom";
import { MissionListQuery } from "./__generated__/MissionListQuery.graphql";

const missionListQuery = graphql`
  query MissionListQuery {
    missions {
      id
      name
    }
  }
`;

export const missionListQueryLoader = (environment: any) =>
  loadQuery(environment, missionListQuery, {});

export const MissionList = () => {
  const _data = useLoaderData() as PreloadedQuery<MissionListQuery>;
  const data = usePreloadedQuery<MissionListQuery>(missionListQuery, _data);
  console.log(data);
  return (
    <div>
      MissionList
      <div>
        {data.missions?.map(
          (mission) => mission && <div key={mission.id}>{mission.name}</div>
        )}
      </div>
    </div>
  );
};
