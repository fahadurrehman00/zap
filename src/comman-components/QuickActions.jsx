import React from "react";
import {
  FaExchangeAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaCoins,
  FaRegPaperPlane,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const QuickActions = () => {
  const actions = [
    { label: "Transfer", icon: <FaExchangeAlt /> },
    { label: "Deposit", icon: <FaMoneyBillWave /> },
    { label: "Payment", icon: <FaCreditCard /> },
    { label: "Convert", icon: <FaCoins /> },
    { label: "Remit", icon: <FaRegPaperPlane /> },
  ];

  return (
    <div className='p-4 text-secondary'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold'>Quick Actions</h2>
        <BsThreeDotsVertical className=' cursor-pointer' />
      </div>
      <div className='flex justify-between'>
        {actions.map((action) => (
          <div
            key={action.label}
            className='flex flex-col items-center space-y-2 bg-primary rounded-full w-20 h-20 justify-center cursor-pointer hover:bg-secondary hover:text-primary transition-all Duration-500'
          >
            <div className='text-xl'>{action.icon}</div>
            <span className='text-xs font-medium text-center'>
              {action.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
