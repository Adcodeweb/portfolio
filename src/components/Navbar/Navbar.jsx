import { Link } from "react-router-dom";
import { Button } from "../Button";
import s from "./Navbar.module.scss";
import NavItem from "./NavItem";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";

export function Navbar() {
  return (
    <div className={s.navbarContainer}>
      <div className={s.navbarLogo}>
        <Link to="/">
          <span className={s.logo}>.ad Dev </span>
        </Link>
      </div>
      <nav className={s.navItems}>
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#projects">Code</a>
        <a href="https://github.com/Adcodeweb">
          <AiFillGithub className={s.icon} />
        </a>
      </nav>
    </div>
  );
}
