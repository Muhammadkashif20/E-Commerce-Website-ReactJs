import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="my-36">
      <header className="text-gray-600 body-font bg-gray-200 shadow-lg fixed w-full top-0 ">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-105 ">
              Muhammad Kashif Store <span className="text-3xl">🛒</span>
            </span>
          </a>

            <div className="flex-grow mx-5 ms-14">
              <input
                type="text"
                placeholder="Search..."
                className="w-96 py-2 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 ease-in-out"
              />
              <select
                id="product-select"
                className="w-64 ms-4 p-2 border-2  rounded-md  text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="beauti" disabled                                                                 >
                  Products
                </option>
                <option value="beauti">Beauti</option>
              </select>
            </div>

          <div className="flex items-center ms-2">
            <button className="mr-4 text-gray-900 transition duration-300 hover:text-blue-500 hover:scale-110">
              <FontAwesomeIcon
                icon={faCartPlus}
                className="mr-8 text-gray-600 text-2xl"
              />
            </button>

            <button className=" w-20 text-center  ms-2 bg-blue-500 text-white border-0 py-2 shadow-lg px-3 focus:outline-none hover:bg-blue-600 transition duration-200 rounded text-base">
              Login
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
