"use client";
import Projects from "../projects/projects";
import { motion } from "framer-motion";
export default function MyWork() {
  return (
    <section className="myWork h-full pt-32 pb-32">
      <div className="workContainer  max-950:p-5 pl-40">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="header subTitle text-8xl font-extrabold w-14 text-wrap  max-950:text-7xl"
        >
          My Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="subHeader myworkDetails pt-10 text-2xl max-w-xl max-950:text-[1.2rem]"
        >
          Engineered and deployed scalable, responsive web applications leveraging JavaScript, React.js, Next.js, and Node.js, serving thousands of users.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="subHeader myworkDetails pt-10 text-2xl max-w-xl  max-950:text-[1.2rem]"
        >
          Focused on crafting high-performance, interactive, and user-centric interfaces, with an emphasis on front-end architecture, performance optimization, and seamless user experience.
        </motion.p>
      </div>
      <div className="mt-40 p-5">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ amount: 0.9 }}
          className="header subTitle text-6xl font-extrabold text-center  text-wrap  max-950:text-5xl"
        >
          My Personal Projects
        </motion.p>

        <Projects />
      </div>
    </section>
  );
}
