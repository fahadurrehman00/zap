import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Cards = () => {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const handleAddCard = () => {
    alert("Card added successfully!");
    setCardInfo({ cardNumber: "", expirationDate: "", cvc: "" });
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold'>Cards</h2>
        <button className='bg-green-800 text-white py-2 px-4 rounded flex items-center hover:bg-green-700 transition-all Duaration-500'>
          See All <span className='ml-2'>&#8599;</span>
        </button>
      </div>

      <div className='bg-purple-900 p-6 rounded-lg text-purple-900 mb-4'>
        <input
          type='text'
          name='cardNumber'
          value={cardInfo.cardNumber}
          onChange={handleInputChange}
          placeholder='0000 0000 0000 0000'
          className='w-full px-1 bg-white text-purple-900 rounded mb-4 focus:outline-none placeholder-purple-900'
        />
        <div className='flex space-x-4 w-1/2'>
          <div>
            <label className='text-white font-light text-sm'>
              Expiration Date
            </label>
            <input
              type='text'
              name='expirationDate'
              value={cardInfo.expirationDate}
              onChange={handleInputChange}
              placeholder='MM/YY'
              className='w-1/2 px-1 bg-white rounded focus:outline-none placeholder-purple-900'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-white font-light text-sm'>CVC/CW</label>
            <input
              type='text'
              name='cvc'
              value={cardInfo.cvc}
              onChange={handleInputChange}
              placeholder='000'
              className='w-1/2 px-1 bg-white rounded focus:outline-none placeholder-purple-900'
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleAddCard}
        className='bg-green-800 text-white py-3 px-6 rounded flex items-center justify-center w-full hover:bg-green-700 transition-all Duaration-500'
      >
        <FaPlus className='mr-2' /> Add New Card
      </button>
    </div>
  );
};

export default Cards;
