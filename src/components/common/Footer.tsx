import React from "react";
import logo from "/images/Logo.png";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full px-1 sm:px-3 mx-auto">
      <footer
        className="bg-white font-semibold border-2 border-dark rounded-xs shadow-[6px_6px_0_var(--color-dark)] p-2 sm:p-6 md:p-10 lg:p-14 flex flex-col gap-4 sm:gap-7 mt-10 mb-5"
        role="contentinfo"
        aria-label="Site footer"
      >
        {/* Top: Brand + Nav */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 sm:gap-10 w-full">
          {/* Brand/Company info */}
          <section
            className="flex-1 w-full max-w-full sm:max-w-xl text-center md:text-left"
            aria-labelledby="company-info"
          >
            <h2 id="company-info" className="sr-only">
              Company Information
            </h2>

            <img
              src={logo}
              alt="Little Learners Logo"
              className="w-24 xs:w-32 sm:w-44 mx-auto md:mx-0"
            />
            <p
              className="mt-2 sm:mt-4 font-medium leading-relaxed text-xs xs:text-sm sm:text-base text-center md:text-left"
              style={{ color: "#4C4C4D" }}
            >
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>

            <address className="not-italic mt-3 sm:mt-6 space-y-2 sm:space-y-4 font-medium text-xs xs:text-sm sm:text-base">
              <h3 className="sr-only">Contact Information</h3>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 p-1 sm:p-2 border-2 border-dark rounded-sm bg-light flex items-center justify-center">
                  <MdEmail className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <a
                  href="mailto:hello@littlelearners.com"
                  className="font-medium hover:underline text-xs xs:text-sm sm:text-base"
                >
                  hello@littlelearners.com
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 p-1 sm:p-2 border-2 border-dark rounded-sm bg-light flex items-center justify-center">
                  <MdPhone className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <a
                  href="tel:+9191813232309"
                  className="font-medium hover:underline text-xs xs:text-sm sm:text-base"
                >
                  +91 91813 23 2309
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 p-1 sm:p-2 border-2 border-dark rounded-sm bg-light flex items-center justify-center">
                  <MdLocationOn className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs xs:text-sm sm:text-base">
                  Somewhere in the World
                </span>
              </div>
            </address>
          </section>

          {/* Navigation */}
          <nav
            className="flex-1 w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-4 lg:gap-8 place-self-center lg:place-self-start"
            aria-label="Footer navigation"
          >
            <section>
              <h3 className="text-xs xs:text-sm sm:text-lg font-semibold">
                Home
              </h3>
              <ul className="mt-2 sm:mt-4 space-y-1 sm:space-y-2">
                <li>
                  <a
                    className="hover:text-dark text-xs xs:text-sm sm:text-base"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    Our Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">About Us</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    Our Mission
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    Our Vision
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    Awards and Recognitions
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    Teachers
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Academics</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    Special Features
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    Information
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-dark"
                    style={{ color: "#333333" }}
                    href="#"
                  >
                    Map &amp; Direction
                  </a>
                </li>
              </ul>
            </section>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col xs:flex-row items-center justify-between gap-2 sm:gap-6 border-t-2 border-b-2 border-dark py-2 sm:py-4 w-full">
          <nav aria-label="Legal links">
            <ul className="flex flex-col xs:flex-row items-center justify-between text-[10px] xs:text-xs sm:text-sm md:text-[18px] font-medium w-full md:w-auto gap-1 xs:gap-2 sm:gap-4 list-none">
              <li className="text-center">
                <a
                  className="hover:text-dark"
                  style={{ color: "#333333" }}
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li className="text-center border-x-2 border-dark px-3">
                <a
                  className="hover:text-dark"
                  style={{ color: "#333333" }}
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="text-center">
                <a
                  className="hover:text-dark"
                  style={{ color: "#333333" }}
                  href="#"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </nav>

          <nav
            className="flex items-center gap-3"
            aria-label="Social media links"
          >
            <a
              href="#"
              aria-label="Follow us on Facebook"
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 p-1 xs:p-2 sm:p-3 border-2 border-dark rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#FFDECC" }}
            >
              <FaFacebook className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              aria-label="Follow us on Twitter"
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 p-1 xs:p-2 sm:p-3 border-2 border-dark rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#FFDECC" }}
            >
              <FaTwitter className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              aria-label="Follow us on LinkedIn"
              className="w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 p-1 xs:p-2 sm:p-3 border-2 border-dark rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#FFDECC" }}
            >
              <FaLinkedin className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="w-full px-1 sm:px-4">
          <div className="flex flex-col xs:flex-row flex-wrap justify-between font-semibold text-[10px] xs:text-xs sm:text-sm">
            <div className="w-full text-center xs:w-auto xs:text-left">
              Copyright © {new Date().getFullYear()} ITI. All Rights Reserved.
            </div>
            <div className="w-full text-center xs:w-auto xs:text-left">
              Made with ❤️ by AATH.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
