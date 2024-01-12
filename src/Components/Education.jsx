import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Education() {
  const padding = "pl-20 max-md:pl-10";
  const { t } = useTranslation();
  return (
    <div className="mt-28" id="education">
      <div className="flex flex-row flex-start items-center">
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <BsFillBriefcaseFill className="text-white mr-2 ml-2" />
          <p className="pr-2">{t("resume")}</p>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-9 mb-10">
        <h1 className="text-5xl text-gega-white font-sans max-lg:text-3xl">
          {t("education")} &
        </h1>
        <h1 className="text-5xl text-gega-green font-sans max-lg:text-3xl">
          {t("experience")}
        </h1>
      </div>
      {renderEducationItem(
        padding,
        "2021 - ~",
        "Bachelor",
        "University: Academy of State Customs Committee",
        "Speciality: Information Technology"
      )}
      {renderEducationItem(
        padding,
        "20.03.2022 - 01.10.2022",
        "Volunteer",
        '"Dil-inkişaf" club',
        "Social media manager"
      )}
      {renderEducationItem(
        padding,
        "18.04.2023 - ~",
        "Volunteer",
        "Enactus club",
        "Front-end developer"
      )}
      {renderEducationItem(
        padding,
        "06.10.2023 - 06.12.2023",
        "Intern",
        "Techtonas",
        "Front-end developer"
      )}
    </div>
  );
}

function renderEducationItem(padding, date, title, organization, role) {
  return (
    <div className={`relative group ${padding}`}>
      <div>
        <div className="absolute left-0 top-0 bg-gega-light rounded-full w-3 h-3 z-10 group-hover:bg-gega-green"></div>
        <div className="absolute left-1.5 top-0 h-[220px] max-md:h-[200px] border-l-0.5 border-gega-light"></div>
      </div>
      <div className="pl-8 max-md:pl-0 pb-5">
        <p className="pb-5 text-lg group-hover:text-gega-green text-gega-light">
          {date}
        </p>
        <p className="pb-5 text-base max-md:text-sm">{title}</p>
        <p className="pb-5 text-lg max-md:text-base">{organization}</p>
        <p className="pb-5 text-xl max-md:text-lg">{role}</p>
      </div>
    </div>
  );
}

export default Education;
