"use client";
import { useState } from "react";
import ExperienceDetails from "./experienceDetails";
import ExperienceTitle from "./experienceTitle";

function ExperienceDetailsDropDown() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="exp-container relative">
      <ExperienceTitle
        onclick={() => setDropDown(!dropDown)}
        dropDown={dropDown}
      />
      <div
        style={{
          maxHeight: dropDown ? "300px" : "0px",
          opacity: dropDown ? "1" : "0",
        }}
      >
        <ExperienceDetails />
      </div>
    </div>
  );
}
export default function Experience() {
  return (
    <section className="p-20">
      <p className="header text-center text-7xl mb-16 font-extrabold ml-auto mr-auto flex flex-col">
        Professional <span> Experience</span>
      </p>
      <div className="flex flex-col">
        <ExperienceDetailsDropDown />
      </div>
    </section>
  );
}
