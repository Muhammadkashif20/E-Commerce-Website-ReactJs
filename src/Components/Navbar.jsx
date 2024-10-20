import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-gray-300 shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-3xl transition-transform duration-300 hover:scale-105">Life Essentials Hub <span className='text-3xl'>🛒</span></span>
          </a>
          
          {/* Search Input */}
          <div className="flex-grow mx-5">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full py-2 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 ease-in-out"
            />
          </div>

          {/* Add to Cart Icon */}
          <div className="flex items-center">
            <a href="#" className="mr-4 text-gray-900 transition duration-300 hover:text-blue-500 hover:scale-110">
            <FontAwesomeIcon icon={faCartPlus} className="mr-2 text-gray-600 text-2xl" />
            </a>

            {/* Login Button */}
            <button className="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 transition duration-200 rounded text-base">
              Login
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
