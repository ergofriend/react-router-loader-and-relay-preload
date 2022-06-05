import graphql from "babel-plugin-relay/macro";
import {
  Environment,
  loadQuery,
  PreloadedQuery,
  usePreloadedQuery,
} from "react-relay";
import { Link, useLoaderData } from "react-router-dom";
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

export const shipListQueryLoader = (environment: Environment) =>
  loadQuery(environment, shipListQuery, {});

export const ShipList = () => {
  const _data = useLoaderData() as PreloadedQuery<ShipListQuery>;
  const data = usePreloadedQuery<ShipListQuery>(shipListQuery, _data);

  return (
    <div>
      ShipList
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.ships?.map(
          (ship) =>
            ship?.id && (
              <Link key={ship.id} to={ship.id}>
                {ship.name}
              </Link>
            )
        )}
      </div>
    </div>
  );
};
