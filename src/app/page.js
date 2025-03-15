import Contact from "@/components/Contact/Contact";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Home from "@/components/home/home";
import Expertise from "@/components/myExpertise/expertise";
import MyWork from "@/components/myWork/mywork";

export default function Page() {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="expertise">
        <Expertise />
      </div>
      <div id="my-work">
        <MyWork />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
