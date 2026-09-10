import { FaShapes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import { skillCategories } from "../data/skills";

function Skills() {
  const { t } = useTranslation();

  return (
    <div className="mt-60 max-md:mt-32" id="skills">
      <Header>
        <FaShapes className="text-inherit mx-2" />
        <p className="pr-2 text-inherit">{t("skills")}</p>
      </Header>

      <div className="flex flex-col gap-14 my-16 max-md:my-8 max-md:gap-10">
        {skillCategories.map(({ key, items }) => (
          <div key={key}>
            <p className="text-sm uppercase tracking-[0.2em] text-gega-green font-semibold mb-6">
              {t(`skillCategories.${key}`)}
            </p>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4">
              {items.map(({ Icon, name }) => (
                <li
                  key={name}
                  className="group flex flex-col items-center justify-center gap-3 border-1 border-zinc-300 dark:border-gega-light rounded-2xl py-6 px-2 hover:border-gega-green hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(40,233,140,0.5)] transition duration-300"
                >
                  <Icon className="text-4xl text-inherit group-hover:text-gega-green transition duration-300 max-md:text-3xl" />
                  <p className="text-sm text-inherit text-center">{name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
