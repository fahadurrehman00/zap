import React from "react";
import Logo from "../assets/images/logo.png";
import HomeIcon from "../assets/images/home.svg";
import CardIcon from "../assets/images/solar_card-transfer.svg";
import AccountIcon from "../assets/images/solar_card.svg";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className='bg-secondary text-primary h-screen w-[14rem] flex flex-col justify-between p-4 rounded-xl'>
      <div>
        <div className='flex justify-center mb-6'>
          <img src={Logo} alt='Zap' />
        </div>
        <button className='bg-primary py-2 px-4 rounded w-full mb-6 text-secondary'>
          Send Money
        </button>
        <div>
          <ul className='flex flex-col gap-4'>
            <li className='p-2 rounded flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-secondary transition-all duration-300'>
              <img src={HomeIcon} alt='Home' />
              <a href='#'>Home</a>
            </li>
            <li className='p-2 rounded flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-secondary transition-all duration-300'>
              <img src={AccountIcon} alt='Home' />
              <a href='#'>Accounts</a>
            </li>
            <li className='p-2 rounded flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-secondary transition-all duration-300'>
              <img src={CardIcon} alt='Home' />
              <Link href='transaction'>Transactions</Link>
            </li>
            <li className='p-2 rounded flex gap-2 items-center cursor-pointer hover:bg-primary hover:text-secondary transition-all duration-300'>
              <img src={AccountIcon} alt='Home' />
              <a href='#'>Cards</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
