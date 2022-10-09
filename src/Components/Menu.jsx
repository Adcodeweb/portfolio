import { HashLink } from "react-router-hash-link";

export default function Menu({ closeModal }) {
  return (
    <div className="absolute z-10 inset-0  h-screen bg-black/50 flex justify-end  ">
      <div className="bg-black w-1/2 flex flex-col  ">
        <div className="flex flex-col gap-4 mt-16 p-5 text-right text-lg ">
          <HashLink to="/#home" onClick={closeModal}>
            Home
          </HashLink>
          <HashLink to="/#about" onClick={closeModal}>
            Know me
          </HashLink>
          <HashLink to="/#code" onClick={closeModal}>
            My projects
          </HashLink>
          <h4
            className="border border-white text-center mt-5"
            onClick={closeModal}
          >
            Resume
          </h4>
          <a
            href="mailto:adcodeweb@gmail.com"
            className="border border-white cursor-pointer text-center "
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
