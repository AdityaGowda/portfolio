"use client";
import { motion } from "framer-motion";
import Card from "../card/card";

export default function Projects() {
  let techImageCard1 = ["html.svg", "css.svg", "javascript.svg"];
  let techImageCard2 = ["html.svg", "css.svg", "javascript.svg"];
  let techImageCard3 = ["html.svg", "nextjs.svg", "tailwind.svg"];
  let techImageCard4 = [
    "react.svg",
    "nodejs.svg",
    "expressjs.svg",
    "mysql.svg",
  ];
  let techImageWeFix = [
    "nextjs.svg",
    "react.svg",
    "nodejs.svg",
    "expressjs.svg"
  ];

  return (
    <div className="mt-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 place-items-center w-full max-w-5xl mx-auto px-5"
      >
        <Card
          mainImage="/icons/portfolio.png"
          title={"weFixPDF"}
          description={
            <>A <strong>privacy-first</strong> PDF and image processing platform with <strong>no sign-up, no watermarks, and instant file deletion</strong>; architected for performance and scalability via <strong>programmatic SEO</strong> with 100+ long-tail landing pages. Deployed on <strong>GCP Compute Engine & Cloudflare CDN</strong>. 📄🔒</>
          }
          tech={techImageWeFix}
          linkIcons="/icons/telegram.svg"
          projectLink={"https://wefixpdf.com"}
          created="2025"
        />       <Card
          mainImage="/icons/portfolio.png"
          title={"chronolite-time"}
          description={
            <>chronolite-time is a <strong>lightweight, pattern-based natural language time parser</strong> for human-readable expressions. Built with <strong>zero external dependencies</strong> for precise time manipulation and scheduling in Node.js and browser environments. Rapidly growing with <strong>650+ downloads on NPM!</strong> ⏳</>
          }
          tech={["javascript.svg", "nodejs.svg"]}
          linkIcons="/icons/telegram.svg"
          projectLink={
            "https://www.npmjs.com/package/chronolite-time"
          }
          created="2025"
        />
        <Card
          mainImage="/icons/eLearnImage.png"
          title={"E-learn"}
          description={
            <>E-Learn Web App is a <strong>responsive, multi-page frontend learning platform</strong> built with HTML, CSS, and <strong>JavaScript (ES6)</strong>. 📱💻 It features an engaging user interface with dedicated pages for courses, course details, contact, about, login, and sign-up, providing a seamless and interactive educational experience. 📚🚀</>
          }
          tech={techImageCard1}
          linkIcons="/icons/telegram.svg"
          projectLink={"https://adityagowda.github.io/E-Learn-Web-App/"}
          created="2020"
        />
        <Card
          mainImage="/icons/portfolio.png"
          title="DigiCall"
          description={
            <>DigiCall is a full-stack video meeting web app built with <strong>React, Node.js, Express.js, and MySQL</strong>, featuring <strong>JWT-based authentication</strong> for secure login, <strong>real-time collaboration with 100ms latency</strong>, and seamless meeting scheduling with invite functionality. 📞💻</>
          }
          tech={techImageCard4}
          linkIcons="/icons/telegram.svg"
          projectLink={"https://github.com/AdityaGowda/Digicall"}
          created="present"
        />
      </motion.div>
    </div>
  );
}
