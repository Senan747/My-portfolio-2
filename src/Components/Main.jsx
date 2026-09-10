import Introduce from "./Introduce";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Blogs from "./Blogs";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

function Main() {
  const introduce = useRevealOnScroll();
  const about = useRevealOnScroll();
  const education = useRevealOnScroll();
  const skills = useRevealOnScroll();
  const projects = useRevealOnScroll();
  const blogs = useRevealOnScroll();

  return (
    <>
      <div ref={introduce.ref} className={introduce.className}>
        <Introduce />
      </div>

      <div ref={about.ref} className={about.className}>
        <About />
      </div>

      <div ref={education.ref} className={education.className}>
        <Education />
      </div>

      <div ref={skills.ref} className={skills.className}>
        <Skills />
      </div>

      <div ref={projects.ref} className={projects.className}>
        <Projects />
      </div>

      <div ref={blogs.ref} className={blogs.className}>
        <Blogs />
      </div>
    </>
  );
}

export default Main;
