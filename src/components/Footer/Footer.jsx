import { Link } from "react-router-dom";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.left}>
        <h1>.developedByAd</h1>
      </div>
      <div className={s.right}>
        <Link to="/">Blogs</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Contact</Link>
      </div>
      <p>Adcodeweb@gmail.com</p>
    </footer>
  );
}
