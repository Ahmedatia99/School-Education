import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/Logo.png";
import { IoMenu } from "react-icons/io5";

type NavbarItem = {
  label: string;
  to: string;
};

const navbar: NavbarItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Student Life", to: "/student-life" },
  { label: "Contact", to: "/contact" },
];
const mobileMenuPanelClasses =
  "absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-5 flex flex-col gap-6";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <header className="px-2 container mx-auto mb-10">
      <nav className="mt-2 w-full bg-white  flex items-center justify-between border-2 border-dark rounded-xl h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 bg-morning px-3 rounded-bl-xl h-full rounded-tl-xl">
          <img src={logo} alt="logo" className=" w-32 " loading="lazy" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center h-full text-md font-semibold">
            {navbar.map((item) => (
              <li
                className={`p-3 h-full  ${
                  location.pathname === item.to
                    ? "bg-liteMorning rounded-md"
                    : ""
                }`}
                key={item.to}
              >
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-50 bg-gray-100 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            {/** Mobile menu panel classes */}
            <div
              className={mobileMenuPanelClasses}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-6 ">
                {navbar.map((item) => (
                  <li
                    className={`p-5 ${
                      location.pathname === item.to
                        ? "bg-liteMorning rounded-md"
                        : ""
                    }`}
                    key={item.to}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="block text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <IoMenu
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 mr-3"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        />
      </nav>
    </header>
  );
};

export default Navbar;
