import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai"


function NavigationMenu({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-5 mt-8 mb-3 font-bold text-white opacity-50" id="navBar" >
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/" className="flex flex-row justify-start -ml-6 text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
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
              <Link to="/aboutMe" className="mr-8 text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
           About
        </Link>
              </li>
              <li className="nav-item">
              <Link to="/calender" className="mr-8 text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
            Calender
        </Link>
                
              </li>
              <li className="nav-item">
              <Link to="/youtube" className="mr-8 text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
             Youtube
          </Link>
              </li>
              <li className="nav-item">
              <Link to="/addSession" className="mr-8 text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
             Add product
          </Link>
              </li>
              <li className="nav-item">
              <Link to="/dashboard" className="mr-8 text-lg hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
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


  // return (
  //   <>
  //       {/*Condiontional rendering beroende på om man är inloggad som admin eller inte*/}
  //       <ul className="flex flex-row justify-center w-full mt-2 mb-16 space-x-2 text-xl ">
  //     <Link to="/" className="flex flex-row justify-start -ml-6 text-xl hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
  //       Home <FaHome size={20} className="mt-1 ml-2" />
  //     </Link>
     
  //       <li>
  //         <Link to="/aboutMe" className="mr-8 hover:underline underline-offset-4 ml-28 hover:text-neutral-500 focus:underline">
  //           About
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/calender" className="mr-8 hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
  //           Calender
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/youtube" className="mr-8 hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
  //           Youtube
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="/sessions" className="hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
  //           My sessions
  //         </Link>
  //       </li>
  //       <li>
  //       <Link to="/addSession" className="ml-8 hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">
  //           Add a session/product
  //         </Link>
  //         </li>
  //         <li>
  //             <Link to="/dashboard" className="ml-8 hover:underline underline-offset-4 hover:text-neutral-500 focus:underline">Dashboard</Link>
  //         </li>
  //     </ul>
  //   </>
  // );


export default NavigationMenu;
