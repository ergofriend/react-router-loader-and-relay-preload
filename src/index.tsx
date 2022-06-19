import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RelayEnvironmentProvider } from "react-relay";

import { RouteRenderer } from "./utils/RouteRenderer";
import { routes } from "./routes";
import reportWebVitals from "./reportWebVitals";
import { environment } from "./utils/relayEnviroment";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<div>Suspense</div>}>
        <RouteRenderer routes={routes} />
      </Suspense>
    </RelayEnvironmentProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
