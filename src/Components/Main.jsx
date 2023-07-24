import React, { useState, useRef, useEffect } from "react";
import Introduce from "../Components/Introduce";
import About from "../Components/About";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  return (
    <>
      <div ref={refIntroduce}>
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
    </>
  );
}

export default Main;
