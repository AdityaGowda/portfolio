import Card from "../card/card";
import elearn from "@/components/icons/eLearnImage.png";
import pizza from "@/components/icons/pizza.png";
import portfolio from "@/components/icons/portfolio.png";
import * as image from "@/components/icons/getIcon";

export default function Projects() {
  const techImages = image.default;
  console.log(image);
  let techImageCard1 = [techImages.html, techImages.css, techImages.javascript];
  let techImageCard2 = [techImages.html, techImages.css, techImages.javascript];
  let techImageCard3 = [techImages.html, techImages.nextjs];
  let techImageCard4 = [
    techImages.react,
    techImages.nodejs,
    techImages.express,
    techImages.mysql,
  ];

  return (
    <div className="mt-56 p-5">
      <div className="flex flex-wrap gap-16 justify-center items-center">
        <Card
          mainImage={elearn}
          title={"E-learn"}
          description={
            "E-Learn Web App is a responsive, multi-page frontend learning platform built with HTML, CSS, and JavaScript (ES6). It features an engaging user interface with dedicated pages for courses, course details, contact, about, login, and sign-up, providing a seamless and interactive educational experience. 📚🚀"
          }
          tech={techImageCard1}
          telegram={techImages.telegram}
        />
        <Card
          mainImage={portfolio}
          title={"DigiCall"}
          description={
            "DigiCall is a full-stack video meeting web app built with React, Node.js, Express.js, and MySQL, featuring JWT-based authentication for secure login, real-time collaboration with 100ms, and seamless meeting scheduling with invite functionality. 📞💻"
          }
          tech={techImageCard4}
        />
      </div>
      <div className="flex flex-wrap mt-16 gap-16 justify-center">
        <Card
          mainImage={portfolio}
          title={"Portfolio website"}
          description={
            "A Portfolio website to showcase your skills and stand out in your field"
          }
          tech={techImageCard3}
          telegram={techImages.telegram}
        />
        <Card
          mainImage={pizza}
          title={"PizzaHub"}
          description={
            "PizZza Web App is an interactive recipe finder built with HTML5, CSS3, and JavaScript (ES6), utilizing a public API to fetch and display pizza recipes dynamically. Users can search for their favorite pizzas, explore ingredients, learn the cooking process, and adjust serving sizes for precise ingredient measurements. 🍕🔥"
          }
          tech={techImageCard2}
          telegram={techImages.telegram}
        />
      </div>
    </div>
  );
}
