import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Education() {
  const padding = "pl-20";

  return (
    <div className="mt-28" id="education">
      <div className="flex flex-row flex-start items-center">
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <BsFillBriefcaseFill className="text-white mr-2 ml-2" />
          <p className="pr-2">Resume</p>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-9 mb-10">
        <h1 className="text-5xl text-gega-white font-sans max-lg:text-3xl">
          Education &
        </h1>
        <h1 className="text-5xl text-gega-green font-sans max-lg:text-3xl">
          Experience
        </h1>
      </div>
      {renderEducationItem(padding, "2021 - ~", "University: Academy of State Customs Committee", "Speciality: Information Technology")}
      {renderEducationItem(padding, "20.03.2022 - 01.10.2022", "Volunteer", "\"Dil-inkişaf\" club", "Social media manager")}
      {renderEducationItem(padding, "18.04.2023 - ~", "Volunteer", "Enactus club", "Front-end developer")}
      {renderEducationItem(padding, "06.10.2023 - 06.11.2023", "Intern", "Techtonas", "Front-end developer")}
    </div>
  );
}

function renderEducationItem(padding, date, title, organization, role) {
  return (
    <div className={`relative group ${padding}`}>
      <div>
        <div className="absolute left-0 top-0 bg-gega-light rounded-full w-3 h-3 z-10 group-hover:bg-gega-green"></div>
        <div className="absolute left-1.5 top-0 h-56 border-l-0.5 border-gega-light"></div>
      </div>
      <div className="pl-8 pb-10">
        <p className="pb-5 text-lg group-hover:text-gega-green text-gega-light">{date}</p>
        <p className="pb-5 text-base">{title}</p>
        <p className="pb-5 text-lg">{organization}</p>
        <p className="pb-5 text-xl">{role}</p>
      </div>
    </div>
  );
}

export default Education;
