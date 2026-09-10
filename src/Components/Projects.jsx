import { useCallback, useEffect, useState } from "react";
import {
  FaGripVertical,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import { projects } from "../data/projects";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 80;

function Projects() {
  const { t } = useTranslation();
  const slideCount = projects.length + 1;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (i) => setIndex((i + slideCount) % slideCount),
    [slideCount]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, slideCount]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goTo(index + 1);
    else if (info.offset.x > SWIPE_THRESHOLD) goTo(index - 1);
  };

  return (
    <div className="mt-24 h-auto mx-10 max-md:mx-4 max-sm:mx-2" id="projects">
      <Header>
        <FaGripVertical className="text-inherit mx-2" />
        <p className="pr-2 text-inherit">{t("projects")}</p>
      </Header>

      <div
        className="relative group/slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative w-full aspect-video max-h-[450px] max-md:max-h-[260px] rounded-xl overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              {index < projects.length ? (
                <ProjectSlide {...projects[index]} />
              ) : (
                <MoreProjectsSlide label={t("moreProjects")} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous project"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gega-black/60 text-gega-white rounded-full p-2 opacity-0 group-hover/slider:opacity-100 max-md:opacity-100 hover:bg-gega-green hover:text-gega-black transition duration-300"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next project"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gega-black/60 text-gega-white rounded-full p-2 opacity-0 group-hover/slider:opacity-100 max-md:opacity-100 hover:bg-gega-green hover:text-gega-black transition duration-300"
        >
          <FaChevronRight />
        </button>

        <div className="flex flex-row justify-center gap-2 mt-5">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gega-green" : "w-2 bg-zinc-400 dark:bg-gega-light"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectSlide({ bgClass, tags, repo, live }) {
  return (
    <div className="relative w-full h-full">
      <div className={`absolute inset-0 ${bgClass} bg-cover bg-center rounded-xl`} />

      <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 max-w-[80%]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gega-green text-gega-white px-3 py-1 font-bold rounded-lg text-[10px] max-md:text-[9px]"
          >
            {tag}
          </span>
        ))}
      </div>

      {(repo || live) && (
        <div className="absolute top-3 right-3 flex flex-row gap-2">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="bg-gega-black/70 text-gega-white rounded-full p-2 hover:bg-gega-green hover:text-gega-black transition duration-300"
            >
              <AiFillGithub className="text-xl max-md:text-base" />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="bg-gega-black/70 text-gega-white rounded-full p-2 hover:bg-gega-green hover:text-gega-black transition duration-300"
            >
              <AiOutlineLink className="text-xl max-md:text-base" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function MoreProjectsSlide({ label }) {
  return (
    <a
      href="https://github.com/Senan747?tab=repositories"
      target="_blank"
      rel="noreferrer"
      className="group flex flex-row justify-center items-center w-full h-full rounded-xl border-1 border-zinc-300 dark:border-gega-light hover:border-gega-green transition duration-300"
    >
      <span className="text-inherit group-hover:text-gega-green transition duration-300">
        {label}
      </span>
      <FaArrowRight className="text-inherit ml-4 group-hover:text-gega-green transition duration-300" />
    </a>
  );
}

export default Projects;
