import graphql from "babel-plugin-relay/macro";
import { loadQuery, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { Link, useLoaderData } from "react-router-dom";
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

  return (
    <div>
      MissionList
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.missions?.map(
          (mission) =>
            mission?.id && (
              <Link key={mission.id} to={mission.id}>
                {mission.name}
              </Link>
            )
        )}
      </div>
    </div>
  );
};
