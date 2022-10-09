import Menu from "./Menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export default function MobileMenu({ closeModal, openModal, isMenuOpen }) {
  return (
    <div className="z-50 text-white text-3xl  md:hidden ">
      {!isMenuOpen ? (
        <GiHamburgerMenu onClick={openModal} />
      ) : (
        <VscChromeClose onClick={closeModal} />
      )}
    </div>
  );
}
