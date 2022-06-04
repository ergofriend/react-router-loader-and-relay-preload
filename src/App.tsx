import { Suspense } from "react";
import { useRelayEnvironment } from "react-relay";
import { DataBrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { MissionList, missionListQueryLoader } from "./pages/MissionList";

function App() {
  const environment = useRelayEnvironment();
  return (
    <div className="App">
      <Suspense fallback={<div>Suspense</div>}>
        <DataBrowserRouter fallbackElement={<></>}>
          <Route
            path="/"
            element={<MissionList />}
            loader={() => missionListQueryLoader(environment)}
          />
        </DataBrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
