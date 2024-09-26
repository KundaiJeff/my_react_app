import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes } from "react-router-dom";
import Mainpage from "./Mainpage";
import { NavLink } from "react-router-dom";
Routes;
function Welcome() {
  return (
    <div className=" h-screen">
      <Header />
      <div className=" h-3/4 bg-welcome-pattern  ">
        <h1 className="text-center text-6xl font-semibold text-slate-700">
          Welcome to
        </h1>
        <h1 className="text-white text-9xl text-center  pt-12 font-bold">
          CapeJobs
        </h1>
        <div className="flex flex-row flex-wrap place-content-around mt-10">
          <NavLink
            to="/main"
            className="animate-bounce bg-cyan-600 rounded-md h-12  font-semibold text-white text-center  "
          >
            Looking for a Jobs
          </NavLink>
          <NavLink
          to="form"
           className=" animate-bounce bg-cyan-600 rounded-md text-white ">
            Signup as Employer & Post jobs
          </NavLink>
        </div>
        <div className=" h-32"></div>
      </div>
        <Footer className="" />
    
    </div>
  );
}

export default Welcome;
