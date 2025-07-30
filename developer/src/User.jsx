import Navbar from "./Navbar";
import Hero from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { useRef } from "react";
const User = () => {
  const topRef = useRef(null);
  const homeref = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const eduRef = useRef();
  const proRef = useRef();
  const conRef = useRef();

  const scrollHome = () => {
    homeref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollSkill = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollEdu = () => {
    eduRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollProj = () => {
    proRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollContact = () => {
    conRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div ref={topRef}>
        <Navbar
          scrollToHome={scrollHome}
          scrollToAbout={scrollAbout}
          scrollToSkills={scrollSkill}
          scrollToEducation={scrollEdu}
          scrollToProjects={scrollProj}
          scrollToContact={scrollContact}
        />
        <Hero ref={homeref} />
        <About ref={aboutRef} />
        <Skills ref={skillRef} />
        <Education ref={eduRef} />
        <Projects ref={proRef} />
        <Contact ref={conRef} />
        <Footer topRef={topRef} />
      </div>
    </>
  );
};

export default User;
