import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-center static text-white bg-primary-800 shadow-md">
      <a href="Github">{}Github Repository</a>
      <p>
        Copyright © {currentYear} | <a href="">Kundai Jeoffrey Muchirawetu</a>
      </p>
    </footer>
  );
}

export default Footer;
