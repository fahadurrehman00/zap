import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import DashboardCard from "../comman-components/DashboardCard";
import Flag1 from "../assets/images/flag1.png";
import Flag2 from "../assets/images/flag2.png";
import Flag3 from "../assets/images/flag3.png";
import TransactionsTable from "../comman-components/TransactionsTable";
import FinancialRecords from "../comman-components/FinancialRecords";
import QuickActions from "../comman-components/QuickActions";
import RecentContacts from "../comman-components/RecentContacts";
import Cards from "../comman-components/Cards";

const Dashboard = () => {
  const cards = [
    { flag: Flag1, price: "5,518.39", currency: "AED" },
    { flag: Flag2, price: "5,518.39", currency: "GBP" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
    { flag: Flag3, price: "5,518.39", currency: "Euro" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='grid grid-cols-10 gap-4 p-4'>
      {/* Left Section (6/10) */}
      <div className='col-span-6'>
        <div>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-xl font-bold'>Account</h2>
            <div className='flex space-x-2'>
              <MdOutlineKeyboardArrowLeft
                className={`cursor-pointer text-xl rounded-full p-1 bg-primary hover:bg-secondary hover:text-white transition-all duration-500 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handlePrev}
              />
              <MdOutlineKeyboardArrowRight
                className={`cursor-pointer text-xl rounded-full p-1 bg-primary hover:bg-secondary hover:text-white transition-all duration-500 ${
                  currentIndex >= cards.length - visibleCards
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handleNext}
              />
            </div>
          </div>
          <div className='overflow-hidden w-full'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {cards.map((card, index) => (
                <div key={index} className='w-1/3 flex-shrink-0 p-2'>
                  <DashboardCard
                    flag={card.flag}
                    price={card.price}
                    currency={card.currency}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <FinancialRecords />
        </div>
        <div className='mt-12'>
          <TransactionsTable />
        </div>
      </div>
      {/* Right Section (4/10) */}
      <div className='col-span-4'>
        <div>
          <QuickActions />
          <RecentContacts />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
