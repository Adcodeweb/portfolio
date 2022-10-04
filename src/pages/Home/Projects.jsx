import s from "./Projects.module.scss";
import Card from "./Card";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../hooks/firebase-config";

const docsRef = collection(db, "projects");

export default function Projects() {
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
    <section className={s.projects} id="projects">
      <h2 className={s.title}>.Projects</h2>
      <div className={s.wrapper}>
        <div className={s.projectsText}>
          <p>
            All this projects have been made from scratch using diferent
            technologies and putting together concepts, some of the project are
            made using firebase as backend and other using Public APIS.
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
  );
}
