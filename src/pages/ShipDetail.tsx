import graphql from "babel-plugin-relay/macro";
import { Environment, loadQuery } from "react-relay";
import { ShipDetailQuery } from "./__generated__/ShipDetailQuery.graphql";
import { useInAppPreloadedQuery } from "../hooks/useInAppPreloadedQuery";

const shipDetailQuery = graphql`
  query ShipDetailQuery($id: ID!) {
    ship(id: $id) {
      name
      model
      image
    }
  }
`;

export const shipDetailLoader = (environment: Environment, shipId: string) =>
  loadQuery(environment, shipDetailQuery, { id: shipId });

export const ShipDetail = () => {
  const { ship } = useInAppPreloadedQuery<ShipDetailQuery>(shipDetailQuery);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>ShipDetail</p>
        {ship && (
          <>
            <p>name: {ship.name}</p>
            <p>model: {ship.model}</p>
            <p>image: {ship.image}</p>
          </>
        )}
      </div>
    </div>
  );
};
