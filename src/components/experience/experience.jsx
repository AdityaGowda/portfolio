"use client";
import { useState } from "react";
import "../../app/globals.css";

export default function Experience() {
  return (
    <section className="p-20">
      <p className="header text-center text-7xl font-extrabold ml-auto mr-auto flex flex-col">
        Professional <span> Experience</span>
      </p>
      <div className="flex flex-col">
        <PrfExp />
        <PrfExp />
        <PrfExp />
        <PrfExp />
        <PrfExp />
      </div>
    </section>
  );
}
function Plus(props) {
  return (
    <svg
      className="cursor-pointer"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1.3em"
      width="1.3em"
      {...props}
    >
      <path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z" />
    </svg>
  );
}
function Minus(props) {
  return (
    <svg
      className="cursor-pointer"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
    </svg>
  );
}

function Location(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}
function LineLink(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z" />
    </svg>
  );
}

function PrfExp() {
  const [dropDown, setDropDown] = useState(false);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="exp-container relative">
      <div
        className="experienceTitle p-6  bg-neutral-950 rounded-lg flex justify-between gap-14"
        onClick={() => setDropDown(!dropDown)}
      >
        <p className="">Senior Front-End Engineer @ Brave</p>
        <div className="flex items-center gap-7">
          <p className="">2023 - Present</p>

          {dropDown ? (
            <span className="transition-transform duration-300 rotate-180">
              <Minus />
            </span>
          ) : (
            <span className="transition-transform duration-300 rotate-90">
              <Plus />
            </span>
          )}
        </div>
      </div>
      <div
        style={{
          maxHeight: dropDown ? "300px" : "0px",
          opacity: dropDown ? "1" : "0",
          transition: "all cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
        }}
      >
        <div className="experienceDetails p-4 mt-5 mb-5 flex flex-col bg-neutral-950  overflow-auto rounded-lg gap-4 ">
          <div className="logo" id="urbanpro"></div>
          <div className="locationDetails flex gap-3 items-center">
            <span>
              <Location />
            </span>
            <span>Banglore</span>
          </div>

          <div className="companyDetails flex gap-3 items-center">
            <span>
              <LineLink />
            </span>
            <span>UrabanPro</span>
          </div>
          <p>{defaultContent}</p>
          <div className="skills">
            <p className="badge bg-slate-500 max-w-fit flex pt-2 pb-2 pl-5 pr-5 rounded-3xl">
              Javascript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
