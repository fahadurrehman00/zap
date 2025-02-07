import React from "react";
import Logo from "../assets/images/logo.png";
import HomeIcon from "../assets/images/home.svg";
import CardIcon from "../assets/images/solar_card-transfer.svg";
import AccountIcon from "../assets/images/solar_card.svg";

const Sidebar = () => {
  return (
    <div className='bg-[#003C0F] text-[#B7FA8A] h-screen w-[14rem] flex flex-col justify-between p-4 rounded-xl'>
      <div>
        <div className='flex justify-center mb-6'>
          <img src={Logo} alt='Zap' />
        </div>
        <button className='bg-[#B7FA8A] py-2 px-4 rounded w-full mb-6 text-[#003C0F]'>
          Send Money
        </button>
        <div>
          <ul className='flex flex-col gap-4'>
            <li className='p-2 rounded flex gap-2 items-center cursor-pointer hover:bg-[#B7FA8A] hover:text-[#003C0F] transition-all duration-300'>
              <img src={HomeIcon} alt='Home' />
              <a href='#'>Home</a>
            </li>
            <li className='p-2 rounded flex gap-2 items-center cursor-pointer hover:bg-[#B7FA8A] hover:text-[#003C0F] transition-all duration-300'>
              <img src={AccountIcon} alt='Home' />
              <a href='#'>Accounts</a>
            </li>
            <li className='p-2 rounded flex gap-2 items-center cursor-pointer hover:bg-[#B7FA8A] hover:text-[#003C0F] transition-all duration-300'>
              <img src={CardIcon} alt='Home' />
              <a href='#'>Transactions</a>
            </li>
            <li className='p-2 rounded flex gap-2 items-center cursor-pointer hover:bg-[#B7FA8A] hover:text-[#003C0F] transition-all duration-300'>
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
