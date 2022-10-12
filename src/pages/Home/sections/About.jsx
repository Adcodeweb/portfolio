import profilePhoto from "./p.png";
import { GrReactjs } from "react-icons/gr";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { DiSass, DiJavascript1 } from "react-icons/di";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-black to-dark text-light p-4 py-20  ">
      <div className="max-w-6xl m-auto">
        <h2
          className="text-3xl text-primary font-title mb-10 md:ml-10 md:my-20  "
          id="about"
        >
          About
        </h2>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-0  ">
          <div className="flex-1">
            <img className="m-auto md:w-96" src={profilePhoto} alt="person" />
          </div>
          <div className="flex flex-col gap-3 flex-1 md:p-5 md:mr-10">
            <h3 className="text-2xl">Hello there!</h3>
            <p>
              My name is
              <span className="text-primary text-xl"> Alberto Sierra</span> , I
              am a Front-end web developer. When I'm not coding I like to go out
              for a run.
            </p>

            <p>
              I am always eager to learn new things and grow as a developer,
              here are the technologies I currently know and use.
            </p>

            <div className="pl-4 mt-5">
              <h4 className="text-xl">Skills</h4>
              <div className="flex flex-wrap gap-6 justify-center text-5xl mt-5">
                <GrReactjs className="text-sky-200" />
                <SiFirebase className="text-yellow-500" />
                <DiSass className="text-pink-600" />
                <DiJavascript1 className="text-yellow-400" />
                <SiTailwindcss className="text-sky-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
