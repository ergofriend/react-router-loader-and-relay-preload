import { Suspense } from "react";
import { useRelayEnvironment } from "react-relay";
import { DataBrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { MissionDetail, missionDetailLoader } from "./pages/MissionDetail";
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
          <Route
            path="/:id"
            element={<MissionDetail />}
            loader={({ params }) =>
              missionDetailLoader(environment, params.id!)
            }
          />
        </DataBrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
