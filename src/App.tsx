import { DataBrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { MissionList } from "./pages/MissionList";

function App() {
  return (
    <div className="App">
      <DataBrowserRouter fallbackElement={<></>}>
        <Route path="/" element={<MissionList />} />
      </DataBrowserRouter>
    </div>
  );
}

export default App;
