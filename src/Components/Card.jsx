import { AiOutlinePlus } from "react-icons/ai";
export default function Card() {
  return (
    <div className=" p-4 gap-5 grid md:grid-cols-2 md:  rounded-xl ">
      <div className="md:h-76 w-76">
        <img
          src="https://www.adobe.com/express/create/cover/media_1bcde041d6bd2ce06433dd3d32a457d1b589ce390.jpeg"
          alt="img"
          className="md:h-full w-full"
        />
      </div>
      <div className="flex md:flex-col gap-5">
        <div className="">
          <h4 className="text-2xl">Sneakers E-commerce</h4>
          <p className="text-white/75">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            nesciunt ut? Consequuntur corrupti harum obcaecati laboriosam. At
            repellat quasi sed.
          </p>
        </div>
      </div>
    </div>
  );
}
