import React, { useState } from "react";

const FinancialRecords = () => {
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const financialData = {
    totalBalance: "$1,502.45",
    income: "$1,502.45",
    spendings: "$1,502.45",
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold'>Financial Records</h2>
        <div className='relative'>
          <button
            onClick={toggleDropdown}
            className='bg-secondary text-white py-2 px-4 rounded flex items-center'
          >
            {selectedMonth} <span className='ml-2'>&#x25BC;</span>
          </button>
          {isDropdownOpen && (
            <div className='absolute top-full right-0 bg-white border border-gray-300 rounded shadow-lg mt-2'>
              {months.map((month) => (
                <button
                  key={month}
                  onClick={() => handleMonthSelect(month)}
                  className='block w-full text-left px-4 py-2 hover:bg-gray-100'
                >
                  {month}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        <div className='bg-primary rounded-lg p-4'>
          <h3 className='text-sm font-medium mb-2'>
            Total balance from all accounts
          </h3>
          <p className='text-xl font-bold'>{financialData.totalBalance}</p>
        </div>

        <div className='bg-primary rounded-lg p-4'>
          <h3 className='text-sm font-medium mb-2'>Income</h3>
          <p className='text-xl font-bold'>{financialData.income}</p>
        </div>

        <div className='bg-primary rounded-lg p-4'>
          <h3 className='text-sm font-medium mb-2'>Spendings</h3>
          <p className='text-xl font-bold'>{financialData.spendings}</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialRecords;
