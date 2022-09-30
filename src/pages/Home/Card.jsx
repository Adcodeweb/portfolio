import { Button } from "../../components/Button";
import s from "./Home.module.scss";
import { AiOutlineLink } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Card({ direction }) {
  return (
    <div
      className={s.cardContainer}
      style={{ flexDirection: ` ${direction ? "row-reverse" : "row"}` }}
    >
      <div
        className={s.cardContainerLeft}
        style={{
          background: `URL(https://www.adobe.com/express/create/cover/media_1e4d960315c3739ba1ff9adb784fe5ee42e23f272.jpeg?width=400&format=jpeg&optimize=medium)`,
        }}
      ></div>
      <div className={s.cardContainerRight}>
        <h3>Titulo</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sit
          quaerat dolores quisquam cumque. Quisquam!
        </p>
        <div className={s.cardBotons}>
          <Link to="/project">
            <Button name={<FiPlus className={s.botonIcon} />} />
          </Link>
          <Button name={<AiOutlineLink className={s.botonIcon} />} />
        </div>
      </div>
    </div>
  );
}
