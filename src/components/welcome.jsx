import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { NavLink } from "react-router-dom";
import About from "./about/about";
function Welcome() {
  return (
    <div className=" ">
      <Header />
      <div className=" bg-welcome-pattern  ">
        <h1 className=" pt-10 text-9xl h-72 text-center  text-white ">
          Cape Jobs
        </h1>

        <script></script>

        <div className="flex flex-row flex-wrap place-content-around ">
        <NavLink
            to="/main"
            className="text-center lg:self-start inline-block h-16 mt-4 animate-bounce bg-cyan-600 px-8 py-2 text-primary-100 text-lg font-semibold rounded-full hover:bg-accent-600 transition-all"
          >
            Explore Jobs
          </NavLink>
        
        </div>
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
