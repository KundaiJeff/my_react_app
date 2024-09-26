import React from "react";
import Header from "./Header";

import Side from "./Side";
import SearchFilters from "./search/SearchFilters";
import Popover from "./Popover";
import Footer from "./Footer";
import Cardcontent from "./Cardcontent";
import Welcome from "./welcome";
import { Route, Routes } from "react-router-dom";

function Mainpage1() {
  return (
    <>
      <Header />
      <SearchFilters />
      <Cardcontent />
      <Footer />
    </>
  );
}

export default Mainpage1;
