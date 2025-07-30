import { useState, useEffect } from "react";
import "./Home.css";
import Myimage from "./Images/Nithish.jpg";
import myimage from "./Images/nithish1.jpg";
import picture from "./Images/nithish2.jpg";
import Resume from "./Images/Software Resume.pdf";
import { forwardRef } from "react";

const professions = ["Web Developer", "React.js Developer", "MongoDB Expert"];
const images = [Myimage, myimage, picture];

const Hero = forwardRef((props, ref) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [imageindex, setImageIndex] = useState(0);
  const holdTime = 1000;

  useEffect(() => {
    if (charIndex === professions[loopIndex].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), holdTime);
      return;
    }

    if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setLoopIndex((prev) => (prev + 1) % professions.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText(professions[loopIndex].substring(0, charIndex));
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopIndex]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section className="hero" id="Home" ref={ref}>
      <div className="hero-content">
        <div className="hero-text">
          <h3>Hello, I'm </h3>
          <h1>
            Nithish <span className="highlight">Basireddy</span>
          </h1>
          <h3>
            And I'm a <span className="profession">{text}</span>
            <span className="cursor">|</span>
          </h3>
          <p>
            Passionate about transforming concepts into code using the MERN
            stack. <br />
            Welcome to my world of code.
          </p>
        </div>

        <div className="btn">
          <a href={Resume} download>
            <button className="btn">My Resume</button>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={images[imageindex]} alt="Nithish Basireddy" />
      </div>
    </section>
  );
});

export default Hero;
