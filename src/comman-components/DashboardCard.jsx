import React from "react";

const DashboardCard = ({ flag, price, currency }) => {
  return (
    <div className='bg-primary rounded-xl p-4 shadow-md flex flex-col justify-between text-center h-48'>
      <img src={flag} alt={`${currency} flag`} className='w-10 h-10 mb-4' />
      <div className='flex justify-between'>
        <p className=' font-bold'>{price}</p>
        <p>{currency}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
