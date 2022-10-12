import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <div className=" my-5 p-4 gap-5 grid items-center lg:grid-cols-2  ">
      <div className="md:h-76 w-76">
        <img
          src="https://www.adobe.com/express/create/cover/media_1bcde041d6bd2ce06433dd3d32a457d1b589ce390.jpeg"
          alt="img"
          className="md:h-full w-full"
        />
      </div>
      <div className="flex flex-col ">
        <div className="">
          <h4 className="text-2xl mb-4 text-center font-title text-secondary md:text-left  ">
            Sneakers E-commerce
          </h4>
          <p className="text-light text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            nesciunt ut? Consequuntur corrupti harum obcaecati laboriosam. At
            repellat quasi sed.
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-7 ">
          <Link
            to="/project/12"
            className="border border-primary cursor-pointer text-sm py-2 px-4"
          >
            Live
          </Link>
          <button className="border border-primary cursor-pointer text-sm py-2 px-4 ">
            More
          </button>
        </div>
      </div>
    </div>
  );
}
