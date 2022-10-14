import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MenuMobile from "./MenuMobile";
import Burguer from "./Burguer";
import logo from "../assets/logo-4.png";
import Link from "./Link";
import links from "../links";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setIsMenuOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const closeModal = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };
  return (
    <header className="fixed top-0 left-0 right-0  bg-gradient-to-b from-black to-transparent z-50 ">
      <div className=" relative text-white flex items-center justify-between p-4 px-8 h-24 max-w-7xl m-auto">
        <img
          className="w-16 
          p-4 hover:scale-110 ease-in-out duration-100"
          src={logo}
          alt="logo of alberto sierra"
        />
        <div className="hidden gap-4 md:flex">
          {links.map((l) => {
            return <Link key={l.name} name={l.name} url={l.url} />;
          })}
        </div>
        <Burguer
          openModal={openModal}
          closeModal={closeModal}
          isMenuOpen={isMenuOpen}
        />
        <AnimatePresence>
          {isMenuOpen && <MenuMobile closeModal={closeModal} />}
        </AnimatePresence>
      </div>
    </header>
  );
}
