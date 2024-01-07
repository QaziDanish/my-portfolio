import Navbar from "@/layout/navbar/Navbar";
import Intro from "@/sections/Intro";
import About from "@/sections/about";
import Skills from "@/sections/Skills";
import Education from "@/sections/education";
import Experience from "@/sections/experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Education />
      <Experience />
    </>
  );
}
