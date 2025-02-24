import React, { useState } from 'react';
import { Menu, Transition, Popover } from '@headlessui/react';
import {
  Square3Stack3DIcon,
  UsersIcon,
  BookOpenIcon,
  EnvelopeIcon,
  CalendarIcon,
  ClockIcon,
  BellIcon,
  ChevronDownIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
  BuildingOfficeIcon,
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const SidebarMenuItem = ({ icon, label, href, isCollapsed, notifications }) => {
  return (
    <a
      href={href}
      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg group relative transition-all duration-200 ease-in-out"
    >
      <div className="flex items-center">
        <div className="relative">
          {icon}
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {notifications}
            </span>
          )}
        </div>
        <span className={`ml-3 transition-all duration-200 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
          {label}
        </span>
      </div>
      <ChevronRightIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </a>
  );
};

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { icon: <Square3Stack3DIcon className="w-5 h-5" />, label: 'Dashboard', href: '#', notifications: 0 },
    { icon: <UsersIcon className="w-5 h-5" />, label: 'Keanggotaan', href: '#', notifications: 3 },
    { icon: <ChartBarIcon className="w-5 h-5" />, label: 'Keuangan', href: '#', notifications: 0 },
    { icon: <BookOpenIcon className="w-5 h-5" />, label: 'Praktikum', href: '#', notifications: 2 },
    { icon: <DocumentTextIcon className="w-5 h-5" />, label: 'Surat', href: '#', notifications: 0 },
    { icon: <ClockIcon className="w-5 h-5" />, label: 'Piket', href: '#', notifications: 0 },
    { icon: <CalendarIcon className="w-5 h-5" />, label: 'Acara', href: '#', notifications: 1 },
  ];

  return (
    <div 
      className={`bg-white h-screen fixed left-0 top-0 border-r transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="p-4 border-b flex items-center justify-between">
        <h1 className={`font-bold transition-all duration-300 ${isCollapsed ? 'text-lg' : 'text-xl'}`}>
          {isCollapsed ? 'SL' : 'SILAB'}
        </h1>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="w-5 h-5" />
          ) : (
            <Bars3Icon className="w-5 h-5" />
          )}
        </button>
      </div>
      <nav className="mt-4 px-2 space-y-1">
        {menuItems.map((item, index) => (
          <SidebarMenuItem
            key={index}
            {...item}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>
    </div>
  );
};

const NotificationItem = ({ title, description, time, isUnread }) => (
  <div className={`p-4 hover:bg-gray-50 cursor-pointer ${isUnread ? 'bg-blue-50' : ''}`}>
    <div className="flex items-start gap-4">
      <div className={`w-2 h-2 mt-2 rounded-full ${isUnread ? 'bg-blue-500' : 'bg-gray-300'}`} />
      <div className="flex-1">
        <p className="font-medium text-sm">{title}</p>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-gray-400 text-xs mt-2">{time}</p>
      </div>
    </div>
  </div>
);

const Navbar = ({ isCollapsed }) => {
  const [labOptions] = useState([
    { name: 'Lab DSI', count: 12 },
    { name: 'Lab RPL', count: 8 },
    { name: 'Lab SI', count: 15 },
  ]);

  return (
    <div className={`fixed top-0 bg-white border-b transition-all duration-300 ${
      isCollapsed ? 'left-20' : 'left-64'
    } right-0`}>
      <div className="flex items-center justify-between px-8 py-4">
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center space-x-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <BuildingOfficeIcon className="w-5 h-5" />
            <span>Pilih Laboratorium DSI</span>
            <ChevronDownIcon className="w-4 h-4" />
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute left-0 mt-2 w-72 bg-white border rounded-lg shadow-lg py-1">
              {labOptions.map((option, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? 'bg-gray-50' : ''
                      } flex items-center justify-between px-4 py-3 text-sm text-gray-700`}
                    >
                      <span className="flex items-center gap-2">
                        <BuildingOfficeIcon className="w-5 h-5 text-gray-400" />
                        {option.name}
                      </span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {option.count} users
                      </span>
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        <div className="flex items-center space-x-2">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 relative">
                  <BellIcon className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                </Popover.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Popover.Panel className="absolute right-0 mt-2 w-96 bg-white border rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4 border-b flex items-center justify-between">
                      <h2 className="font-semibold">Notifications</h2>
                      <button className="text-sm text-blue-600 hover:text-blue-800">Mark all as read</button>
                    </div>
                    <div className="divide-y max-h-96 overflow-y-auto">
                      <NotificationItem
                        title="New Praktikum Schedule"
                        description="The praktikum schedule for next week has been updated."
                        time="5 minutes ago"
                        isUnread
                      />
                      <NotificationItem
                        title="Membership Request"
                        description="John Doe has requested to join Lab DSI."
                        time="1 hour ago"
                        isUnread
                      />
                      <NotificationItem
                        title="System Update"
                        description="SILAB will undergo maintenance tonight at 11 PM."
                        time="2 hours ago"
                      />
                    </div>
                    <div className="p-4 border-t bg-gray-50">
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-800">View all notifications</a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <UserCircleIcon className="w-5 h-5 text-gray-600" />
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? 'bg-gray-50' : ''
                      } flex items-center px-4 py-2 text-sm text-gray-700`}
                    >
                      <Cog6ToothIcon className="w-5 h-5 mr-3" />
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? 'bg-gray-50' : ''
                      } flex items-center px-4 py-2 text-sm text-red-600`}
                    >
                      <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

const DashboardOverview = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
    {[
      { title: 'Total Members', value: '2,345', icon: UsersIcon, change: '+5.25%', isUp: true },
      { title: 'Active Projects', value: '12', icon: BookOpenIcon, change: '-2.5%', isUp: false },
      { title: 'Completed Tasks', value: '432', icon: ClockIcon, change: '+12.5%', isUp: true },
      { title: 'Pending Reports', value: '6', icon: DocumentTextIcon, change: '0%', isUp: true }
    ].map((stat, index) => (
      <div key={index} className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{stat.title}</p>
            <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <stat.icon className="w-6 h-6 text-gray-700" />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <ArrowTrendingUpIcon className={`w-4 h-4 ${stat.isUp ? 'text-green-500' : 'text-red-500'}`} />
          <span className={`text-sm ml-1 ${stat.isUp ? 'text-green-500' : 'text-red-500'}`}>
            {stat.change}
          </span>
          <span className="text-sm text-gray-500 ml-2">vs last month</span>
        </div>
      </div>
    ))}
  </div>
);

const Footer = ({ isCollapsed }) => {
  return (
    <footer className={`fixed bottom-0 bg-white border-t transition-all duration-300 ${
      isCollapsed ? 'left-20' : 'left-64'
    } right-0`}>
      <div className="px-8 py-4 flex items-center justify-between">
        <span className="text-sm text-gray-600">
          Copy Right © 2025 DSI
        </span>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 transition-colors duration-200">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

const DashboardLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Navbar isCollapsed={isCollapsed} />
        <main className={`transition-all duration-300 ${
          isCollapsed ? 'ml-20' : 'ml-64'
        } pt-20 pb-16 px-8`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Selamat Datang, Kepala Departemen</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Here's what's happening with your lab today.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-white border rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5" />
                  <span>Filter by Date</span>
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                  <DocumentTextIcon className="w-5 h-5" />
                  <span>Generate Report</span>
                </button>
              </div>
            </div>
  
            <DashboardOverview />
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Recent Activities */}
              <div className="bg-white rounded-xl border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Recent Activities</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'New member joined', time: '2 minutes ago', icon: UsersIcon },
                    { title: 'Project deadline updated', time: '1 hour ago', icon: CalendarIcon },
                    { title: 'New document uploaded', time: '3 hours ago', icon: DocumentTextIcon }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <activity.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Upcoming Schedule */}
              <div className="bg-white rounded-xl border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Upcoming Schedule</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View calendar</button>
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Lab Meeting', time: '09:00 AM', duration: '1 hour', type: 'Meeting' },
                    { title: 'Project Review', time: '02:00 PM', duration: '2 hours', type: 'Review' },
                    { title: 'Team Training', time: '04:00 PM', duration: '1.5 hours', type: 'Training' }
                  ].map((event, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <div className="flex-1">
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-gray-500">{event.time} · {event.duration}</p>
                      </div>
                      <span className="text-xs font-medium text-gray-500">{event.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {children}
          </div>
        </main>
        <Footer isCollapsed={isCollapsed} />
      </div>
    );
  };
  
  export default DashboardLayout;