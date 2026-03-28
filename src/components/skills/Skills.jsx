"use client";
import { motion } from "framer-motion";
import { FaJava, FaCss3Alt, FaLightbulb } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiHtml5, SiTailwindcss, SiWebpack, SiJquery,  
  SiGooglecloud, SiDocker, SiJenkins, SiLinux 
} from "react-icons/si";

const allSkills = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#616871ff" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
  { name: "Java", Icon: FaJava, color: "#007396" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "TailwindCSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Webpack", Icon: SiWebpack, color: "#8DD6F9" },
  { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
  { name: "Azure", Icon: VscAzure, color: "#0089D6" },
  { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
 {name:"Data Structures & Algorithms (DSA)", Icon:FaLightbulb, color:"#FFFFFF"},
 {name:"Object-Oriented Programming", Icon:FaLightbulb, color:"#FFFFFF"},
 {name:"System Design", Icon:FaLightbulb, color:"#FFFFFF"},
 {name:"Performance Optimization", Icon:FaLightbulb, color:"#FFFFFF"},
 {name:"Web Optimization", Icon:FaLightbulb, color:"#FFFFFF"},
 {name:"AI coding assistant", Icon:FaLightbulb, color:"#FFFFFF"}
];

const splitArray = (arr, numChunks) => {
  const chunks = Array.from({ length: numChunks }, () => []);
  arr.forEach((item, index) => {
    chunks[index % numChunks].push(item);
  });
  return chunks;
};

const [row1, row2, row3] = splitArray(allSkills, 3);

const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  const animationName = direction === "left" ? "scroll-left" : "scroll-right";
  
  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap relative py-2 md:py-4 group/marquee">
      {/* Edge Gradients for smooth fading */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#01081b] via-[#01081b]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#020c30] via-[#020c30]/50 to-transparent z-10 pointer-events-none" />
      
      <div 
        className="flex gap-4 md:gap-8 items-center marquee-content"
        style={{ 
          animation: `${animationName} ${speed}s linear infinite`,
          width: "max-content"
        }}
      >
        {/* Render 2 sets for infinite loop - CPU efficient */}
        {[...items, ...items].map((skill, index) => (
          <div
            key={index}
            className="group flex items-center gap-2 md:gap-4 bg-white/5 border rounded-full px-4 py-2 md:px-8 md:py-4 backdrop-blur-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
            style={{
              borderColor: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              "--hover-color": skill.color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = skill.color;
              e.currentTarget.style.boxShadow = `0 10px 30px -10px ${skill.color}70`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div className="w-5 h-5 md:w-8 md:h-8 relative flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
               <skill.Icon className="w-full h-full text-white/80 group-hover:text-[color:var(--hover-color)] transition-colors duration-300" />
            </div>
            <span 
              className="text-sm md:text-xl font-semibold tracking-wide transition-colors duration-300 text-[#e5e7eb] group-hover:text-[color:var(--hover-color)]"
            >
              {skill.name}
            </span>
          </div>
        ))}
        {/* Duplicate set for gapless loop */}
        {[...items, ...items].map((skill, index) => (
          <div
            key={`dup-${index}`}
            className="group flex items-center gap-2 md:gap-4 bg-white/5 border rounded-full px-4 py-2 md:px-8 md:py-4 backdrop-blur-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
            style={{
              borderColor: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              "--hover-color": skill.color,
            }}
          >
            <div className="w-5 h-5 md:w-8 md:h-8 relative flex-shrink-0 flex items-center justify-center">
               <skill.Icon className="w-full h-full text-white/80" />
            </div>
            <span className="text-sm md:text-xl font-semibold tracking-wide text-[#e5e7eb]">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="skillsContainer pt-24 pb-24 md:pt-32 md:pb-32 relative overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="header text-center text-5xl md:text-7xl font-extrabold text-white">
            Technical Skills
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Leveraging cutting-edge technologies to build scalable applications.
          </p>
        </motion.div>

        <div className="flex flex-col gap-2 md:gap-4 w-full mt-4 relative z-0">
          <MarqueeRow items={row1} direction="left" speed={60} />
          <MarqueeRow items={row2} direction="right" speed={55} />
          <MarqueeRow items={row3} direction="left" speed={65} />
        </div>

      </div>
    </section>
  );
}
