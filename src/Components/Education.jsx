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
      <div className="flex flex-row gap-4 mt-9 mb-12">
        <h1 className="text-5xl font-sans max-lg:text-3xl">
          {t("education")} &
        </h1>
        <h1 className="text-5xl text-gega-green font-sans max-lg:text-3xl">
          {t("experience")}
        </h1>
      </div>

      <div className="relative">
        <div
          className="absolute left-3 top-2 bottom-2 w-px bg-zinc-300 dark:bg-gega-light"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-6">
          {educationTimeline.map((item) => (
            <EducationItem key={`${item.organization}-${item.date}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationItem({ date, title, organization, role }) {
  return (
    <div className="relative group pl-10 max-md:pl-8">
      <span className="absolute left-3 top-7 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-gega-light ring-4 ring-gega-white dark:ring-gega-black group-hover:bg-gega-green transition duration-300" />
      <div className="border-1 border-zinc-300 dark:border-gega-light rounded-2xl p-6 max-md:p-4 group-hover:border-gega-green group-hover:-translate-y-0.5 transition duration-300">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mb-3">
          <span className="text-xs uppercase tracking-[0.2em] text-gega-green font-semibold">
            {title}
          </span>
          <span className="text-sm text-zinc-600 dark:text-gega-light">
            {date}
          </span>
        </div>
        <p className="text-lg max-md:text-base text-inherit mb-1">{role}</p>
        <p className="text-sm max-md:text-xs text-zinc-600 dark:text-gega-light">
          {organization}
        </p>
      </div>
    </div>
  );
}

export default Education;
