"use client";
import { useState } from "react";
import ExperienceDetails from "./experienceDetails";
import ExperienceTitle from "./experienceTitle";
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

  return (
    <div className=" relative flex flex-col items-center ">
      <ExperienceTitle
        onclick={() => setDropDown(!dropDown)}
        dropDown={dropDown}
        title={title}
        timeLine={timeLine}
      />
      <div
        className=" flex flex-col justify-center items-center transition-all duration-500 ease-in-out overflow-hidden w-full"
        style={{
          maxHeight: dropDown ? "900px" : "0px",
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
  let technologyUrbanpro = [
    "JavaScript",
    "React",
    "NextJs",
    "NodeJs",
    "JQuery",
    "DevOps",
    "Cloud",
  ];
  const urbanProDescription = [
    "Transformed design mockups into responsive layouts using ReactJS, JavaScript, HTML, and CSS.",
    "Built and launched the microservice-based TutorJobs portal using Next.js and Node.js, achieving 100k clicks in the first month.",
    " Led feature development and enhancements, focusing on performance optimization, accessibility, and user experience improvements.",
    " Recognized as the Best Performer in the Team for 2023 and 2024, with multiple Performer of the Month awards.",
  ];
  const kodnestDescription = [
    "Developed strong frontend skills in HTML, CSS, and JavaScript (ES6), with hands-on experience and a deep understanding of advanced concepts like asynchronous programming, closures, and event-driven architecture.",
  ];
  let technologyKodnest = ["HTML", "CSS", "JavaScript", "DOM", "OOPS", "Java"];
  return (
    <section className="experience h-full">
      <div className="flex flex-col justify-center items-center p-5 mt-64">
        <motion.h2
          className="header subTitle text-center text-7xl mb-16 font-extrabold flex flex-col max-950:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.9 }}
        >
          Professional <span> Experience</span>
        </motion.h2>
        <motion.div
          className="flex flex-col gap-7 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <ExperienceDetailsDropDown
            title={"Web UI Developer @ UrbanPro"}
            timeLine={"2023 June - Present"}
            location={"Bangalore"}
            company={"UrbanPro"}
            companyLink={"https://www.urbanpro.com/"}
            description={urbanProDescription}
            tech={technologyUrbanpro}
            logo="UrbanPro"
          />
          <ExperienceDetailsDropDown
            title={"Intern @ Kodnest"}
            timeLine={"2022 Dec - 2023 May"}
            location={"Bangalore"}
            company={"Kodnest"}
            companyLink={"https://www.kodnest.com/"}
            description={kodnestDescription}
            tech={technologyKodnest}
            logo="KodNest"
          />
        </motion.div>
      </div>
    </section>
  );
}
