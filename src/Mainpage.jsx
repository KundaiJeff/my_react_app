import React from "react";
import Header from "./Header";

import Side from "./Side";
import SearchFilters from "./search/SearchFilters";
import Popover from "./Popover";
import Footer from "./Footer";
import Cardcontent from "./Cardcontent";
import Welcome from "./welcome";
import { Route, Routes } from "react-router-dom";
import Mainpage1 from "./Mainpage1";
import Form from "./Form";

function Mainpage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="header" element={<Header />} />
        <Route path="search" element={<SearchFilters />} />
        <Route path="cardcontent" element={<Cardcontent />} />
        <Route path="side" element={<Side />} />
        <Route path="footer" element={<Footer />} />
        <Route path="main" element={<Mainpage1 />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </>
  );
}

export default Mainpage;
