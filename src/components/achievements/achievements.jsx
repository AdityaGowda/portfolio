"use client";
import { motion } from "framer-motion";
import { SiLeetcode, SiGithub } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export default function Achievements() {
  return (
    <section className="achievements h-full pt-32 pb-32">
      <div className="flex flex-col justify-center items-center p-5">
        <motion.h2
          className="header subTitle text-center text-7xl mb-16 font-extrabold flex flex-col max-950:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Key <span> Achievements</span>
        </motion.h2>
        
        <motion.div
           className="flex flex-wrap justify-center gap-8 w-full max-w-6xl"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4 }}
           viewport={{ once: true, amount: 0.3 }}
        >
           <div className="group flex flex-col items-center flex-1 min-w-[300px] bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,161,22,0.15)] hover:border-[#FFA116]/50">
               <div className="text-6xl mb-6 text-white group-hover:text-[#FFA116] transition-colors duration-300">
                  <SiLeetcode />
               </div>
               <h3 className="text-2xl font-bold text-white text-center mb-4 leading-tight">Data Structures & Algorithms</h3>
               <p className="text-lg text-gray-300 text-center leading-relaxed">
                 Solved <span className="font-extrabold text-[#FFA116] text-xl">100+</span> complex computational problems on LeetCode.
               </p>
           </div>
           
           <div className="group flex flex-col items-center flex-1 min-w-[300px] bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(66,133,244,0.15)] hover:border-[#4285F4]/50">
               <div className="text-6xl mb-6 text-white group-hover:text-[#4285F4] transition-colors duration-300">
                 <VscCode />
               </div>
               <h3 className="text-2xl font-bold text-white text-center mb-4 leading-tight">Advanced Javascript & UI</h3>
               <p className="text-lg text-gray-300 text-center leading-relaxed">
                 Solved <span className="font-extrabold text-[#4285F4] text-xl">70+</span> robust UI engineering challenges on GreatFrontEnd.
               </p>
           </div>
           
           <div className="group flex flex-col items-center flex-1 min-w-[300px] bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:border-white/50">
               <div className="text-6xl mb-6 text-white group-hover:text-gray-300 transition-colors duration-300">
                 <SiGithub />
               </div>
               <h3 className="text-2xl font-bold text-white text-center mb-4 leading-tight">Open Source Projects</h3>
               <p className="text-lg text-gray-300 text-center leading-relaxed">
                 Built and published <a href="https://github.com/AdityaGowda" target="_blank" rel="noopener noreferrer" className="font-extrabold text-white text-xl hover:underline">12+</a> repositories on GitHub.
               </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
