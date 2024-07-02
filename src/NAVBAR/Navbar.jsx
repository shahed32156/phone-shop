import React from "react";

import { Link } from "react-scroll";

import { IoMdArrowDropdown } from "react-icons/io";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './custom.css'; // Add this line to import your custom CSS

window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

const toggleMenu = () => {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle('!translate-y-4');

  var menuIcon = document.querySelector(".text-3xl ion-icon");
  if (menuIcon.name === "menu") {
    menuIcon.name = "close";
  } else {
    menuIcon.name = "menu";
  }
};


const Navbar = () => {

  //   const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    <>
      <div className=" text-white relative">
      <div className="font-semibold py-3 pb-6 px-8 nav-menu mt-3 flex md:hidden md:mt-0 bg-black w-full fixed transform -translate-y-[300px] transition-all flex-col sm:flex-col md:flex-row lg:flex-row gap-4 md:gap-8 md:items-center justify-center duration-500 z-10">
              <a
                href="#"
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
              >
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </a>
              <div className="services-container relative inline-block">
                <div className="flex gap-2 items-center">
                  <a href="#" className="hover:text-purple-500">
                    <Link to="services" smooth={true} duration={500}>
                      Services
                    </Link>
                  </a>
                  <IoMdArrowDropdown />
                </div>
                <div className="dropdown-links absolute left-0 mt-2 w-[300px] bg-white shadow-lg rounded-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-300 text-[15px] text-black"
                  >
                    <Link to="services" smooth={true} duration={500}>
                      Web Design & Development
                    </Link>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-300 text-[15px] text-black"
                  >
                    <Link to="services" smooth={true} duration={500}>
                      Graphix Design
                    </Link>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-300 text-[15px] text-black"
                  >
                    <Link to="services" smooth={true} duration={500}>
                      Artificial Inteligence
                    </Link>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-300 text-[15px] text-black"
                  >
                    <Link to="services" smooth={true} duration={500}>
                      Digital Marketing
                    </Link>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-300 text-[15px] text-black"
                  >
                    <Link to="services" smooth={true} duration={500}>
                      Video Editing
                    </Link>
                  </a>
                </div>
              </div>

              <a
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
                href="#"
              >
                <Link to="pricing" smooth={true} duration={500}>
                  Pricing
                </Link>
              </a>
              <a
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
                href="#"
              >
                <Link to="portfolio" smooth={true} duration={500}>
                  Portfolio
                </Link>
              </a>
              <a
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
                href="#"
              >
                <Link to="team" smooth={true} duration={500}>
                  Team
                </Link>
              </a>
              <a
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
                href="#"
              >
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </a>
              <a
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
                href="#"
              >
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </a>
            </div>

            <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          className="mt-20 sm:mt-3 md:mt-0 w-full opacity-100 md:opacity-35"
          >

          <div>
            <img className="md:h-[800px]" src="./Images/cover1.png" alt="Cover 1" />
          </div>
          <div>
            <img className="md:h-[800px]" src="./Images/cover.jpg" alt="Cover 2" />
          </div>
          <div>
            <img className="md:h-[800px]" src="./Images/cover2.png" alt="Cover 3" />
          </div>
        </Carousel>

        <div className="relative">
          <nav
            id="navbar"
            className="bg-black flex flex-col md:flex-row justify-between py-6 px-3 md:px-36 top-0 fixed w-full md:items-center z-10"
          >
            <div className="flex justify-between items-center px-2">
              <div>
                <a href="#">
                  <img
                    className="h-[60px] w-[60px]"
                    src="./Images/logo.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="uppercase font-[Infographic] text-white text-[22px] font-bold"
                >
                  <span className=" text-purple-700">diffusion</span>five
                </a>
              </div>

              <span
                class="text-3xl py-2 px-2 text-purple-700 bg-black border-[4px] border-purple-700 rounded-full flex items-center cursor-pointer md:hidden text-left"
                onClick={toggleMenu}
              >
                <ion-icon name="menu"></ion-icon>
              </span>
            </div>

            <div className="font-semibold py-3 px-3 mt-3 md:mt-0 hidden flex md:flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4 md:gap-8 md:items-center justify-center">
              <a
                href="#"
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
              >
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </a>
              <div className="services-container relative inline-block">
                <div className="flex gap-2 items-center">
                  <a href="#" className="hover:text-purple-500">
                    <Link to="services" smooth={true} duration={500}>
                      Services
                    </Link>
                  </a>
                  <IoMdArrowDropdown />
                </div>
                <div className="dropdown-links absolute left-0 mt-2 w-[300px] bg-white shadow-lg rounded-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-300 text-[15px] text-black"
                  >
                    <Link to="services" smooth={true} duration={500}>
                      Web Design & Development
                    </Link>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-300 text-[15px] text-black"
                  >
                    <Link to="services" smooth={true} duration={500}>
                      Graphix Design
                    </Link>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-300 text-[15px] text-black"
                  >
                    <Link to="services" smooth={true} duration={500}>
                      Artificial Inteligence
                    </Link>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-300 text-[15px] text-black"
                  >
                    <Link to="services" smooth={true} duration={500}>
                      Digital Marketing
                    </Link>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-300 text-[15px] text-black"
                  >
                    <Link to="services" smooth={true} duration={500}>
                      Video Editing
                    </Link>
                  </a>
                </div>
              </div>

              <a
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
                href="#"
              >
                <Link to="pricing" smooth={true} duration={500}>
                  Pricing
                </Link>
              </a>
              <a
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
                href="#"
              >
                <Link to="portfolio" smooth={true} duration={500}>
                  Portfolio
                </Link>
              </a>
              <a
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
                href="#"
              >
                <Link to="team" smooth={true} duration={500}>
                  Team
                </Link>
              </a>
              <a
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
                href="#"
              >
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </a>
              <a
                className="hover:text-purple-500 hover:transition hover:duration-[400ms]"
                href="#"
              >
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </a>
            </div>
          </nav>
        </div>

        

        <div className="mx-3 md:mx-36 mt-2 md:mt-28 md:pb-28 md:absolute md:top-28 ">
          <div className="">
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:w-[600px] lg:w-[700px] md:leading-[60px] font-bold font-Oswald">
              Welcome to our cutting-edge{" "}
              <span className="text-purple-700">web platform</span> to take your
              business into new heights{" "}
            </h1>
          </div>

          <div className="mt-4 relative">
            <p className=" text-black md:w-[420px] font-medium text-justify">
              We specialize in propelling businesses into the future with
              cutting-edge website services designed to elevate your online
              presence. Our expert team combines creativity with technology to
              deliver modern web solutions that meet your unique needs.
            </p>
          </div>

          <div className="mt-6">
            <a className="bg-purple-700 cursor-pointer md:hover:bg-purple-400 md:hover:transition md:hover:duration-[400ms] text-white text-[18px] py-3 px-10 rounded-md font-semibold">
              <Link to="query" smooth={true} duration={500}>
                Send your Query
              </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
