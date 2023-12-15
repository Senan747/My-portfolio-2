import React, { useEffect } from "react";
import Introduce from "./Introduce";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import { useInView } from "react-intersection-observer";
import Blogs from "./Blogs";

function Main() {
  const [refIntroduce, inViewIntroduce] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refAbout, inViewAbout] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refEducation, inViewEducation] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refSkills, inViewSkills] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refProjects, inViewProjects] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refBlogs, inViewBlogs] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animateElement = (elementRef, inView, animationVariants) => {
    const element = elementRef.current;
    if (element && inView) {
      element.style.opacity = animationVariants.opacity;
      element.style.transform = `translateY(${animationVariants.y}px)`;
    }
  };

  useEffect(() => {
    const animationVariants = { opacity: 1, y: 0 };
    animateElement(refIntroduce, inViewIntroduce, animationVariants);
  }, [refIntroduce, inViewIntroduce]);

  useEffect(() => {
    const animationVariants = { opacity: 1, y: 0 };
    animateElement(refAbout, inViewAbout, animationVariants);
  }, [refAbout, inViewAbout]);

  useEffect(() => {
    const animationVariants = { opacity: 1, y: 0 };
    animateElement(refEducation, inViewEducation, animationVariants);
  }, [refEducation, inViewEducation]);

  useEffect(() => {
    const animationVariants = { opacity: 1, y: 0 };
    animateElement(refSkills, inViewSkills, animationVariants);
  }, [refSkills, inViewSkills]);

  useEffect(() => {
    const animationVariants = { opacity: 1, y: 0 };
    animateElement(refProjects, inViewProjects, animationVariants);
  }, [refProjects, inViewProjects]);

  useEffect(() => {
    const animationVariants = { opacity: 1, y: 0 };
    animateElement(refBlogs, inViewBlogs, animationVariants);
  }, [refBlogs, inViewBlogs]);

  return (
    <>
      <div ref={refIntroduce} className="">
        <Introduce />
      </div>

      <div ref={refAbout}>
        <About />
      </div>

      <div ref={refEducation}>
        <Education />
      </div>

      <div ref={refSkills}>
        <Skills />
      </div>

      <div ref={refProjects}>
        <Projects />
      </div>

      <div ref={refBlogs}>
        <Blogs />
      </div>
    </>
  );
}

export default Main;
