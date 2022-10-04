import Card from "./Card";
import s from "./Home.module.scss";
import { GrReactjs } from "react-icons/gr";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import person from "./p.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../hooks/firebase-config";
import { useEffect, useState } from "react";

const docsRef = collection(db, "projects");

export function Home() {
  const [projects, setProjects] = useState([]);

  const getDocsFromDB = async () => {
    try {
      const querySnapshot = await getDocs(docsRef);
      const datos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProjects(datos);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getDocsFromDB();
  }, []);
  return (
    <div className={s.container}>
      <section className={s.heroContainer}>
        <div className={s.heroRight}>
          <h1>Alberto Sierra</h1>
          <p>I'm a Front-End Web Developer.</p>
        </div>
      </section>
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

      <section className={s.projects} id="projects">
        <h2 className={s.title}>.Projects</h2>
        <div className={s.wrapper}>
          <div className={s.projectsText}>
            <p>
              All this projects have been made from scratch using diferent
              technologies and putting together concepts, some of the project
              are made using firebase as backend and other using Public APIS.
            </p>
          </div>
          <div className={s.projectsWrapper}>
            {projects?.map((item, index) => {
              if (index % 2 == 0) {
                return <Card key={index} item={item} />;
              } else return <Card key={index} item={item} direction={true} />;
            })}
          </div>
        </div>
      </section>
      <a href="mailto:Adcodeweb@gmail.com" className={s.correo}>
        Adcodeweb@gmail.com
      </a>
    </div>
  );
}
