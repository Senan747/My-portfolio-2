import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";

function Education() {
  return (
    <div className="mt-28" id="education">
      <div className="flex flex-row flex-start items-center ">
        <div className="flex flex-row items-center border-1 border-gega-light p-1 rounded-xl space-x-1">
          <BsFillBriefcaseFill className="text-white mr-2 ml-2" />
          <p className="pr-2">Resume</p>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-9">
        <h1 className="text-5xl text-gega-white font-sans max-lg:text-3xl">
          Education &
        </h1>
        <h1 className="text-5xl text-gega-green font-sans max-lg:text-3xl">
          Experience
        </h1>
      </div>
      <div className="pl-20 mt-20 relative group">
        <div>
          <div className="absolute left-0 top-0 bg-gega-light rounded-full w-3 h-3 z-10 group-hover:bg-gega-green"></div>
          <div className="absolute left-1.5 top-0 h-56 border-l-0.5 border-gega-light "></div>
        </div>
        <div className="pl-8 pb-10">
          <p className="pb-5 text-xl group-hover:text-gega-green">2021 - ~</p>
          <p className="pb-5 text-lg">
            University: Academy of State Customs Committee
          </p>
          <p className="pb-5 text-xl">Speciality: Information Technology</p>
        </div>
      </div>
      <div className="pl-20 relative group">
        <div>
          <div className="absolute left-0 top-0 bg-gega-light rounded-full w-3 h-3 z-10 group-hover:bg-gega-green"></div>
          <div className="absolute left-1.5 top-0 h-[300px] border-l-0.5 border-gega-light "></div>
        </div>
        <div className="pl-8 pb-10">
          <p className="pb-10 text-xl group-hover:text-gega-green">
            20.03.2022 - 01.10.2022
          </p>
          <p className="pb-5 text-base">Volunteer</p>
          <p className="pb-5 text-lg">"Dil-inkişaf" club</p>
          <p className="pb-5 text-xl">Social media manager</p>
        </div>
      </div>
      <div className="pl-20 relative group">
        <div>
          <div className="absolute left-0 top-0 bg-gega-light rounded-full w-3 h-3 z-10 group-hover:bg-gega-green"></div>
          <div className="absolute left-1.5 top-0 h-56 border-l-0.5 border-gega-light "></div>
        </div>
        <div className="pl-8">
          <p className="pb-10 text-xl group-hover:text-gega-green">
            18.04.2023 - ~
          </p>
          <p className="pb-5 text-base">Volunteer</p>
          <p className="pb-5 text-lg">Enactus club</p>
          <p className="pb-5 text-xl">Front-end developer</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
