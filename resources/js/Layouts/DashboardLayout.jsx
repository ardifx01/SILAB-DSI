import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head title="Dashboard" />
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Navbar isCollapsed={isCollapsed} />
      <main className={`transition-all duration-300 ${
        isCollapsed ? 'ml-20' : 'ml-64'
      } pt-16 pb-12 px-4 md:px-6`}>
        <div className="py-6">
          {children || (
            <div className="text-center text-gray-500 py-12 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome to SILAB Dashboard</h2>
              <p>This is the main content area. Your dashboard content will appear here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;