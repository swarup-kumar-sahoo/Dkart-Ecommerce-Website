import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
       <p>
        Developed by{" "}
        <a
          href="https://github.com/swarup-kumar-sahoo"  // Replace with your GitHub link
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Swarup
        </a>
      </p>
    </footer>
  );
};

export default Footer;
