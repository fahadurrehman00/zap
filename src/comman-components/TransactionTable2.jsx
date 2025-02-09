import React, { useState } from "react";
import { FiSearch, FiFilter, FiEye, FiPrinter, FiTrash2 } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BsEye } from "react-icons/bs";

const TransactionTable2 = () => {
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const transactions = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: "User " + (i + 1),
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    amount: i % 2 === 0 ? 302000 : -302000,
    method: i % 3 === 0 ? "Transfer" : "Card",
    cardNumber: i % 3 === 0 ? "****9081" : "****9090",
    date: "16 Jan 2024",
    time: "10:00 AM",
    status: i % 2 === 0 ? "Success" : i % 3 === 0 ? "Pending" : "Canceled",
  }));

  const totalPages = Math.ceil(transactions.length / recordsPerPage);
  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const renderStatusBadge = (status) => {
    const statusColors = {
      Success: "bg-green-100 text-green-700 border-green-700",
      Pending: "bg-yellow-100 text-yellow-700 border-yellow-700",
      Canceled: "bg-red-100 text-red-700 border-red-700",
    };
    return (
      <span
        className={`px-3 py-1 rounded text-sm font-semibold border ${statusColors[status]}`}
      >
        {status}
      </span>
    );
  };

  const renderPaginationLinks = () => {
    const paginationLinks = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        paginationLinks.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-3 py-1 rounded-lg border ${currentPage === i ? "bg-secondary text-white" : "border-secondary"}`}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 4; i++) {
          paginationLinks.push(
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`px-3 py-1 rounded-lg border ${currentPage === i ? "bg-secondary text-white" : "border-secondary"}`}
            >
              {i}
            </button>
          );
        }
        paginationLinks.push(<span key="ellipsis" className="px-3">...</span>);
        paginationLinks.push(
          <button
            key={totalPages}
            onClick={() => setCurrentPage(totalPages)}
            className={`px-3 py-1 rounded-lg border ${currentPage === totalPages ? "bg-secondary text-white" : "border-secondary"}`}
          >
            {totalPages}
          </button>
        );
      } else if (currentPage > 4 && currentPage < totalPages - 3) {
        paginationLinks.push(
          <button
            key={1}
            onClick={() => setCurrentPage(1)}
            className={`px-3 py-1 rounded-lg border ${currentPage === 1 ? "bg-secondary text-white" : "border-secondary"}`}
          >
            1
          </button>
        );
        paginationLinks.push(<span key="ellipsis-start" className="px-3">...</span>);
        paginationLinks.push(
          <button
            key={currentPage - 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-3 py-1 rounded-lg border ${currentPage === currentPage - 1 ? "bg-secondary text-white" : "border-secondary"}`}
          >
            {currentPage - 1}
          </button>
        );
        paginationLinks.push(
          <button
            key={currentPage}
            className="px-3 py-1 rounded-lg border bg-secondary text-white"
          >
            {currentPage}
          </button>
        );
        paginationLinks.push(
          <button
            key={currentPage + 1}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-3 py-1 rounded-lg border ${currentPage === currentPage + 1 ? "bg-secondary text-white" : "border-secondary"}`}
          >
            {currentPage + 1}
          </button>
        );
        paginationLinks.push(<span key="ellipsis-end" className="px-3">...</span>);
        paginationLinks.push(
          <button
            key={totalPages}
            onClick={() => setCurrentPage(totalPages)}
            className={`px-3 py-1 rounded-lg border ${currentPage === totalPages ? "bg-secondary text-white" : "border-secondary"}`}
          >
            {totalPages}
          </button>
        );
      } else {
        paginationLinks.push(
          <button
            key={1}
            onClick={() => setCurrentPage(1)}
            className={`px-3 py-1 rounded-lg border ${currentPage === 1 ? "bg-secondary text-white" : "border-secondary"}`}
          >
            1
          </button>
        );
        paginationLinks.push(<span key="ellipsis" className="px-3">...</span>);
        for (let i = totalPages - 3; i <= totalPages; i++) {
          paginationLinks.push(
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`px-3 py-1 rounded-lg border ${currentPage === i ? "bg-secondary text-white" : "border-secondary"}`}
            >
              {i}
            </button>
          );
        }
      }
    }
    return paginationLinks;
  };

  return (
    <div className='text-secondary'>
      {/* Header Controls */}
      <div className='flex justify-between items-center mb-4'>
        <div className='flex space-x-2'>
          <div className='flex border border-gray-300 rounded-lg px-3 py-2 text-sm items-center'>
            <FiSearch className='mr-2 text-gray-500' />
            <input
              type='text'
              placeholder='Search...'
              className='outline-none bg-transparent'
            />
          </div>
          <button className='bg-gray-200 px-4 py-2 rounded-lg flex items-center'>
            <FiFilter className='mr-2' /> Filter
          </button>
        </div>
        <div className='flex space-x-2 items-center'>
          <button className='bg-green-200 p-2 rounded-lg'>
            <BsEye />
          </button>
          <span>Show</span>
          <select
            value={recordsPerPage}
            onChange={(e) => setRecordsPerPage(parseInt(e.target.value))}
            className='bg-gray-200 px-3 py-2 rounded-lg focus:outline-none'
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <table className='w-full text-left text-sm'>
        <thead>
          <tr className='border-b border-t'>
            <th className='py-4'>Name</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
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
              <td
                className={`font-medium ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}
              >
                {transaction.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td>{transaction.method} <br /> {transaction.cardNumber}</td>
              <td>{transaction.date} <br /> {transaction.time}</td>
              <td>{renderStatusBadge(transaction.status)}</td>
              <td>
                <div className='flex space-x-2'>
                  <FiEye className='cursor-pointer text-secondary text-base' />
                  <FiPrinter className='cursor-pointer text-secondary text-base' />
                  <FiTrash2 className='cursor-pointer text-secondary text-base' />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className='flex justify-between items-center mt-4'>
        <span>
          Showing {(currentPage - 1) * recordsPerPage + 1}-
          {Math.min(currentPage * recordsPerPage, transactions.length)} from {transactions.length}
        </span>
        <div className='flex space-x-2'>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className='p-2 rounded-md border border-secondary hover:bg-gray-300'
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          {renderPaginationLinks()}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className='p-2 rounded-md border border-secondary hover:bg-gray-300'
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable2;
