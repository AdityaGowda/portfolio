"use client";
import { useState } from "react";
import ExperienceDetails from "./experienceDetails";
import ExperienceTitle from "./experienceTitle";
import urbanpro from "@/components/icons/urbanpro.png";
import kodnest from "@/components/icons/kodnest.png";
import { motion } from "framer-motion";

function ExperienceDetailsDropDown({
  title,
  timeLine,
  logo,
  location,
  company,
  description,
  tech = [],
  companyLink,
}) {
  const [dropDown, setDropDown] = useState(false);
  console.log(dropDown);
  return (
    <div className=" relative flex flex-col items-center  ">
      <ExperienceTitle
        onclick={() => setDropDown(!dropDown)}
        dropDown={dropDown}
        title={title}
        timeLine={timeLine}
      />
      <div
        className=" flex flex-col justify-center items-center transition-all duration-500 ease-in-out overflow-hidden w-full"
        style={{
          maxHeight: dropDown ? "450px" : "0px",
          opacity: dropDown ? "1" : "0",
        }}
      >
        <ExperienceDetails
          location={location}
          company={company}
          description={description}
          tech={tech}
          companyLink={companyLink}
          logo={logo}
        />
      </div>
    </div>
  );
}
export default function Experience() {
  const techUrbanpro = [
    "JavaScript",
    "React",
    "NextJs",
    "NodeJs",
    "Jquery",
    "DevOops",
    "Cloud",
  ];
  const techKodnest = ["JavaScript", "HTML/CSS", "React"];
  return (
    <section className="experience h-full">
      <div className="flex flex-col justify-center items-center p-5 mt-64">
        <motion.p
          className="header subTitle text-center text-7xl mb-16 font-extrabold flex flex-col max-950:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Professional <span> Experience</span>
        </motion.p>
        <motion.div
          className="flex flex-col gap-7 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <ExperienceDetailsDropDown
            title={"Web UI Developer @ UrbanPro"}
            timeLine={"2023 June -Present"}
            location={"Bangalore"}
            company={"UrbanPro"}
            companyLink={"https://www.urbanpro.com/"}
            description={
              "Led the Creators platform rebuild with React and Next.js 13, improving performance, scalability, and accessibility. Built over 50% of Brave's reusable component library and assisted in implementing GraphQL for efficient API data fetching."
            }
            tech={techUrbanpro}
            logo={urbanpro}
          />
          <ExperienceDetailsDropDown
            title={"Intern @ Kodnest"}
            timeLine={"2022 Dec-2023 May"}
            location={"Bangalore"}
            company={"Kodnest"}
            companyLink={"https://www.kodnest.com/"}
            description={
              "Led the Creators platform rebuild with React and Next.js 13, improving performance, scalability, and accessibility. Built over 50% of Brave's reusable component library and assisted in implementing GraphQL for efficient API data fetching."
            }
            logo={kodnest}
          />
        </motion.div>
      </div>
    </section>
  );
}
