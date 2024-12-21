import React from "react";
import logo from "../assets/images/logo.svg";
import Twiter from "../assets/images/Twitter.svg";
import Facebook from "../assets/images/Facebook.svg";
import Linkedin from "../assets/images/Linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-primaryBackground">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <img src={logo} />
                <span className="text-4xl font-semibold text-primaryColor">
                  Orinix
                </span>
              </div>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lightGrey transition hover:opacity-75"
                  >
                    <span className="sr-only">Twiter</span>

                    <img src={Twiter} />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lightGrey transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>

                    <img src={Facebook} />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-lightGrey transition hover:opacity-75"
                  >
                    <span className="sr-only">Linkedin</span>

                    <img src={Linkedin} />
                  </a>
                </li>
              </ul>
              <p className="text-xs text-lightGrey pt-12">
                &copy; 2024 Orinix Reserved
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-extrabold text-primaryColor">Product</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-lightGrey  transition hover:opacity-75"
                    >
                      Landingpage
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Features
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Documentation
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Referral Program
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Pricing{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-extrabold text-primaryColor">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Documentation
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Design
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Themes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Illustrations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      UI Kit
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-extrabold text-primaryColor">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Terms{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-extrabold text-primaryColor">More</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Documentation
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      License
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-lightGrey transition hover:opacity-75"
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
