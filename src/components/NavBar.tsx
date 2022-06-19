import { Link, useNavigate } from "react-router-dom";

import { appsRoute } from "../routes";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "salmon",
        margin: "1rem",
      }}
    >
      <div>NavBar</div>
      <button onClick={() => navigate(-1)} style={{ width: "100px" }}>
        navigate(-1)
      </button>
      <button onClick={() => navigate(-2)} style={{ width: "100px" }}>
        navigate(-2)
      </button>
      <Link to="/">home</Link>
      <div>apps</div>
      {appsRoute.map((appRoute) => {
        const path = appRoute.path!;
        return (
          <Link key={path} to={`/${path}`} style={{ paddingLeft: "1rem" }}>
            {path}
          </Link>
        );
      })}
    </div>
  );
};
