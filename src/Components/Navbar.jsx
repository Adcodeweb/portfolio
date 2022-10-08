import { HashLink } from "react-router-hash-link";
import Menu from "./Menu";
import Burguer from "./Burguer";
import { useState } from "react";

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
    <div className="fixed w-full bg-black/20">
      <div className=" relative text-white flex justify-between p-4">
        <div className="">
          <h2>Adcode</h2>
        </div>
        <div className="hidden gap-4 md:flex ">
          <HashLink to="#home">Home</HashLink>
          <HashLink to="#code">Code</HashLink>
          <HashLink to="#about">Contact</HashLink>
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
