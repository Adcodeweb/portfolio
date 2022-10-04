import s from "./Project.module.scss";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../hooks/firebase-config";
import { useEffect } from "react";
import { useState } from "react";

export function Project() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProjects] = useState("");
  const [ready, setIsReady] = useState(false);

  const docRef = doc(db, "projects", id);

  const fetchDocument = async () => {
    const res = await getDoc(docRef);
    setProjects(res.data());
  };

  useEffect(() => {
    fetchDocument();
    setIsReady(true);
  }, []);

  return (
    <div className={s.container}>
      <article className={s.article}>
        <div className={s.wrapper}>
          <Button name={"Go back"} onClick={() => navigate(-1)} />
          <header className={s.header}>
            <h1>{project?.title}</h1>
            <p>{project?.overview}</p>
            <div className={s.tagsContainer}>
              {ready &&
                project.tags?.map((item, index) => {
                  return <h6 key={index}>{item}</h6>;
                })}
            </div>
          </header>
          {ready &&
            project.explanation?.map((item, index) => {
              return (
                <div className={s.infoSec} key={index}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <img className={s.img} src={item.img} alt="img" />
                </div>
              );
            })}
        </div>
      </article>
      <aside className={s.rightBar}>
        <div className={s.item}>
          <AiOutlineLink />
          <h6>{project?.liveurl}</h6>
        </div>
        <div className={s.item}>
          <AiFillGithub />
          <h6>{project?.giturl}</h6>
        </div>
        <hr className={s.line} />
      </aside>
    </div>
  );
}
