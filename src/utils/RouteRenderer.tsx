import { useRelayEnvironment } from "react-relay";
import { Route, DataBrowserRouter, RouteObject } from "react-router-dom";
import { Environment } from "relay-runtime";

type Props = {
  routes: RouteObject[];
};

export const RouteRenderer: React.FC<Props> = ({ routes }) => {
  const relayEnvironment = useRelayEnvironment();
  return (
    <DataBrowserRouter fallbackElement={<div>RouteRenderer</div>}>
      {renderRoutes(routes, relayEnvironment)}
    </DataBrowserRouter>
  );
};

const renderRoutes = (
  routes: RouteObject[] | undefined,
  relayEnvironment: Environment
) =>
  routes
    ? routes.map((route) => (
        <Route key={route.path} {...route}>
          {renderRoutes(route.children, relayEnvironment)}
        </Route>
      ))
    : null;
