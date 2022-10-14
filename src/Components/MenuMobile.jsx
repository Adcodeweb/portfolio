import Link from "./Link";
import links from "../links";
import { motion } from "framer-motion";

export default function MenuMobile({ closeModal }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute z-10 inset-0  h-screen bg-black/50 flex justify-end"
    >
      <div className="bg-black w-1/2 flex flex-col  ">
        <div className="flex flex-col gap-4 mt-32 p-5 text-right text-lg ">
          {links.map((l) => {
            return (
              <Link
                key={l.name}
                name={l.name}
                url={l.url}
                closeModal={closeModal}
              />
            );
          })}
          <h4
            className="border border-primary text-center mt-5"
            onClick={closeModal}
          >
            Resume
          </h4>
          <a
            href="mailto:adcodeweb@gmail.com"
            className="border border-primary cursor-pointer text-center "
          >
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  );
}
