import graphql from "babel-plugin-relay/macro";
import { loadQuery, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { useLoaderData } from "react-router-dom";
import { MissionDetailQuery } from "./__generated__/MissionDetailQuery.graphql";

const missionDetailQuery = graphql`
  query MissionDetailQuery($id: ID!) {
    mission(id: $id) {
      name
      description
      twitter
      website
      wikipedia
    }
  }
`;

export const missionDetailLoader = (enviroment: any, missionId: string) =>
  loadQuery(enviroment, missionDetailQuery, { id: missionId });

export const MissionDetail = () => {
  const _data = useLoaderData() as PreloadedQuery<MissionDetailQuery>;
  const { mission } = usePreloadedQuery<MissionDetailQuery>(
    missionDetailQuery,
    _data
  );

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>MissionDetail</p>
        {mission && (
          <>
            <p>name: {mission.name}</p>
            <p>name: {mission.description}</p>
            <p>name: {mission.twitter}</p>
            <p>name: {mission.website}</p>
            <p>name: {mission.wikipedia}</p>
          </>
        )}
      </div>
    </div>
  );
};
