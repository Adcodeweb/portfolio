import profilePhoto from "./p.png";
import { GrReactjs } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";
import { DiSass, DiJavascript1 } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";

export default function About() {
  return (
    <div className="bg-black text-white p-4 pt-20 pb-20" id="about">
      <h2 className="text-3xl mb-10 ml-4">About</h2>
      <div className="flex flex-col   gap-8 md:flex-row  ">
        <div className="">
          <img className="m-auto" src={profilePhoto} alt="image of person" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl">Hello there</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            sunt consequuntur quisquam aperiam similique distinctio explicabo
            voluptas earum possimus ipsum maxime, qui cumque repellendus.
            Facilis tenetur eos aspernatur quo ad.
          </p>

          <div className="pl-4 mt-5">
            <h4 className="text-xl">Skills</h4>
            <div className="flex gap-6 justify-center text-4xl mt-5">
              <GrReactjs />
              <SiFirebase />
              <DiSass />
              <DiJavascript1 />
              <TbBrandTailwind />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
