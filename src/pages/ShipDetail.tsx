import graphql from "babel-plugin-relay/macro";
import { Environment, loadQuery } from "react-relay";
import { ShipDetailQuery } from "./__generated__/ShipDetailQuery.graphql";
import { useInAppPreloadedQuery } from "../hooks/useInAppPreloadedQuery";
import { PageWrapper } from "../components/PageWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const { ship: _ship } = useInAppPreloadedQuery<ShipDetailQuery>(
    "ShipDetail",
    shipDetailQuery
  );
  const [ship] = useState(_ship);

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>ShipDetail</p>
        <Link to="/">home</Link>
        <Link to="/app1/">list</Link>
        {ship && (
          <>
            <p>name: {ship.name}</p>
            <p>model: {ship.model}</p>
            <p>image: {ship.image}</p>
          </>
        )}
      </div>
    </PageWrapper>
  );
};
