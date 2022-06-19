import graphql from "babel-plugin-relay/macro";
import { Link, LoaderFunction, useNavigate } from "react-router-dom";
import { loadQuery } from "react-relay";
import { useState } from "react";

import { useInAppPreloadedQuery } from "../hooks/useInAppPreloadedQuery";
import { PageWrapper } from "../components/PageWrapper";
import { ShipDetailQuery } from "./__generated__/ShipDetailQuery.graphql";
import { environment } from "../utils/relayEnviroment";

const shipDetailQuery = graphql`
  query ShipDetailQuery($id: ID!) {
    ship(id: $id) {
      name
      model
      image
    }
  }
`;

export const shipDetailLoader: LoaderFunction = ({ params }) =>
  loadQuery(environment, shipDetailQuery, { id: params.id });

export const ShipDetail = () => {
  const { ship: _ship } = useInAppPreloadedQuery<ShipDetailQuery>(
    "ShipDetail",
    shipDetailQuery
  );
  const [ship] = useState(_ship);
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>ShipDetail</p>
        <Link to="/">home</Link>
        <Link to="/app1/">list</Link>
        <p onClick={() => navigate(-1)}>navigate(-1)</p>
        <p onClick={() => navigate(-2)}>navigate(-2)</p>
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
