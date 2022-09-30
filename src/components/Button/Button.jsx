import s from "./Button.module.scss";

export function Button({ name, onClick }) {
  return (
    <>
      <button onClick={onClick} className={s.Button}>
        {name}
      </button>
    </>
  );
}
