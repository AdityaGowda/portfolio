import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Home from "@/components/home/home";
import MyWork from "@/components/myWork/mywork";
import Projects from "@/components/projects/projects";

export default function Page() {
  return (
    <>
      <Home />
      <MyWork />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}
