import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import PrimaryButton from "../components/PrimaryButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  const navItems = [
    { label: "Homepage", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav className="bg-navy-900 text-primaryColor py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full flex items-center justify-center">
              <img src={logo} alt="Orinix Logo" className="w-[51px] h-[51px]" />
            </div>
            <span className="text-4xl font-semibold">Orinix</span>
          </div>

          <button
            className="lg:hidden text-gray-300 hover:text-primaryColor focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-20 left-0 w-full lg:relative lg:block lg:w-auto lg:top-0 bg-navy-900 lg:bg-transparent`}
          >
            <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-4 lg:space-y-0 py-4 lg:py-0 px-6 lg:px-0">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `hover:text-gray-300 text-primaryColor text-lg transition-colors ${
                      isActive ? "font-semibold text-primaryColor" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="lg:hidden mt-4">
                <PrimaryButton text="Join The Waitlist" />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <PrimaryButton text="Join The Waitlist" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
