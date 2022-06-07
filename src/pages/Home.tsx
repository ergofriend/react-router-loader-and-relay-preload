import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Home = () => {
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
      <Link to="/app1">app1</Link>
    </motion.div>
  );
};
