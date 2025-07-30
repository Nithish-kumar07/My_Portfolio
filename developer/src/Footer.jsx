import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = ({ topRef }) => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    if (topRef && topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2025 by Nithish | All Rights Reserved</p>
      </div>
      {showButton && (
        <div className="footer-iconTop">
          <button onClick={scrollToTop} className="scroll-top-button">
            <FaArrowUp className="up-arrow-icon" />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
