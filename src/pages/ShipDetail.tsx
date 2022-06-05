import graphql from "babel-plugin-relay/macro";
import {
  Environment,
  loadQuery,
  PreloadedQuery,
  usePreloadedQuery,
} from "react-relay";
import { useLoaderData } from "react-router-dom";
import { ShipDetailQuery } from "./__generated__/ShipDetailQuery.graphql";

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
  const _data = useLoaderData() as PreloadedQuery<ShipDetailQuery>;
  const { ship } = usePreloadedQuery<ShipDetailQuery>(shipDetailQuery, _data);

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
