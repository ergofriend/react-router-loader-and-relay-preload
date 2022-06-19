import graphql from "babel-plugin-relay/macro";
import { loadQuery } from "react-relay";
import { Link, LoaderFunction } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { PageWrapper } from "../components/PageWrapper";
import { useInAppPreloadedQuery } from "../hooks/useInAppPreloadedQuery";
import { environment } from "../utils/relayEnviroment";
import { RocketListQuery } from "./__generated__/RocketListQuery.graphql";

const rocketListQuery = graphql`
  query RocketListQuery {
    rockets {
      id
      name
      type
    }
  }
`;

export const rocketListQueryLoader: LoaderFunction = () =>
  loadQuery(
    environment,
    rocketListQuery,
    {},
    { fetchPolicy: "store-or-network" }
  );

export const RocketList = () => {
  const data = useInAppPreloadedQuery<RocketListQuery>(
    "RocketList",
    rocketListQuery
  );

  return (
    <PageWrapper>
      RocketList
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.rockets?.map(
          (rocket) =>
            rocket?.id &&
            rocket.name &&
            rocket.type && (
              <Link key={rocket.id} to={rocket.id}>
                {rocket.type}: {rocket.name}
              </Link>
            )
        )}
      </div>
    </PageWrapper>
  );
};
