import graphql from "babel-plugin-relay/macro";
import { Environment, loadQuery } from "react-relay";
import { Link } from "react-router-dom";
import { useInAppPreloadedQuery } from "../hooks/useInAppPreloadedQuery";
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
  const data = useInAppPreloadedQuery<ShipListQuery>(shipListQuery);

  return (
    <div>
      ShipList
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
    </div>
  );
};
