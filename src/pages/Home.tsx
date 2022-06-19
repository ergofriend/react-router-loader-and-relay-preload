import { motion } from "framer-motion";
import graphql from "babel-plugin-relay/macro";
import { Link } from "react-router-dom";
import { useLazyLoadQuery } from "react-relay";

import { HomeQuery } from "./__generated__/HomeQuery.graphql";
import { appsRoute } from "../routes";

export const Home = () => {
  const data = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        company {
          name
        }
      }
    `,
    {},
    { fetchPolicy: "store-and-network" }
  );

  return (
    <motion.div
      style={{
        top: 0,
        left: 0,
        position: "absolute",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "grey",
      }}
      exit={{
        scale: 1,
      }}
      transition={{
        duration: 3,
        ease: "easeOut",
      }}
    >
      <p>Home</p>
      <p>company name: {data.company?.name}</p>
      <p>apps</p>
      {appsRoute.map((appRoute) => {
        const path = appRoute.path!;
        return (
          <Link key={path} to={path}>
            {path}
          </Link>
        );
      })}
    </motion.div>
  );
};
