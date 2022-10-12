import { TbHandRock } from "react-icons/tb";

export default function Contact() {
  return (
    <div className="text-light bg-dark w-10/12 mt-20 max-w-4xl mx-auto p-7 py-10 flex flex-col  items-center justify-center text-center gap-7 shadow-mine shadow-secondary md:flex-row ">
      <h2 className="text-2xl font-semibold font-title">
        Interested in working together?
      </h2>
      <a
        href="mailto:adcodeweb@gmail.com"
        className="flex items-center gap-2 justify-center border-primary border w-fit  py-2 px-4 text-lg font-medium hover:bg-primary hover:text-dark ease-in-out duration-300"
      >
        <TbHandRock />
        Let's do it
      </a>
    </div>
  );
}
