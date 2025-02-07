import React from "react";
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
  return (
    <div className='grid grid-cols-10 gap-4 p-4'>
      {/* Left Section (6/10) */}
      <div className='col-span-6'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-bold'>Account</h2>
          <div className='flex space-x-2'>
            <MdOutlineKeyboardArrowLeft className='cursor-pointer text-xl rounded-full p-1 bg-primary hover:bg-secondary hover:text-white transition-all Duration-500' />
            <MdOutlineKeyboardArrowRight className='cursor-pointer text-xl rounded-full p-1 bg-primary hover:bg-secondary hover:text-white transition-all Duration-500' />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <DashboardCard flag={Flag1} price='5,518.39' currency='AED' />
          <DashboardCard flag={Flag2} price='5,518.39' currency='GBP' />
          <DashboardCard flag={Flag3} price='5,518.39' currency='Euro' />
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
