import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="  flex flex-col justify-center h-screen text-light  max-w-6xl m-auto "
      id="home"
    >
      <div className="p-4 md:ml-4 ">
        <motion.h1
          initial={{ x: "-100vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 1 }}
          className="text-7xl font-title  uppercase font-extrabold text-primary sm:text-7xl  lg:text-9xl "
        >
          Alberto Sierra
        </motion.h1>
        <motion.p
          initial={{ x: "100vh" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" text-2xl  "
        >
          Front-End Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className=" text-lg"
        >
          adcodeweb@gmail.com
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className=" text-base"
        >
          Venezuela
        </motion.p>
      </div>
    </div>
  );
}
