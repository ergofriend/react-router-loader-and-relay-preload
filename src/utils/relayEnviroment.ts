import { Environment, Network, RecordSource, Store } from "relay-runtime";

import { fetchGraphQL } from "./fetchGraphQL";

export const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});