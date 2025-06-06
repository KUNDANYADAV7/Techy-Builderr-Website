import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import EnquiryForm from "../sections/EnquiryForm";
import logon1 from "../assets/images/logo/techlogo.png";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (page, section) => {
    navigate(page);
    if (page === "/") {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  const handleNavigation = (path, section) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    navigate(`/#${section}`, { replace: true });
    setTimeout(() => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Element with id ${section} not found.`);
      }
    }, 2000);
  };

  const handleEnquiryFormToggle = () => {
    setFormOpen(!isFormOpen);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isFormOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
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
    { link: "Home", path: "home", page: "/" },
    { link: "About", path: "about", page: "/" },
    { link: "Services", path: "services", page: "/" },
    { link: "Clients", path: "clients", page: "/" },
    { link: "Testimonials", path: "testimonials", page: "/" },
    { link: "Blogs", path: "blogs", page: "/" },
    { link: "Contact", path: "contact", page: "/" },
  ];

  return (
    <nav className="bg-black text-white flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30">
      {/* Logo */}
      <RouterLink to="/">
        <div id="logo" onClick={() => navigate("/")} className="flex items-center max-h-[100px]">
          <img
            src={logon1}
            alt="company logo"
            className="lg:w-[200px] w-[170px] h-auto bg-transparent"
          />
        </div>
      </RouterLink>

      {/* Desktop Navigation */}
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg transition-colors 
              relative 
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
              after:bg-gradient-to-r after:from-gray-500 after:to-white 
              after:transition-all after:duration-300 hover:text-gray-300 hover:after:w-full"
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

      {/* Mobile Menu Toggle (Icon appears on right side on mobile) */}
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className="text-3xl text-white cursor-pointer" />
        ) : (
          <FaBars className="text-3xl text-white cursor-pointer" />
        )}
      </div>

      {/* Enquire Now Button for Desktop only */}
      <button
        onClick={handleEnquiryFormToggle}
        className="hidden lg:inline-flex bg-[#2a52be] text-lg py-2 md:py-3 px-4 font-semibold rounded-lg items-center cursor-pointer transform hover:scale-105 transition-transform duration-300 text-white whitespace-nowrap"
      >
        Enquire Now
      </button>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "flex" : "hidden"} flex-col w-full h-fit bg-gray-300 p-4 absolute top-[80px] left-0 z-50`}
        onClick={closeMenu}
      >
        <div className="w-full border-b-2 border-[#000045] mb-2"></div>
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold cursor-pointer p-3 rounded-lg w-full text-center transition-colors 
                relative 
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                after:bg-gradient-to-r after:from-gray-500 after:to-white 
                after:transition-all after:duration-300 hover:text-black hover:after:w-full"
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              activeClass="bg-[#5b2abe] text-white"
              onClick={() => {
                handleNavigate("/", path);
                closeMenu();
              }}
            >
              {link}
            </Link>
          ))}
        </ul>
        {/* Enquire Now Button inside Mobile Menu */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the menu from closing immediately
              handleEnquiryFormToggle();
              closeMenu();
            }}
            className="bg-[#2a52be] text-lg py-2 md:py-3 px-4 font-semibold rounded-lg inline-flex items-center cursor-pointer transform hover:scale-105 transition-transform duration-300 text-white whitespace-nowrap"
          >
            Enquire Now
          </button>
        </div>
      </div>

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
