"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [hover, setHover] = useState(false);

  function onHoverOnName() {
    setHover((prev) => !prev);
  }

  return (
    <div className="top-nav">
      <div
        className="flex justify-center items-center font-bold cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span className="font-extrabold text-2xl">&lt;</span>
        <span className="hl-blue text-2xl text-sky-300 subHeader">
          Adithya_M_R
        </span>
        <motion.div
          className="text-2xl text-green-400 max-w-full  ml-3 mr-3 overflow-hidden whitespace-nowrap subHeader"
          animate={{ width: hover ? 235 : 0 }}
          initial={{ width: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          onClick={() => window.location.reload()}
        >
          onClick=&#123;reload&#125;
        </motion.div>

        <span className="text-purple-600 font-extrabold text-2xl ">/</span>
        <span className="font-extrabold text-2xl">&gt;</span>
      </div>
    </div>
  );
}
