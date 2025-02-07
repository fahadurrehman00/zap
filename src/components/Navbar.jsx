import React, { useState } from "react";
import User from "../assets/images/user.png";
import SearchIcon from "../assets/images/search.svg";
import BellIcon from "../assets/images/bell.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className='flex justify-between items-center px-4'>
      <div>
        <h1 className='text-lg font-bold'>Welcome to ZAP</h1>
        <h5>User</h5>
      </div>
      <div className='flex items-center space-x-4'>
        {/* Search Bar */}
        <div
          className={`flex items-center bg-primary rounded-full ${
            isSearchOpen ? "w-64 p-2" : "w-10 p-2"
          } transition-all duration-300 ease-in-out cursor-pointer`}
          onClick={toggleSearch}
        >
          <img src={SearchIcon} alt='Search' className='h-5 w-5' />
          {isSearchOpen && (
            <input
              type='text'
              placeholder='Search...'
              className='ml-2 w-full bg-transparent outline-none text-black'
              autoFocus
            />
          )}
        </div>

        {/* Notification Icon */}
        <div className='bg-primary rounded-full p-2 cursor-pointer'>
          <img src={BellIcon} alt='Bell' />
        </div>

        {/* User Profile */}
        <div className='flex items-center space-x-2 cursor-pointer'>
          <img src={User} alt='User' className='h-10 w-10 rounded-full' />
          <span>User Name</span>
          <MdOutlineKeyboardArrowRight className='text-xl' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
