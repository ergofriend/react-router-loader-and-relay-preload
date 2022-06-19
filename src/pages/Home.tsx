import { motion } from "framer-motion";
import graphql from "babel-plugin-relay/macro";
import { Link } from "react-router-dom";
import { useLazyLoadQuery } from "react-relay";

import { HomeQuery } from "./__generated__/HomeQuery.graphql";

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
        top: 70,
        left: 70,
        position: "absolute",
        height: "80vh",
        width: "80vw",
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
      <p>{data.company?.name}</p>
      <Link to="/ship-app">ship-app</Link>
    </motion.div>
  );
};
