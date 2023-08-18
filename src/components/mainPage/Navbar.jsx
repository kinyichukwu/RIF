import React from "react";
import logo from "../../assets/home/Epaylogo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#FFFFFF] border-gray-200 ">
      <div className="max-w-screen-xl w-full flex flex-wrap items-center  mx-auto p-4">
        <a href="./" className="flex items-center mr-5">
          <img src={logo} className="h-8 mr-3" alt=" Logo" />
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden lg:flex flex-1 items-center">
          <ul className=" flex items-center gap-6">
            <li>
              <a href="/" className="font-md">
                Individual
              </a>
            </li>
            <li>
              <a href="/" className="font-md">
                Business
              </a>
            </li>
            <li>
              <a href="/" className="font-md">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="font-md">
                Set your payroll
              </a>
            </li>
          </ul>
          <div className="nav-btns ml-auto flex space-x-5">
            <a
              href="/"
              className="block border-g px-5
               py-[0.62rem] border rounded-3xl text-center w-[10rem] text-g"
            >
              Log in
            </a>
            <a
              href="/"
              className="block border-g px-5
               py-[0.62rem] border rounded-3xl text-center w-[10rem] text-w bg-g"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
