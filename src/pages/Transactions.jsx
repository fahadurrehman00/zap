import React from "react";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import TransactionCard from "../comman-components/TransactionCard";
import { FiArrowUpRight, FiArrowDownLeft, FiRepeat } from "react-icons/fi";
import TransactionTable2 from "../comman-components/TransactionTable2";

const Transactions = () => {
  const transactionData = [
    {
      title: "Transactions",
      amount: "4,200",
      percentage: 10,
      change: "+150 today",
      icon: <FiRepeat />,
      color: "#7B61FF",
      data: [10, 20],
    },
    {
      title: "Income",
      amount: "$1,212,210",
      percentage: -5,
      change: "+150 today",
      icon: <FiArrowDownLeft />,
      color: "#28A745",
      data: [30, 40],
    },
    {
      title: "Expenses",
      amount: "$512,000",
      percentage: 10,
      change: "+150 today",
      icon: <FiArrowUpRight />,
      color: "#FFA500",
      data: [15, 25],
    },
  ];
  return (
    <div className='text-secondary'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h2 className='text-lg font-semibold'>Transactions</h2>
          <nav className='text-sm'>
            <Link to='/dashboard' className='hover:underline'>
              Dashboard
            </Link>
            <span className='mx-2'>&gt;</span>
            <span className='text-gray-600'>Transactions</span>
          </nav>
        </div>
        <button className='bg-secondary text-primary p-2 rounded-md flex items-center'>
          <FiDownload className='mr-2' /> Export
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
        {transactionData.map((item, index) => (
          <TransactionCard key={index} {...item} />
        ))}
      </div>
      <TransactionTable2 />
    </div>
  );
};

export default Transactions;
