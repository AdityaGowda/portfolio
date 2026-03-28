import "./globals.css";
import { Poppins, Roboto_Mono } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto-mono",
});
export const metadata = {
  title: "Adithya M R - Software Engineer | Full Stack Developer",
  description:
    "Welcome to Adithya's Portfolio – a software engineer specializing in JavaScript frameworks like React, NextJs, and NodeJs, with expertise in DevOps and cloud technologies. I build scalable, high-performance web applications with a focus on modern UI/UX, responsiveness, and seamless deployments. Explore my projects to see how I blend engineering excellence with cloud-driven solutions!",
  keywords: [
    "Portfolio",
    "Web Development",
    "JavaScript",
    "Automation",
    "Docker",
    "React",
    "Next.js",
    "GCP",
    "Azure",
    "Node.js",
    "MERN",
    "Next.js",
    "Cloud Computing",
    "Kubernetes",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Linux",
    "Shell Scripting",
    "DevOps",
    "Cloud Architecture",
    "Front-End Development",
    "Back-End Development",
    "Full Stack Development",
    "REST API",
    "TypeScript",
    "HTML",
    "CSS",
    "SCSS",
    "jQuery",
    "Redux",
    "Tailwind CSS",
    "Google Cloud",
    "Azure DevOps",
    "Microservices",
    "Web Performance",
    "Responsive Design",
    "Software Engineering",
  ],
  authors: [{ name: "Adithya M R" }],
  metadataBase: new URL("https://adithya-dev.netlify.app/"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
