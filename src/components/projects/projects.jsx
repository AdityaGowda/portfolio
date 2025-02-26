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

  return (
    <div className="mt-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap gap-16 justify-center items-center"
      >
        <Card
          mainImage="/icons/eLearnImage.png"
          title={"E-learn"}
          description={
            "E-Learn Web App is a responsive, multi-page frontend learning platform built with HTML, CSS, and JavaScript (ES6). 📱💻 It features an engaging user interface with dedicated pages for courses, course details, contact, about, login, and sign-up, providing a seamless and interactive educational experience. 📚🚀"
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
            "DigiCall is a full-stack video meeting web app built with React, Node.js, Express.js, and MySQL, featuring JWT-based authentication for secure login, real-time collaboration with 100ms, and seamless meeting scheduling with invite functionality. 📞💻"
          }
          tech={techImageCard4}
          linkIcons="/icons/telegram.svg"
          projectLink={"https://github.com/AdityaGowda/Digicall"}
          created="present"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap mt-16 gap-16 justify-center"
      >
        <Card
          mainImage="/icons/portfolio.png"
          title={"Portfolio website"}
          description={
            "A Portfolio website to showcase your skills and stand out in your field"
          }
          tech={techImageCard3}
          linkIcons="/icons/telegram.svg"
          projectLink={"https://adithya-dev.netlify.app/"}
          created="2025"
        />
        <Card
          mainImage="/icons/pizza.png"
          title={"PizzaHub"}
          description={
            "PizZza Web App is an interactive but non-responsive recipe finder built with HTML5, CSS3, and JavaScript (ES6), utilizing a public API to fetch and display pizza recipes dynamically. Users can search for their favorite pizzas, explore ingredients, learn the cooking process, and adjust serving sizes for precise ingredient measurements. this is not responsive 🚫📱"
          }
          tech={techImageCard2}
          linkIcons="/icons/telegram.svg"
          projectLink={
            "https://adityagowda.github.io/PizZza-API-based-web-app/"
          }
          created="2021"
        />
      </motion.div>
    </div>
  );
}
