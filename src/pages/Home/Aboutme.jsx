import s from "./Aboutme.module.scss";
import { GrReactjs } from "react-icons/gr";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import person from "./p.png";

export default function Aboutme() {
  return (
    <section className={s.aboutMe} id="About">
      <h2 className={s.title}>.About me</h2>
      <div className={s.aboutMeWrapper}>
        <img src={person} alt="person" />
        <div className={s.textSkills}>
          <div className={s.aboutMeText}>
            <p>
              Hi, my name is <span>Alberto Sierra</span>, I am a Front-end web
              developer. When I'm not coding I like to go out for a run.
            </p>
            <p>
              I am always eager to learn new things and grow as a developer,
              here are the technologies I currently know and use.
            </p>
          </div>
          {/* skills */}
          <div>
            <h3 className={s.subtitle}>Skills</h3>
            <div className={s.aboutMeWrapperRight}>
              <AiFillHtml5 className={s.tag} />
              <GrReactjs className={s.tag} />
              <DiJavascript1 className={s.tag} />
              <FaSass className={s.tag} />
              <AiFillGithub className={s.tag} />
              <SiFirebase className={s.tag} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
