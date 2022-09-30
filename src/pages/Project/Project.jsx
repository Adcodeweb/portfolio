import s from "./Project.module.scss";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function Project() {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <article className={s.article}>
        <div className={s.wrapper}>
          <Button name={"Go back"} onClick={() => navigate(-1)} />
          <header className={s.header}>
            <h1>Big bang </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              corrupti rem quae ab unde voluptatibus perspiciatis earum optio,
              consequuntur aliquid.unde voluptatibus perspiciatis earum optio,
              consequuntur aliquid.unde voluptatibus perspiciatis earum optio,
              consequuntur aliquid.
            </p>
            <div className={s.tagsContainer}>
              <h6>ReactJs</h6>
              <h6>SCSS</h6>
              <h6>Firebase</h6>
            </div>
          </header>
          <div className={s.infoSec}>
            <h2>
              Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet
              consecteturipsum dolor sit amet consecteturipsum dolor sit amet
              consectetur
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              aut inventore sapiente, quo id maiores modi, necessitatibus animi
              repellat obcaecati impedit iste totam tempora magnam voluptates ut
              ex? Est, necessitatibus.
            </p>
            <img
              className={s.img}
              src="https://cdn.dribbble.com/users/1928873/screenshots/5300720/lambdatest_animation_still_2x.gif?compress=1&resize=400x300&vertical=top"
              alt="img"
            />
          </div>
          <div className={s.infoSec}>
            <h2>title asdjasdoasj dkasodkasodv vkjiqwjeqwj </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              aut inventore sapiente, quo id maiores modi, necessitatibus animi
              repellat obcaecati impedit iste totam tempora magnam voluptates ut
              ex? Est, necessitatibus.
            </p>
            <img
              className={s.img}
              src="https://cdn.dribbble.com/users/1928873/screenshots/5300720/lambdatest_animation_still_2x.gif?compress=1&resize=400x300&vertical=top"
              alt="img"
            />
          </div>
        </div>
      </article>
      <aside className={s.rightBar}>
        <div className={s.item}>
          <AiOutlineLink />
          <h6>www.Adcodeweb.com</h6>
        </div>
        <div className={s.item}>
          <AiFillGithub />
          <h6>www.github/Adcodeweb.com</h6>
        </div>
        <hr className={s.line} />
      </aside>
    </div>
  );
}
