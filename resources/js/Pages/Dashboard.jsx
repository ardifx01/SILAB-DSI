import React from 'react';
import DashboardLayout  from '../Layouts/DashboardLayout';

const App = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
          <p>Content for this card goes here</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Statistics</h3>
          <p>Content for this card goes here</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Notifications</h3>
          <p>Content for this card goes here</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default App;