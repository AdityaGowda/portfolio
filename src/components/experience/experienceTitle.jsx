import icons from "@/components/icons/getIcon";
import { motion } from "framer-motion";
export default function ExperienceTitle({
  title,
  timeLine,
  onclick,
  dropDown,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ amount: 0.5 }}
      className="experienceTitle p-6 bg-neutral-950 rounded-lg flex justify-between  bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md
 w-full   max-w-[900px] mx-15 max-950:w-max[500px]"
      onClick={onclick}
    >
      <p className="text-[22px]">{title}</p>
      <div className="flex items-center gap-7">
        <p className="text-[20px] max-950:hidden">{timeLine}</p>

        {dropDown ? (
          <span className="transition-transform duration-300 rotate-180">
            <icons.Minus />
          </span>
        ) : (
          <span className="transition-transform duration-300 rotate-90">
            <icons.Plus />
          </span>
        )}
      </div>
    </motion.div>
  );
}
