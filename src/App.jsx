import React from "react";
import About from "./sections/About";
import Services from "./sections/Services";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMain from "./sections/HomeMain";
import Layout from "./sections/Layout";
import AboutDesc from "./sections/AboutDesc";
import Blogs from "./sections/Blogs";
import Detail from "./sections/Detail";
import AllBlogs from "./sections/AllBlogs";
import PrivacyPolicy from "./sections/Policy/PrivacyPolicy";
import TermsAndCon from "./sections/Policy/TermsCon";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
     <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomeMain />} />
              <Route path="/aboutdesc" element={<AboutDesc />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              {/* <Route exact path="/blogs" element={<Blogs />} /> */}
              <Route exact path="/blog/:id" element={<Detail />} />
              <Route path="/all-blogs" element={<AllBlogs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsAndCon />} />
            </Route>
          </Routes>
        </Router>
    </>
  );
};

export default App;
