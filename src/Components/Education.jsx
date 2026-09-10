import { BsFillBriefcaseFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import { educationTimeline } from "../data/education";

function Education() {
  const { t } = useTranslation();

  return (
    <div className="mt-28" id="education">
      <Header>
        <BsFillBriefcaseFill className="text-inherit mr-2 ml-2" />
        <p className="pr-2 text-inherit">{t("resume")}</p>
      </Header>
      <div className="flex flex-row gap-4 mt-9 mb-10">
        <h1 className="text-5xl font-sans max-lg:text-3xl">
          {t("education")} &
        </h1>
        <h1 className="text-5xl text-gega-green font-sans max-lg:text-3xl">
          {t("experience")}
        </h1>
      </div>
      {educationTimeline.map((item) => (
        <EducationItem key={`${item.organization}-${item.date}`} {...item} />
      ))}
    </div>
  );
}

function EducationItem({ date, title, organization, role }) {
  return (
    <div className="relative group pl-20 max-md:pl-10 text-inherit">
      <div>
        <div className="absolute left-0 top-0 bg-zinc-400 dark:bg-gega-light rounded-full w-3 h-3 z-10 group-hover:bg-gega-green"></div>
        <div className="absolute left-1.5 top-0 h-[220px] max-md:h-[200px] border-l-0.5 border-zinc-300 dark:border-gega-light"></div>
      </div>
      <div className="pl-8 max-md:pl-0 pb-5">
        <p className="pb-5 text-lg group-hover:text-gega-green text-zinc-600 dark:text-gega-light">
          {date}
        </p>
        <p className="pb-5 text-base max-md:text-sm text-inherit">{title}</p>
        <p className="pb-5 text-lg max-md:text-base text-inherit">
          {organization}
        </p>
        <p className="pb-5 text-xl max-md:text-lg text-inherit">{role}</p>
      </div>
    </div>
  );
}

export default Education;
