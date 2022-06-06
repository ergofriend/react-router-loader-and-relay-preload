import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RelayEnvironmentProvider, useRelayEnvironment } from "react-relay";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

import { fetchGraphQL } from "./fetchGraphQL";
import { DataBrowserRouter, Route } from "react-router-dom";
import { ShipList, shipListQueryLoader } from "./pages/ShipList";
import { ShipDetail, shipDetailLoader } from "./pages/ShipDetail";

const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});

const Inner = () => {
  const environment = useRelayEnvironment();
  return (
    <DataBrowserRouter fallbackElement={<div>DataBrowserRouter</div>}>
      <Route element={<App />}>
        <Route
          path="/"
          element={<ShipList />}
          loader={() => shipListQueryLoader(environment)}
        />
        <Route
          path="/:id"
          element={<ShipDetail />}
          loader={({ params }) => shipDetailLoader(environment, params.id!)}
        />
      </Route>
    </DataBrowserRouter>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RelayEnvironmentProvider environment={environment}>
    <Suspense fallback={<div>Suspense</div>}>
      <Inner />
    </Suspense>
  </RelayEnvironmentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
