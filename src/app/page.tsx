import AboutMe from "@/components/screen/about-me";
import Experience from "@/components/screen/experience";
import Projects from "@/components/screen/projects";
import Skills from "@/components/screen/skills";

export default function Home() {
  return (
    <>
      <div id="aboutMe">
        <AboutMe></AboutMe>
      </div>
      <div id="experience">
        <Experience></Experience>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
      <div id="skills">
        <Skills></Skills>
      </div>
    </>
  );
}
