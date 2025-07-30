import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./User";
import "./Images/splashscreen.css";
import QRCodeGenerator from "./Qrcodegenerator";
import Enrollment from "./Enrollment";
import PasswordValidator from "./Passwordvalidator";
import Internship from "./Internship";
import TypingSpeedTest from "./typingtest";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "./image";

const App = () => {
  const [ss, setSS] = useState(true);
  const [effect, setEffect] = useState("");

  useEffect(() => {
    const effects = ["fade-out", "slide-up", "zoom-out", "rotate-out"];
    setEffect(effects[Math.floor(Math.random() * effects.length)]);
    const timer = setTimeout(() => setSS(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {ss ? (
        <div className={`ss ${effect}`}></div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/QRcode" element={<QRCodeGenerator />} />
            <Route path="/Enrollement" element={<Enrollment />} />
            <Route path="/Password" element={<PasswordValidator />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/typingtest" element={<TypingSpeedTest />} />
            <Route path="/Image" element={<Image />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
