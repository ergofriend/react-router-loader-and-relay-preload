import graphql from "babel-plugin-relay/macro";
import { LoaderFunction } from "react-router-dom";
import { loadQuery } from "react-relay";

import { useInAppPreloadedQuery } from "../hooks/useInAppPreloadedQuery";
import { PageWrapper } from "../components/PageWrapper";
import { ShipDetailQuery } from "./__generated__/ShipDetailQuery.graphql";
import { environment } from "../utils/relayEnviroment";
import { NavBar } from "../components/NavBar";

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
  const { ship } = useInAppPreloadedQuery<ShipDetailQuery>(
    "ShipDetail",
    shipDetailQuery
  );

  return (
    <PageWrapper>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>ShipDetail</p>
        <NavBar />
        {ship && (
          <>
            <p>name: {ship.name}</p>
            <p>model: {ship.model}</p>
            <p>image: {ship.image}</p>
            {ship.image && <img src={ship.image} alt="" />}
          </>
        )}
      </div>
    </PageWrapper>
  );
};
