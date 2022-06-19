import { Link, useNavigate } from "react-router-dom";

import { appsRoute } from "../routes";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>NavBar</p>
      <p onClick={() => navigate(-1)}>navigate(-1)</p>
      <p onClick={() => navigate(-2)}>navigate(-2)</p>
      <Link to="/">home</Link>
      <p>apps</p>
      {appsRoute.map((appRoute) => {
        const path = appRoute.path!;
        return (
          <Link key={path} to={`/${path}`}>
            {path}
          </Link>
        );
      })}
    </div>
  );
};
