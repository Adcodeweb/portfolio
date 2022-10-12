import { HashLink } from "react-router-hash-link";
import Menu from "./Menu";
import Burguer from "./Burguer";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo-4.png";

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
    <div className="fixed top-0 left-0 right-0  bg-gradient-to-b from-black to-transparent  ">
      <div className=" relative text-white flex items-center justify-between p-4 px-8 h-24 max-w-7xl m-auto">
        <div className="text-2xl ">
          <Link to="/">
            <img
              className="w-16 
            p-4"
              src={logo}
              alt="logo of alberto sierra"
            />
          </Link>
        </div>
        <div className="hidden gap-4 md:flex  ">
          <HashLink
            to="#home"
            className=" hover:text-primary hover:border-primary hover:border-b ease-in duration-200"
          >
            Home
          </HashLink>
          <HashLink
            to="#about"
            className=" hover:text-primary hover:border-primary hover:border-b ease-in duration-200"
          >
            Know
          </HashLink>
          <HashLink
            to="#code"
            className=" hover:text-primary hover:border-primary hover:border-b ease-in duration-200"
          >
            Code
          </HashLink>
        </div>
        <Burguer
          openModal={openModal}
          closeModal={closeModal}
          isMenuOpen={isMenuOpen}
        />
        {isMenuOpen && <Menu closeModal={closeModal} />}
      </div>
    </div>
  );
}
