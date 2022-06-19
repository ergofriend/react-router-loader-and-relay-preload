import graphql from "babel-plugin-relay/macro";
import { LoaderFunction } from "react-router-dom";
import { loadQuery } from "react-relay";

import { useInAppPreloadedQuery } from "../hooks/useInAppPreloadedQuery";
import { PageWrapper } from "../components/PageWrapper";
import { RocketDetailQuery } from "./__generated__/RocketDetailQuery.graphql";
import { environment } from "../utils/relayEnviroment";
import { NavBar } from "../components/NavBar";

const rocketDetailQuery = graphql`
  query RocketDetailQuery($id: ID!) {
    rocket(id: $id) {
      name
      type
      height {
        meters
      }
      wikipedia
    }
  }
`;

export const rocketDetailLoader: LoaderFunction = ({ params }) =>
  loadQuery(environment, rocketDetailQuery, { id: params.id });

export const RocketDetail = () => {
  const { rocket } = useInAppPreloadedQuery<RocketDetailQuery>(
    "RocketDetail",
    rocketDetailQuery
  );

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <NavBar />
        {rocket && (
          <>
            <p>name: {rocket.name}</p>
            <p>height: {rocket.height?.meters}m</p>
            <p>type: {rocket.type}</p>
            <p>
              wikipedia: <a href={rocket.wikipedia ?? ""}>{rocket.wikipedia}</a>
            </p>
          </>
        )}
      </div>
    </PageWrapper>
  );
};
