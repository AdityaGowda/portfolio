"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [hover, setHover] = useState(false);
  const [isMobile, setMobile] = useState(true);

  function onHoverOnName() {
    setHover((prev) => !prev);
  }
  useEffect(() => {
    if (window.innerWidth < 950) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });
  return (
    <AnimatePresence>
      <motion.div
        className="top-nav"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div
          className="flex justify-center items-center font-bold cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span className="font-extrabold text-2xl max-950:text-lg">&lt;</span>
          <span className="hl-blue text-2xl text-sky-300 ml-1 subHeader  max-950:text-lg">
            Adithya_M_R
          </span>
          <motion.div
            className="text-2xl text-green-400 max-w-full  ml-3 mr-3 overflow-hidden whitespace-nowrap subHeader max-950:text-[16px] max-950:ml-2 max-950:mr-1"
            animate={
              isMobile ? { width: hover ? 155 : 0 } : { width: hover ? 235 : 0 }
            }
            initial={{ width: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            onClick={() => window.location.reload()}
          >
            onClick=&#123;reload&#125;
          </motion.div>

          <span className="text-purple-600 font-extrabold text-2xl mr-1 max-950:text-lg">
            /
          </span>
          <span className="font-extrabold text-2xl max-950:text-lg">&gt;</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
