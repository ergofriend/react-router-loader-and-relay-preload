import graphql from "babel-plugin-relay/macro";
import { useEffect, useState } from "react";
import { Environment, loadQuery } from "react-relay";
import { Link, LoaderFunction } from "react-router-dom";

import { PageWrapper } from "../components/PageWrapper";
import { useInAppPreloadedQuery } from "../hooks/useInAppPreloadedQuery";
import { environment } from "../utils/relayEnviroment";
import { ShipListQuery } from "./__generated__/ShipListQuery.graphql";

const shipListQuery = graphql`
  query ShipListQuery {
    ships {
      id
      name
      image
    }
  }
`;

export const shipListQueryLoader: LoaderFunction = () =>
  loadQuery(
    environment,
    shipListQuery,
    {},
    { fetchPolicy: "store-or-network" }
  );

export const ShipList = () => {
  const _data = useInAppPreloadedQuery<ShipListQuery>(
    "ShipList",
    shipListQuery
  );
  const [data] = useState(_data);

  useEffect(() => {
    console.log("ShipList");
    return () => {
      console.log("ShipList unmounted");
    };
  }, []);

  return (
    <PageWrapper>
      ShipList
      <Link to="/">home</Link>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.ships?.map(
          (ship) =>
            ship?.id &&
            ship.name &&
            ship.image && (
              <Link key={ship.id} to={ship.id}>
                {ship.name}
                <img
                  src={ship.image}
                  alt={ship.name}
                  height={100}
                  width={100}
                />
              </Link>
            )
        )}
      </div>
    </PageWrapper>
  );
};
