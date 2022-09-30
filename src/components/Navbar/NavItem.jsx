import s from "./Navbar.module.scss";
import { Link } from "react-router-dom";

export default function NavItem({ name, link }) {
  return (
    <Link to={`/${link}`} className={s.navItem}>
      {name}
    </Link>
  );
}
