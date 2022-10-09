import { HashLink } from "react-router-hash-link";
import Menu from "./Menu";
import Burguer from "./Burguer";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className=" relative text-white flex items-center justify-between p-4 h-24">
        <div className="text-2xl ">
          <Link to="/">Adcode</Link>
        </div>
        <div className="hidden gap-4 md:flex ">
          <HashLink to="#home">Home</HashLink>
          <HashLink to="#about">Know</HashLink>
          <HashLink to="#code">Code</HashLink>
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
