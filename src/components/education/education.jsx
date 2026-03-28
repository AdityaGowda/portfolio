"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="education h-full pt-32 pb-32">
      <div className="flex flex-col justify-center items-center p-5">
        <motion.h2
          className="header subTitle text-center text-7xl mb-16 font-extrabold flex flex-col max-950:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          My <span> Education</span>
        </motion.h2>
        
        <motion.div
           className="flex flex-col gap-4 w-full max-w-4xl bg-white/5 border rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,137,214,0.15)] hover:border-[#0089D6]/50"
           style={{ borderColor: "rgba(255, 255, 255, 0.1)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4 }}
           viewport={{ once: true, amount: 0.5 }}
        >
           <h3 className="text-3xl font-bold text-white mb-2">Kuvempu University</h3>
           <p className="text-xl text-[#0089D6] font-semibold mb-4">Master of Science in Electronics and Communication (A+)</p>
           
           <div className="flex justify-between items-center text-gray-400 mt-4 border-t border-white/10 pt-6">
              <span className="flex items-center gap-2">🎓 Shimoga, Karnataka</span>
              <span className="flex items-center gap-2 text-white/70">🗓️ Jan 2020 – Nov 2022</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
