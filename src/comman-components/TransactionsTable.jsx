import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { CiSearch } from "react-icons/ci";
const TransactionsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const transactions = [
    {
      id: 1,
      name: "Rowan Blake",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "14 Jan 2024",
      time: "05:34:45 AM",
      amount: "$5,500.00",
      status: "Success",
    },
    {
      id: 2,
      name: "Alex Taylor",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "13 Jan 2024",
      time: "05:34:45 AM",
      amount: "-$5,167.00",
      status: "Pending",
    },
    {
      id: 3,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 4,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 5,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 6,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 7,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 8,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 9,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 10,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 11,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 12,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 13,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 14,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 15,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 16,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
    {
      id: 17,
      name: "Skyler Quin",
      profileImage:
        "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
      cardType: "Debit",
      cardNo: "**** 1234",
      date: "11 Jan 2024",
      time: "05:34:45 PM",
      amount: "-$3,120.00",
      status: "Canceled",
    },
  ];

  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const DOTS = "...";

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-3 py-1 rounded-lg border border-green-700 ${
              currentPage === i ? "bg-secondary text-white" : ""
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Handle long paginations with `...`
      if (currentPage > 3) {
        buttons.push(
          <button
            key={1}
            onClick={() => setCurrentPage(1)}
            className={`px-3 py-1 rounded-lg border border-green-700 ${
              currentPage === 1 ? "bg-secondary text-white" : ""
            }`}
          >
            1
          </button>
        );

        if (currentPage > 4) {
          buttons.push(
            <button
              key='dots-left'
              className='px-3 py-1 cursor-default rounded-lg border border-green-700'
            >
              {DOTS}
            </button>
          );
        }
      }

      // Show middle pages
      const startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalPages, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-3 py-1 rounded-lg border border-secondary ${
              currentPage === i ? "bg-secondary text-white" : ""
            }`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        buttons.push(
          <button
            key='dots-right'
            className='px-3 py-1 cursor-default rounded-lg border border-secondary'
          >
            {DOTS}
          </button>
        );
      }

      // Show the last page
      if (currentPage < totalPages - 1) {
        buttons.push(
          <button
            key={totalPages}
            onClick={() => setCurrentPage(totalPages)}
            className={`px-3 py-1 rounded-lg border border-secondary ${
              currentPage === totalPages ? "bg-secondary text-white" : ""
            }`}
          >
            {totalPages}
          </button>
        );
      }
    }

    return buttons;
  };

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const renderStatusBadge = (status) => {
    const statusColors = {
      Success: "bg-green-100 text-secondary border-secondary",
      Pending: "bg-yellow-100 text-yellow-700 border-yellow-700",
      Canceled: "bg-red-100 text-red-700 border-red-700",
    };
    return (
      <span
        className={`px-3 py-1 rounded-md text-sm font-bold border ${statusColors[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className='text-secondary'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold'>Recent Transactions</h2>
        <div className='flex items-center border border-secondary rounded-lg px-3 py-2 w-64 bg-transparent'>
          <CiSearch className='mr-2' />
          <input
            type='text'
            placeholder='Search transactions'
            className='outline-none bg-transparent flex-grow text-sm'
          />
        </div>
      </div>

      <table className='w-full text-left text-sm text-secondary'>
        <thead>
          <tr className='border-b border-t'>
            <th className='w-1/5 py-4'>Name</th>
            <th className='w-1/5'>Card No</th>
            <th className='w-1/4'>Date</th>
            <th className='w-1/6'>Amount</th>
            <th className='w-1/12'>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTransactions.map((transaction) => (
            <tr key={transaction.id} className='hover:bg-gray-50'>
              <td className='py-4 flex items-center space-x-2'>
                <img
                  src={transaction.profileImage}
                  alt={transaction.name}
                  className='w-10 h-10 rounded-full'
                />
                <span className='font-medium'>{transaction.name}</span>
              </td>
              <td className='font-medium'>
                {transaction.cardType} <br />
                {transaction.cardNo}
              </td>
              <td className='font-medium'>
                {transaction.date} <br />
                {transaction.time}
              </td>
              <td className='font-medium'>{transaction.amount}</td>
              <td>{renderStatusBadge(transaction.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='flex justify-end items-center space-x-2 mt-4'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className='p-2 rounded-md border border-secondary hover:bg-gray-300'
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        {renderPaginationButtons()}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='p-2 rounded-md border border-secondary hover:bg-gray-300'
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TransactionsTable;
