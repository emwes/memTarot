import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

function NavigationMenu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav
        className="relative flex flex-wrap items-center justify-between py-5 mt-8 mb-3 font-bold text-white opacity-50"
        id="navBar"
      >
        <div className="flex flex-wrap items-center justify-center w-full ml-8 mr-8">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="flex flex-row justify-start text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline"
            >
              <FaHome size={20} className="mt-1 mr-2" /> Home
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/aboutMe"
                  className="mr-8 text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/calender"
                  className="mr-8 text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline"
                >
                  Calender
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/youtube"
                  className="mr-8 text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline"
                >
                  Youtube
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/addSession"
                  className="mr-8 text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline"
                >
                  Add product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationMenu;
