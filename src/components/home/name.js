"use client";
import { motion } from "framer-motion";
export default function NameBanner() {
  return (
    <div className="nameContainer flex justify-center  items-center flex-col">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
        className="text-9xl uppercase nameText text-center tracking-widest main-header max-950:text-[16vw] "
      >
        Adithya MR
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-medium mt-5 uppercase spacing25 subHeader max-950:text-[1pc] text-center"
      >
        Front-End Developer, Web UI Developer & DevOops
      </motion.p>
    </div>
  );
}
