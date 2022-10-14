import { HashLink } from "react-router-hash-link";

export default function Link({ name, url, closeModal }) {
  return (
    <HashLink
      to={`/#${url}`}
      onClick={closeModal}
      className="hover:text-primary hover:border-primary hover:border-b ease-in duration-200"
    >
      {name}
    </HashLink>
  );
}
