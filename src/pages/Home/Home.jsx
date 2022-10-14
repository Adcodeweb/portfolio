import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="pb-10">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
