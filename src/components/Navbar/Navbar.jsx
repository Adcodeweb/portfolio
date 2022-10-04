import { Link } from "react-router-dom";
import { Button } from "../Button";
import s from "./Navbar.module.scss";
import NavItem from "./NavItem";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

export function Navbar() {
  return (
    <div className={s.navbarContainer}>
      <div className={s.navbarLogo}>
        <Link to="/">
          <span className={s.logo}>.ad Dev </span>
        </Link>
      </div>
      <nav className={s.navItems}>
        <HashLink to="/#home">Home</HashLink>
        <HashLink to="/#About">About</HashLink>
        <HashLink to="/#projects">Code</HashLink>
        <HashLink to="https://github.com/Adcodeweb">
          <AiFillGithub className={s.icon} />
        </HashLink>
      </nav>
    </div>
  );
}
