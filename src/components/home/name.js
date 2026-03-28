"use client";
import { motion } from "framer-motion";
export default function NameBanner() {
  return (
    <div className="nameContainer flex justify-center  items-center flex-col">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        className="text-9xl uppercase nameText text-center tracking-widest main-header max-950:text-[16vw]"
      >
        Adithya <span className="max-950:hidden">M R</span>
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-medium mt-5 uppercase spacing25 subHeader max-950:text-xl text-center"
      >
        Software Engineer
      </motion.h2>
      <h1 className="sr-only">
        Adithya - Software Engineer | Full Stack Developer | Technical Lead
      </h1>
    </div>
  );
}
