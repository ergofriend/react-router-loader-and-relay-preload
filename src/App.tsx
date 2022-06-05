import { Suspense } from "react";
import { useRelayEnvironment } from "react-relay";
import { DataBrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { ShipDetail, shipDetailLoader } from "./pages/ShipDetail";
import { ShipList, shipListQueryLoader } from "./pages/ShipList";

function App() {
  const environment = useRelayEnvironment();
  return (
    <div className="App">
      <Suspense fallback={<div>Suspense</div>}>
        <DataBrowserRouter fallbackElement={<></>}>
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
        </DataBrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
