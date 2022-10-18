import { Link } from "react-router-dom";

export default function Card({ title, overview, img, id }) {
  return (
    <div className=" my-5 p-4 gap-5 grid items-center lg:grid-cols-2  ">
      <div className="md:h-76 w-76">
        <img src={img} alt="img" className="md:h-full w-full" />
      </div>
      <div className="flex flex-col ">
        <div className="">
          <h4 className="text-2xl mb-4 text-center font-title text-secondary md:text-left  ">
            {title}
          </h4>
          <p className="text-light text-center md:text-left">{overview}</p>
        </div>
        <div className="flex justify-center gap-4 mt-7 ">
          <Link
            to={`/project/${id}`}
            className="border border-primary cursor-pointer text-sm py-2 px-4"
          >
            More
          </Link>
          <button className="border border-primary cursor-pointer text-sm py-2 px-4 ">
            Live
          </button>
        </div>
      </div>
    </div>
  );
}
