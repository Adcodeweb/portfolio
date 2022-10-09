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
    <div className="py-16 text-white ">
      <button
        onClick={() => navigate(-1)}
        className="fixed bottom-6 right-4 bg-black/25 rounded-full p-2 text-4xl"
      >
        <TiArrowBackOutline />
      </button>
      <div className="p-5">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          {/* left */}
          <div className="flex-1">
            <h1 className="text-3xl text-center mb-4 uppercase font-bold lg:text-left">
              E commerce Sneakers
            </h1>
            <p className=" text-white/80 mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, provident sit iusto obcaecati dolore perferendis
              aperiam! Quia inventore veritatis suscipit!
            </p>
            <p className="capitalize mb-3">Created with</p>
            <div className="flex gap-4 mb-6 text-3xl ">
              <RiReactjsFill className="text-blue-300" />
              <SiTailwindcss className="text-blue-500" />
              <SiFirebase className="text-yellow-600" />
            </div>
          </div>
          {/* right */}

          <img
            src="https://media.giphy.com/media/VgkbQX1NTzmDuIcPRs/giphy.gif"
            alt="project img"
            className="mx-auto my-5 flex-1 md:h-64 object-cover object-top lg:h-80  "
          />
        </div>
        <div className="flex flex-wrap gap-4  justify-center p-4 md:border-b md:mt-7 border-white ">
          <a
            href="#"
            className="flex items-center shadow-sm shadow-white p-3 rounded-md gap-2"
          >
            <RiExternalLinkLine />
            Live Page
          </a>
          <a
            href="#"
            className="flex items-center shadow-sm shadow-white p-3 rounded-md gap-2"
          >
            <RiGithubFill />
            Github Repository
          </a>
        </div>
      </div>

      <div className="my-10 p-5">
        <h3 className="text-2xl mb-4">Title</h3>
        <p className="text-white/90">
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
