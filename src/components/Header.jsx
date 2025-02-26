import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import EnquiryForm from "../sections/EnquiryForm";
import logon1 from "../assets/images/logo/logonew.png";

const Header = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (page, section) => {
    // Navigate to the page first
    navigate(page);

    // If we're on the home page (or a page that supports scrolling), scroll to the section after a short delay
    if (page === "/") {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Delay to ensure page has loaded before scrolling
    }
  };

  const handleNavigation = (path, section) => {
    const element = document.getElementById(section);
    console.log(element);
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to home if not already there
    }

    // After navigating to '/' page, scroll to the desired section
    setTimeout(() => {
      const sectionElement = document.getElementById(section);
      console.log(sectionElement);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Element with id ${section} not found.`);
      }
    }, 100); // Delay the scrolling to ensure navigation happens first
  };

  const handleEnquiryFormToggle = () => {
    setFormOpen(!isFormOpen);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset to default when unmounting
    };
  }, [isFormOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { link: "Home", path: "car", page: "/" },
    { link: "About", path: "about", page: "/" },
    { link: "Services", path: "services", page: "/" },
    { link: "Clients", path: "clients", page: "/" },
    { link: "Testimonials", path: "testimonials", page: "/" },
    { link: "Blogs", path: "blogs", page: "/" },
    { link: "Contact", path: "contact", page: "/" },
  ];

  return (
    <nav
      className="bg-black  text-white flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30"
    >
      {/* Logo */}
      <div id="logo" className="flex items-center max-h-[100px]">
        <img
          src={logon1}
          alt="company logo"
          className="lg:w-[200px] w-[170px] h-auto bg-transparent"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg transition-colors 
        relative 
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gray-500 after:to-white after:transition-all after:duration-300
        hover:text-gray-300 hover:after:w-full"
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            activeClass="bg-[#5b2abe] text-white"
            onClick={() => handleNavigation("/", path)}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        className="flex justify-center items-center lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <FaXmark className="size-6 text-white cursor-pointer" />
        ) : (
          <FaBars className="size-6 text-white cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col w-full h-fit bg-gray-300 p-4 absolute top-[80px]  left-0 z-50`}
        onClick={closeMenu}
      >
        <div className="w-full border-b-2 border-[#000045] mb-2"></div>
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold cursor-pointer p-3 rounded-lg  w-full text-center transition-colors 
        relative 
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-gray-500 after:to-white after:transition-all after:duration-300
        hover:text-black hover:after:w-full"
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              activeClass="bg-[#5b2abe] text-white"
              onClick={() => {
                handleNavigate("/", path); // Navigate to the page and scroll to the section
                closeMenu();
              }}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>

      {/* Enquiry Form Toggle Button */}
      <button
        onClick={handleEnquiryFormToggle}
        className="bg-[#2a52be] text-lg py-3 px-4 font-semibold rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 text-white"
      >
        Enquire Now
      </button>

      {/* Enquiry Form Component */}
      {isFormOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-transparent backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg relative">
            <FaXmark
              onClick={closeForm}
              className="text-black absolute top-2 right-2 text-xl cursor-pointer"
            />
            <EnquiryForm onClose={closeForm} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;