import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className=" max-w-6xl m-auto ">
      <div
        className="flex flex-col  justify-center h-screen text-light pattern   "
        id="home"
      >
        <div className="p-4 md:ml-4 ">
          <h1 className="text-7xl font-title  uppercase font-extrabold text-primary sm:text-7xl  lg:text-9xl ">
            Alberto Sierra
          </h1>
          <p className=" text-2xl  ">Front-End Developer</p>
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
    </div>
  );
}
