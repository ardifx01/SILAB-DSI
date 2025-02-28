import React, { useState, useEffect, useRef } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Theme } from "@radix-ui/themes";
import { Head, Link, usePage } from '@inertiajs/react';

import {
  Square3Stack3DIcon,
  UsersIcon,
  BookOpenIcon,
  ChevronDownIcon,
  UserCircleIcon,
  Bars3Icon,
  ChevronRightIcon,
  BuildingOfficeIcon,
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

// Dropdown Component using Radix UI DropdownMenu
const Dropdown = ({ trigger, items, width = "w-56", align = "right" }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className="cursor-pointer">
          {trigger}
        </div>
      </DropdownMenu.Trigger>
      
      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className={`${width} bg-white border rounded-lg shadow-lg py-1 z-50`}
          align={align === "right" ? "end" : "start"}
          sideOffset={5}
        >
          {items}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

// Sidebar MenuItem Component with submenu using Radix UI Collapsible
const SidebarMenuItem = ({ icon, label, href, isCollapsed, submenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const hasSubmenu = submenu && submenu.length > 0;
  const submenuRef = useRef(null);
  const { url } = usePage(); // Mendapatkan URL saat ini

  // Close submenu when sidebar collapses
  useEffect(() => {
    if (isCollapsed) {
      setIsSubmenuOpen(false);
    }
  }, [isCollapsed]);

  // Fix hover issues with collapsed sidebar tooltip
  const [hoverTimeout, setHoverTimeout] = useState(null);
  
  const handleMouseEnter = () => {
    if (isCollapsed && hasSubmenu) {
      const timeout = setTimeout(() => {
        setIsSubmenuOpen(true);
      }, 200);
      setHoverTimeout(timeout);
    }
  };
  
  const handleMouseLeave = () => {
    if (isCollapsed && hasSubmenu) {
      clearTimeout(hoverTimeout);
      const timeout = setTimeout(() => {
        setIsSubmenuOpen(false);
      }, 300);
      setHoverTimeout(timeout);
    }
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hasSubmenu && !isCollapsed ? (
        <Collapsible.Root 
          open={isSubmenuOpen} 
          onOpenChange={setIsSubmenuOpen}
        >
     <Collapsible.Trigger asChild>
  {href ? (
    <Link
      href={href}
      className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg group relative transition-all duration-200 ease-in-out ${
        url === href ? 'bg-gray-100 font-semibold' : ''
      }`}
    >
      <div className="flex items-center flex-grow min-w-0">
        <div className="relative flex-shrink-0">
          {icon}
        </div>
        <span className={`ml-3 transition-all duration-200 truncate ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
          {label}
        </span>
      </div>
      <ChevronDownIcon 
        className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isSubmenuOpen ? 'rotate-180' : ''}`} 
      />
    </Link>
  ) : (
    <button
      onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
      className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg group relative transition-all duration-200 ease-in-out"
    >
      <div className="flex items-center flex-grow min-w-0">
        <div className="relative flex-shrink-0">
          {icon}
        </div>
        <span className={`ml-3 transition-all duration-200 truncate ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
          {label}
        </span>
      </div>
      <ChevronDownIcon 
        className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isSubmenuOpen ? 'rotate-180' : ''}`} 
      />
    </button>
  )}
</Collapsible.Trigger>

          <Collapsible.Content className="mt-1 space-y-1 overflow-hidden transition-all duration-200 ease-in-out">
            {submenu.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.href}
                className={`block py-2 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 mx-2 pl-11 ${
                  url === subItem.href ? 'bg-gray-100 font-semibold' : ''
                }`}
              >
                {subItem.label}
              </Link>
            ))}
          </Collapsible.Content>
        </Collapsible.Root>
      ) : (
        <Link
          href={href}
          className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg group relative transition-all duration-200 ease-in-out ${
            url === href ? 'bg-gray-100 font-semibold' : ''
          }`}
        >
          <div className="flex items-center flex-grow min-w-0">
            <div className="relative flex-shrink-0">
              {icon}
            </div>
            <span className={`ml-3 transition-all duration-200 truncate ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              {label}
            </span>
          </div>
          {!hasSubmenu && !isCollapsed && (
            <ChevronRightIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
          )}
        </Link>
      )}
      
      {/* Improved tooltip submenu for collapsed sidebar */}
      {hasSubmenu && isCollapsed && isSubmenuOpen && (
        <div 
          className="absolute left-full top-0 ml-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-40"
          onMouseEnter={() => clearTimeout(hoverTimeout)}
          onMouseLeave={() => setIsSubmenuOpen(false)}
        >
          <div className="py-2 px-4 border-b font-medium text-sm">{label}</div>
          {submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 transition-colors duration-200 w-full ${
                url === subItem.href ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Improved Sidebar Component
const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const { url } = usePage(); // Mendapatkan URL saat ini
  const user = usePage().props.auth.user; // Mendapatkan data user dari Laravel Breeze

  const menuItems = [
    { 
      icon: <Square3Stack3DIcon className="w-5 h-5" />, 
      label: 'Dashboard', 
      href: '/dashboard', 
      submenu: [
        { label: 'Overview', href: '/dashboard/overview' },
        { label: 'Analytics', href: '/dashboard/analytics' },
        { label: 'Reports', href: '/dashboard/reports' }
      ] 
    },
    { 
      icon: <UsersIcon className="w-5 h-5" />, 
      label: 'Keanggotaan', 
    //   href: '/membership', 
      submenu: [
        { label: 'Anggota Aktif', href: '/membership/active' },
        { label: 'Permintaan Baru', href: '/membership/requests' },
        { label: 'Alumni', href: '/membership/alumni' }
      ] 
    },
    { 
      icon: <ChartBarIcon className="w-5 h-5" />, 
      label: 'Keuangan', 
    //   href: '/finance', 
      submenu: [
        { label: 'Pemasukan', href: '/finance/income' },
        { label: 'Pengeluaran', href: '/finance/expenses' },
        { label: 'Laporan', href: '/finance/reports' }
      ] 
    },
    { 
      icon: <BookOpenIcon className="w-5 h-5" />, 
      label: 'Praktikum', 
    //   href: '/practicum', 
      submenu: [
        { label: 'Jadwal', href: '/practicum/schedule' },
        { label: 'Materi', href: '/practicum/materials' },
        { label: 'Nilai', href: '/practicum/grades' }
      ] 
    },
  ];

  return (
    <div 
      className={`bg-white h-screen fixed left-0 top-0 border-r transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      } z-40 shadow-md`}
    >
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-blue-600 font-bold text-xl w-6 h-6 flex items-center justify-center">
            S
          </div>
          <h1 className={`font-bold ml-2 transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
            SILAB
          </h1>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRightIcon className="w-5 h-5" />
          ) : (
            <Bars3Icon className="w-5 h-5" />
          )}
        </button>
      </div>
      
      <div className="flex flex-col h-[calc(100%-64px)] justify-between">
        <nav className="mt-4 px-2 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <SidebarMenuItem
              key={index}
              {...item}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
        
        <div className="px-2 mb-4">
          <div className="border-t pt-4 mt-4">
            <SidebarMenuItem
              icon={<Cog6ToothIcon className="w-5 h-5" />}
              label="Settings"
              href="/settings"
              isCollapsed={isCollapsed}
            />
            <Link
              href="/logout"
              method="post"
              as="button"
              className="flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg group transition-all duration-200 ease-in-out"
            >
              <ArrowLeftOnRectangleIcon className="w-5 h-5" />
              <span className={`ml-3 transition-all duration-200 truncate ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                Logout
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Improved Navbar Component with proper responsive behavior
const Navbar = ({ isCollapsed }) => {
  const user = usePage().props.auth.user; // Mendapatkan data user dari Laravel Breeze
  const labOptions = [
      { name: 'Lab DSI', count: 12 },
      { name: 'Lab RPL', count: 8 },
      { name: 'Lab SI', count: 15 },
    ];
    
   

  const userMenuItems = [
    { label: "My Profile", icon: <UserCircleIcon className="w-5 h-5 mr-3" />, href: "/profile" },
    { label: "Settings", icon: <Cog6ToothIcon className="w-5 h-5 mr-3" />, href: "/settings" },
    { label: "Sign out", icon: <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />, href: "/logout", method: "post", isRed: true }
  ];
   // Lab Selector Dropdown Items
   const labSelectorItems = (
    <>
      {labOptions.map((option, index) => (
        <DropdownMenu.Item key={index} className="outline-none">
          <a
            href="#"
            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 w-full"
          >
            <span className="flex items-center gap-2">
              <BuildingOfficeIcon className="w-5 h-5 text-gray-400" />
              {option.name}
            </span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              {option.count} users
            </span>
          </a>
        </DropdownMenu.Item>
      ))}
    </>
  );

  // User Menu Dropdown Items
  const userMenuDropdownItems = (
    <>
      <div className="p-4 border-b">
        <p className="font-medium">{user.name}</p>
        <p className="text-sm text-gray-500 mt-1">{user.email}</p>
      </div>
      {userMenuItems.map((item, index) => (
        <DropdownMenu.Item key={index} className="outline-none">
          <Link
            href={item.href}
            method={item.method || "get"}
            as="button"
            className={`flex items-center px-4 py-3 text-sm ${item.isRed ? 'text-red-600 hover:text-red-700' : 'text-gray-700'} hover:bg-gray-50 w-full`}
          >
            {item.icon}
            {item.label}
          </Link>
        </DropdownMenu.Item>
      ))}
    </>
  );

  return (
    <div className={`fixed top-0 bg-white border-b transition-all duration-300 z-30 ${
      isCollapsed ? 'left-20' : 'left-64'
    } right-0 h-16 shadow-sm`}>
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
           <div className="flex items-center gap-4">
             <div className="text-lg font-semibold text-gray-700 hidden md:block">Dashboard</div>
             <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
             
             {/* Lab Selector Dropdown */}
             <Dropdown 
               trigger={
                 <button className="flex items-center space-x-2 text-gray-700 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                   <BuildingOfficeIcon className="w-5 h-5" />
                   <span className="hidden sm:inline-block">Lab DSI</span>
                   <ChevronDownIcon className="w-4 h-4" />
                 </button>
               }
               items={labSelectorItems}
               width="w-72"
               align="left"
             />
           </div>
   
           <div className="flex items-center space-x-2 md:space-x-4">
             <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
             
             {/* User Menu Dropdown */}
             <Dropdown 
               trigger={
                 <button className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 px-2 py-1">
                   {/* <img src="" alt="Profile" className="w-8 h-8 rounded-full" /> */}
                   <div className="hidden md:block text-left">
                   <p className="text-sm font-medium">{user.name}</p>
                   <p className="text-xs text-gray-500">{user.email}</p>
                   </div>
                   <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                 </button>
               }
               items={userMenuDropdownItems}
             />
           </div>
         </div>
    </div>
  );
};

// Improved Main Dashboard Layout with responsive page content
const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Theme>
      <Head title="Dashboard" />
      <div className="min-h-screen bg-gray-50">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <Navbar isCollapsed={isCollapsed} />
        <main className={`transition-all duration-300 ${
          isCollapsed ? 'ml-20' : 'ml-64'
        } pt-16 pb-12 px-4 md:px-6`}>
          <div className=" py-6">
            {children || (
              <div className="text-center text-gray-500 py-12 bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Welcome to SILAB Dashboard</h2>
                <p>This is the main content area. Your dashboard content will appear here.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </Theme>
  );
};

export default DashboardLayout;