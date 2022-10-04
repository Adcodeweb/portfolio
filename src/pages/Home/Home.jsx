import s from "./Home.module.scss";
import Aboutme from "./Aboutme";
import Projects from "./Projects";

export function Home() {
  return (
    <div className={s.container}>
      <section className={s.heroContainer}>
        <div className={s.heroRight}>
          <h1>Alberto Sierra</h1>
          <p>Front-End Web Developer.</p>
        </div>
      </section>
      <Aboutme />
      <Projects />
      <section className={s.banner}>
        <h2>Want to get in touch?</h2>
        <a href="mailto:adcodeweb@gmail.com">adcodeweb@gmail.com</a>
        <div className={s.bannerOpacity}></div>
      </section>
      <a href="mailto:Adcodeweb@gmail.com" className={s.correo}>
        Adcodeweb@gmail.com
      </a>
    </div>
  );
}
