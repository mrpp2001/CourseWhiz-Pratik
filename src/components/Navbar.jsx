import { BsSearch, BsCart3 } from "react-icons/bs";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img className="h-14 mr-3" src={logo} alt="logo" />
          </a>

          <div
            className="flex gap-7 items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
                > 
                  <BsSearch className="w-5 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
                >
                  <BsCart3  className="w-5 h-6"/>
                </a>
              </li>
            </ul>

            <div className="flex md:order-2 gap-5">
              <button
                type="button"
                className="text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
              >
                Sign in
              </button>

              <button
                type="button"
                className="text-blue-700 border-2  border-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
              >
                Start free trial
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
