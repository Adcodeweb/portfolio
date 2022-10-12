import {
  RiExternalLinkLine,
  RiGithubFill,
  RiReactjsFill,
} from "react-icons/ri";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { TiArrowBackOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
export default function Project() {
  let navigate = useNavigate();
  return (
    <div className="py-16 text-light ">
      <button
        onClick={() => navigate(-1)}
        className="fixed bottom-6 right-4 bg-primary/25 rounded-full p-2 text-4xl"
      >
        <TiArrowBackOutline />
      </button>
      <div className="p-5 mt-5 md:max-w-6xl m-auto max-w-lg md:px-5 ">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          {/* left */}
          <div className="flex-1">
            <h1 className="text-3xl text-center mb-2 font-title text-primary uppercase font-bold sm:text-4xl lg:text-left md:text-6xl ">
              E commerce Sneakers
            </h1>
            <p className="text-xs mb-4 underline ">Still in development</p>

            <p className=" text-white/80 mb-4 sm:text-center md:text-lg md:text-left ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, provident sit iusto obcaecati dolore perferendis
              aperiam! Quia inventore veritatis suscipit!
            </p>
            <p className="capitalize mb-3">Created with</p>
            <div className="flex gap-4 mb-6 text-3xl md:text-5xl ">
              <RiReactjsFill className="text-blue-300" />
              <SiTailwindcss className="text-blue-500" />
              <SiFirebase className="text-yellow-600" />
            </div>
            <div className="flex flex-wrap gap-4  justify-center p-4 md:border-b md:mt-7 md:pb-10 border-primary">
              <a
                href="/"
                className="flex items-center shadow-sm shadow-primary p-3 rounded-md gap-2  hover:text-primary hover:bg-dark ease-in-out duration-200"
              >
                <RiExternalLinkLine />
                Live Page
              </a>
              <a
                href="/"
                className="flex items-center shadow-sm shadow-primary p-3 rounded-md gap-2 hover:text-primary hover:bg-dark ease-in-out duration-200"
              >
                <RiGithubFill />
                Code
              </a>
            </div>
          </div>
          {/* right */}

          <img
            src="https://media.giphy.com/media/VgkbQX1NTzmDuIcPRs/giphy.gif"
            alt="project img"
            className="mx-auto my-5 flex-1 sm:w-full  md:h-80 object-cover object-top lg:h-96  "
          />
        </div>
      </div>

      <div className="my-10 p-10 md:px-16 max-w-4xl m-auto">
        <h3 className="text-2xl mb-4 text-secondary md:text-3xl">Title</h3>
        <p className="text-white/90 md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
          natus? Placeat aut eligendi nam dolor quos vel ducimus neque tempora
          eveniet id, ab reprehenderit, voluptatum, mollitia molestias quibusdam
          fuga odit iste. Quam doloremque error quae ipsa sed fugit quasi
          provident!
        </p>
      </div>
    </div>
  );
}
