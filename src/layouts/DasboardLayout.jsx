import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";

const DashboardLayout = () => {
  return (
    <div className='flex p-4 bg-background'>
      <Sidebar />
      <div className='flex flex-col flex-grow'>
        <Navbar />
        <main className='flex-grow p-4'>
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
