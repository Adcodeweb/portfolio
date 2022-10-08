import { HashLink } from "react-router-hash-link";

export default function Menu({ closeModal }) {
  return (
    <div className="absolute z-10 inset-0  h-screen bg-black/50 flex justify-end ">
      <div className="bg-black w-1/2 flex flex-col justify-between  ">
        <div className="flex flex-col gap-4 mt-16 p-5 text-right text-lg ">
          <HashLink to="#home" onClick={closeModal}>
            Home
          </HashLink>
          <HashLink to="#code" onClick={closeModal}>
            Code
          </HashLink>
          <HashLink to="#about" onClick={closeModal}>
            About
          </HashLink>
        </div>
        <div className="p-5 mb-5 text-center">
          <a
            href="mailto:adcodeweb@gmail.com"
            className="border border-white cursor-pointer "
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
