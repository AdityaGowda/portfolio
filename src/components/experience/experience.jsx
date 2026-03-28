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
    "Next.js",
    "Node.js",
    "WebRTC",
    "WebSocket",
    "DevOps",
    "Cloud",
  ];
  const urbanProSEDescription = [
    "Built a real-time chat system using React and WebSocket (STOMP + SockJS) with event-based messaging, enabling low-latency communication, delivery status, unread counts, and live updates at scale for learner-to-tutor conversions.",
    "Developed an international calling feature using Plivo WebRTC–PSTN integration with real-time controls and call tracking, enabling seamless tutor connections across USA and UAE.",
    "Improved SEO, web optimization, and Core Web Vitals (LCP, CLS), enhancing application performance and load times, increasing PageSpeed scores, and driving ~20% organic growth.",
  ];
  const urbanProASEDescription = [
    "Built a tutor training scheduling system replacing Calendly with dynamic slot booking, real-time availability, capacity limits, and timezone-based conversion for global scheduling.",
    "Built and deployed TutorJobs using Next.js (SSR), Node.js, and Express.js with Linux setup, domain hosting, and GSC integration; achieved top 3–5 Google rankings, 50K impressions, and 3K+ clicks.",
    "Developed scalable React features serving 50K+ daily users, integrating REST APIs and collaborating with cross-functional teams.",
    "Deployed and managed applications on GCP and Azure using CI/CD pipelines (Jenkins), Docker, Linux setup, VPC networking, load balancing, auto-scaling, and cost optimization.",
  ];
  const kodnestDescription = [
    "Built reusable and responsive UI components using React, improving consistency and user experience across applications.",
  ];
  let technologyKodnest = ["HTML", "CSS", "JavaScript", "React", "DOM"];

  return (
    <section className="experience h-full pt-32 pb-32">
      <div className="flex flex-col justify-center items-center p-5">
        <motion.h2
          className="header subTitle text-center text-7xl mb-16 font-extrabold flex flex-col max-950:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Professional <span> Experience</span>
        </motion.h2>
        <motion.div
          className="flex flex-col gap-7 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ExperienceDetailsDropDown
            title={"Software Engineer (Frontend) @ UrbanPro"}
            timeLine={"June 2025 – Present"}
            location={"Bengaluru, India"}
            company={"UrbanPro"}
            companyLink={"https://www.urbanpro.com/"}
            description={urbanProSEDescription}
            tech={technologyUrbanpro}
            logo="UrbanPro"
          />
          <ExperienceDetailsDropDown
            title={"Associate Software Engineer (Frontend) @ UrbanPro"}
            timeLine={"June 2023 – May 2025"}
            location={"Bengaluru, India"}
            company={"UrbanPro"}
            companyLink={"https://www.urbanpro.com/"}
            description={urbanProASEDescription}
            tech={technologyUrbanpro}
            logo="UrbanPro"
          />
          <ExperienceDetailsDropDown
            title={"Trainee Intern @ Kodnest"}
            timeLine={"Dec 2022 – May 2023"}
            location={"Bengaluru, India"}
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
