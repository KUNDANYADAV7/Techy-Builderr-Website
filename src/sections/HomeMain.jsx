import React, { useEffect } from "react";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Services from "./Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Testimonials from "./Testimonials";
import Car from "../components/Car";
import Blogs from "./Blogs";

const HomeMain = () => {

  return (
    <>
        <Car/>
        <About />
        <Services />
        <Testimonials />
        <Clients />
        <Blogs/>
        <Contact />
        <ToastContainer />
    </>
  );
};

export default HomeMain;
