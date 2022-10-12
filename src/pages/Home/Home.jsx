import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

export function Home() {
  const ref = useRef();
  return (
    <div className="pb-10">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
