import React from "react";
import Header from "../header/Header";


import SearchFilters from "../../search/SearchFilters";
import Popover from "../job popover/Popover";
import Footer from "../footer/Footer";
import Cardcontent from "../../Cardcontent";
import Welcome from "../welcome";
import { Route, Routes } from "react-router-dom";

function Mainpage1() {
  return (
    <>
      <div className="bg-primary-700">
        <Header />
        <SearchFilters />
        <Cardcontent />
        <Footer />
      </div>
    </>
  );
}

export default Mainpage1;
