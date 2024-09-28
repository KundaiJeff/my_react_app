import React from "react";
import Header from "../header/Header";

import SearchFilters from "../../search/SearchFilters";
import Popover from "../job popover/Popover";
import Footer from "../footer/Footer";
import Cardcontent from "../../Cardcontent";
import Welcome from "../welcome";
import { Route, Routes } from "react-router-dom";
import Mainpage1 from "./Mainpage1";
import Form from "../../Form";
import About from "../about/about";
import Aboutpage from "../about/aboutpage";

function Mainpage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="header" element={<Header />} />
        <Route path="search" element={<SearchFilters />} />
        <Route path="cardcontent" element={<Cardcontent />} />

        <Route path="footer" element={<Footer />} />
        <Route path="main" element={<Mainpage1 />} />
        <Route path="form" element={<Form />} />
        <Route path="about" element={<Aboutpage />} />
      </Routes>
    </>
  );
}

export default Mainpage;
